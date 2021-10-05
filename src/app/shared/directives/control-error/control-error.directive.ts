import {
  Directive,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appControlError]',
})
export class ControlErrorDirective implements OnInit, OnDestroy {
  @Input() appControlError!: NgModel | FormControl;
  @Input() errorsDescription!: Record<string, Record<string, string>>;
  @Input() controlName!: string;

  private hasView: boolean = false;
  private valueChangeSubscription?: Subscription;
  private formSubmitSubscription?: Subscription;
  private isSubmitted: boolean = false;

  constructor(
    private _fg: ControlContainer,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private render: Renderer2
  ) {}

  createErrorMessage(errorKey: string): string {
    return this.errorsDescription[this.controlName][errorKey];
  }

  ngOnInit() {
    this.valueChangeSubscription = this.appControlError.valueChanges?.subscribe((val) => {
      if (val.length > 0) {
        this.displayError();
      }
    });

    this.formSubmitSubscription = (<FormGroupDirective>this._fg).ngSubmit.subscribe(() => {
      this.isSubmitted = true;
      this.displayError();
    });
  }

  ngOnDestroy() {
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
    if (this.formSubmitSubscription) {
      this.formSubmitSubscription.unsubscribe();
    }
  }

  displayError() {
    if (!this.hasView && (this.isSubmitted || !this.appControlError.touched) && this.appControlError.errors) {
      const container = this.templateRef.createEmbeddedView({});
      const parentNode = container.rootNodes[0];
      const textNode = this.render.createText(this.createErrorMessage(Object.keys(this.appControlError.errors)[0]));
      this.render.insertBefore(parentNode, textNode, parentNode.firstChild);
      this.viewContainer.insert(container);
      this.hasView = true;
    } else if (!this.appControlError.errors && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
