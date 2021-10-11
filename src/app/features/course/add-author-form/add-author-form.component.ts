import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';
import { Author } from 'src/app/services/authors/interfaces/author';
import { LatinCharsValidatorDirective } from 'src/app/shared/directives/latin-chars-validator/latin-chars-validator.directive';

@Component({
  selector: 'app-add-author-form',
  templateUrl: './add-author-form.component.html',
  styleUrls: ['./add-author-form.component.css'],
})
export class AddAuthorFormComponent implements OnInit {
  @Input() selectedAuthors: string[] = [];

  @Output() authorAdd = new EventEmitter();

  public authorForm!: FormGroup;
  public existingAuthorForm!: FormGroup;
  public existingAuthors: Author[] = [];

  constructor(private formBuilder: FormBuilder, private authorStore: AuthorsStoreService) {}

  public ngOnInit(): void {
    this.authorForm = this.createForm();
    this.existingAuthorForm = this.createExistingAuthorForm();
  }

  ngOnChanges(): void {
    this.authorStore.getAll().subscribe((authors) => {
      let filteredAuthors = authors.filter((author) => !this.selectedAuthors.includes(author.id));
      this.existingAuthors = filteredAuthors;
    });
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      author: ['', [Validators.required, new LatinCharsValidatorDirective()]],
    });
  }

  createExistingAuthorForm(): FormGroup {
    return this.formBuilder.group({
      author: ['', [Validators.required]],
    });
  }

  get author(): AbstractControl {
    return this.authorForm.get('author') as AbstractControl;
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.authorStore.addAuthor(form.value.author).subscribe((resp) => {
        this.authorAdd.emit(resp.result.id);
      });
      this.authorForm.reset();
      this.authorForm.markAsPristine();
      this.authorForm.markAsUntouched();
    }
  }

  public selectExistingAuthor(form: FormGroup) {
    if (form.valid) {
      this.existingAuthors = this.existingAuthors.filter((author) => author.id !== form.value.author);
      this.authorAdd.emit(form.value.author);
      this.existingAuthorForm.reset();
      this.existingAuthorForm.markAsPristine();
      this.existingAuthorForm.markAsUntouched();
    }
  }
}
