import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/services/authors/interfaces/author';
import { LatinCharsValidatorDirective } from 'src/app/shared/directives/latin-chars-validator/latin-chars-validator.directive';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';

@Component({
  selector: 'app-add-author-form',
  templateUrl: './add-author-form.component.html',
  styleUrls: ['./add-author-form.component.css'],
})
export class AddAuthorFormComponent implements OnInit {
  @Input() selectedAuthors: string[] = [];

  @Output() addAuthor = new EventEmitter();

  public authorForm!: FormGroup;
  public existingAuthorForm!: FormGroup;
  public filteredAuthors: Author[] = [];

  constructor(private formBuilder: FormBuilder, private authorsStateFacade: AuthorsStateFacade) {}

  public ngOnInit(): void {
    this.authorForm = this.createForm();
    this.existingAuthorForm = this.createExistingAuthorForm();
  }

  ngOnChanges(): void {
    this.authorsStateFacade.authors$.subscribe((authors) => {
      this.filteredAuthors = authors.filter((author) => !this.selectedAuthors.includes(author.id));
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
      this.authorsStateFacade.addAuthor(form.value.author);
      this.authorForm.reset();
      this.authorForm.markAsPristine();
      this.authorForm.markAsUntouched();
    }
  }

  public selectExistingAuthor(form: FormGroup) {
    if (form.valid) {
      this.addAuthor.emit(form.value.author);
      this.existingAuthorForm.reset();
      this.existingAuthorForm.markAsPristine();
      this.existingAuthorForm.markAsUntouched();
    }
  }
}
