import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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
      name: ['', Validators.required],
      email: ['', [Validators.required, this.validateEmail()]],
      phone: ['', [Validators.required, this.validatePhone()]],

    });
  }

  validatePhone(): { [key: string]: any } | null {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      var regex = /[a-zA-Z]/g;
      var phone = control.value.replace(/^\D+/g, '');
      debugger;
      if (control.value.length == 0 || control.value == null) {
        return null;
      }

      if (phone.length < 10 || regex.test(control.value)) {
        return { 'phoneInvalid': true };
      }

      return null;
    }
  }

  validateEmail(): { [key: string]: any } | null {

    return (control: AbstractControl): { [key: string]: boolean } | null => {
      //Checking email length, double points, unique @ occurence and position of the dot.
      debugger;
      var email = control.value;
        if(email == null || email.length == 0)
        return null;


      if (email.indexOf("..") != -1 || (email.length - email.replace(/@/g, "").length != 1) ||
        email[0] == '.' || email[email.length - 1] == '.' || email.trim() != email.trim().replace(" ", ""))
        return { 'emailInvalid': true };

      debugger;
      //Checking invalid chars
      var invalidChars = new Array();
      invalidChars = '"|(|)|,|:|;|<|>|[|\\|]'.split('|');
      for (var inv = 0; inv < invalidChars.length; inv++) {
        if (email.indexOf(invalidChars[inv]) != -1)
          return { 'emailInvalid': true };

      }
      //Checking for at related rules chars
      var atIdx = email.indexOf("@");

      if (atIdx == 0 || atIdx == (email.length - 1) || email[atIdx - 1] == '.' || email[atIdx + 1] == '.' ||
        email.substring(atIdx + 1).indexOf(".") == -1) {
        return { 'emailInvalid': true };

      }
      //Check domain
      var domain = email.substring(email.lastIndexOf(".") + 1);
      if (domain.length < 2 || domain.length > 13 || domain.search("[0-9]") != -1)
        return { 'emailInvalid': true };

      return null;
    }
  }


}