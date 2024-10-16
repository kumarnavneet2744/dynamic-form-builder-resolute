import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  options?: string[];
  control: FormControl;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form-builder';

  form: FormGroup;
  fields: FormField[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  addField(type: string) {
    const fieldName = `field${this.fields.length}`;
    let newField: FormField;

    switch (type) {
      case 'text':
        newField = {
          name: fieldName,
          label: 'Text Field',
          type: 'text',
          placeholder: 'Enter text...',
          control: new FormControl('', Validators.required),
        };
        break;
      case 'textarea':
        newField = {
          name: fieldName,
          label: 'Text Area',
          type: 'textarea',
          placeholder: 'Enter description...',
          control: new FormControl('', Validators.required),
        };
        break;
      case 'dropdown':
        newField = {
          name: fieldName,
          label: 'Dropdown',
          type: 'dropdown',
          placeholder: 'Select an option...',
          options: ['Option 1', 'Option 2', 'Option 3'],
          control: new FormControl('', Validators.required),
        };
        break;
      case 'radio':
        newField = {
          name: fieldName,
          label: 'Radio Buttons',
          type: 'radio',
          placeholder: 'Select an option...',
          options: ['Option A', 'Option B'],
          control: new FormControl('', Validators.required),
        };
        break;
      case 'checkbox':
        newField = {
          name: fieldName,
          label: 'Checkbox',
          type: 'checkbox',
          placeholder: 'Select an option...',
          control: new FormControl(false),
        };
        break;
      default:
        return;
    }

    this.fields.push(newField);
    this.form.addControl(newField.name, newField.control);
  }

  removeField(index: number) {
    const field = this.fields[index];
    this.form.removeControl(field.name);
    this.fields.splice(index, 1);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  }
}
