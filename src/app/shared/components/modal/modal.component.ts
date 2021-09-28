import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { CourseAction } from '../../interfaces/courseActions';
import { ModalSettings } from '../../interfaces/modalSettings';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  @Input() id!: string;
  @Input() title!: string;
  @Input() message!: string;
  @Input() okButtonText: string = 'Ok';
  @Input() cancelButtonText: string = 'Cancel';
  @Output() result = new EventEmitter<[number, CourseAction]>();

  private action!: CourseAction;
  public isOpen?: boolean;
  private courseId!: number;

  constructor(private modalService: ModalService, private el: ElementRef) {}

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    this.modalService.add(this);
  }

  open(params: ModalSettings): void {
    this.courseId = params.id;
    this.message = params.msg;
    this.action = params.action;
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

  public confirm(): void {
    this.result.emit([this.courseId, this.action]);
    this.close();
  }
}
