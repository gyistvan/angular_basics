import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses/courses-store.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  public courseForm!: FormGroup;
  public lastRemovedAuthorId?: string;
  public courseId?: string;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private coursesStoreService: CoursesStoreService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.courseForm = this.createForm();
    let courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (courseId) {
      this.getCourse(courseId);
    }
  }

  private getCourse(courseId: string): void {
    this.coursesStoreService.getCourse(courseId).subscribe((course) => {
      this.courseForm.patchValue({
        title: course.title,
        description: course.description,
        duration: course.duration,
      });
      this.courseId = course.id;
      course.authors.forEach((authorId) => {
        this.addAuthor(authorId);
      });
    });
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required, Validators.min(0)]],
      authors: this.formBuilder.array([]),
    });
  }

  get title(): AbstractControl {
    return this.courseForm.get('title') as AbstractControl;
  }

  get description(): AbstractControl {
    return this.courseForm.get('description') as AbstractControl;
  }

  get duration(): AbstractControl {
    return this.courseForm.get('duration') as AbstractControl;
  }

  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }

  addAuthor(author: string): void {
    this.authors.push(this.formBuilder.control(author));
  }

  removeAuthor(id: string): void {
    let index = this.authors.value.findIndex((authorId: string) => id === authorId);
    this.authors.removeAt(index);
    this.lastRemovedAuthorId = id;
  }

  onFormSubmit(form: FormGroup) {
    if (form.valid) {
      let data = {
        title: this.title.value,
        description: this.description.value,
        duration: parseInt(this.duration.value),
        authors: this.authors.value,
      };
      if (this.courseId) {
        this.coursesStoreService.editCourse(this.courseId, data).subscribe(this.redirectToCourses.bind(this));
      } else {
        this.coursesStoreService.createCourse(data).subscribe(this.redirectToCourses.bind(this));
      }
    }
  }

  redirectToCourses(): void {
    this.router.navigate([`/courses`]);
  }
}
