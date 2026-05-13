import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    email: ['', [Validators.required, Validators.email]],

    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      alert('Form Submitted');
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
