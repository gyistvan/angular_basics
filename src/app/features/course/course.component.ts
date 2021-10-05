import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.courseForm = this.createForm();
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

  removeAuthor(index: number): void {
    this.authors.removeAt(index);
  }

  onFormSubmit(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    console.log(form);
  }
}
