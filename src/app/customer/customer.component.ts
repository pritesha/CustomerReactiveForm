import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      givenName: [null, Validators.required],
      familyName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.customerForm.value);
  }
}
