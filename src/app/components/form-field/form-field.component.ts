import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  @Input() field: any;
  @Input() form!: FormGroup;
  @Output() remove = new EventEmitter<void>();

  get isRequired() {
    return this.field.required ? 'required' : '';
  }

  removeField(event:any) {
    this.remove.emit();
  }
}
