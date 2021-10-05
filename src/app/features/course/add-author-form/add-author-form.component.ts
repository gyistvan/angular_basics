import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LatinCharsValidatorDirective } from 'src/app/shared/directives/latin-chars-validator/latin-chars-validator.directive';

@Component({
  selector: 'app-add-author-form',
  templateUrl: './add-author-form.component.html',
  styleUrls: ['./add-author-form.component.css'],
})
export class AddAuthorFormComponent implements OnInit {
  authorForm!: FormGroup;
  @Output() authorAdd = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.authorForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      author: ['', [Validators.required, new LatinCharsValidatorDirective()]],
    });
  }

  get author(): AbstractControl {
    return this.authorForm.get('author') as AbstractControl;
  }

  onSubmit(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this.authorAdd.emit(form.value.author);
    this.authorForm.reset();
    this.authorForm.markAsPristine();
    this.authorForm.markAsUntouched();
  }
}
