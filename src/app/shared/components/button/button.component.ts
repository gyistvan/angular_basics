import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  template: `<button
    class="btn btn-info ms-3 text-white"
    [ngClass]="{ 'btn-lg': buttonSize === 'lg' }"
    (click)="click($event)"
  >
    <fa-icon *ngIf="iconName" [icon]="['fas', iconName]"></fa-icon>
    {{ btnText }}
  </button>`,
})
export class ButtonComponent implements OnInit {
  @Input() public btnText: string = '';
  @Input() public iconName?: IconName;
  @Input() public buttonSize = 'lg';

  @Output() onClick = new EventEmitter<MouseEvent>();

  ngOnInit(): void {}

  public click(event: MouseEvent): void {
    this.onClick.emit(event);
  }
}
