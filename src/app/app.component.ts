import { Component } from '@angular/core';
import { FormGroup ,FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form Validation Tutorial';
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
}

createForm() {
  this.angForm = this.fb.group({
     name: ['', Validators.required ],
    //  phone: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] ]
    phone: ['', [Validators.required,this.validatePhone()] ]
  });
}

validatePhone(): {[key: string]: any} | null  {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    var regex = /[a-zA-Z]/g;
    var phone = control.value.replace( /^\D+/g, '');
      debugger;
    if (phone.length < 10 || regex.test(control.value)) {
      return { 'phoneNumberInvalid': true };
    }
    
    return null;
  }
}


}