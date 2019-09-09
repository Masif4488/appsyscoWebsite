import { Component, OnInit } from '@angular/core';
import { FormRegister } from 'src/app/modal/formregister';
import { QuoteRequestBody } from 'src/app/modal/quoterequest';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-contact-find',
  templateUrl: './contact-find.component.html',
  styleUrls: ['./contact-find.component.css']
})
export class ContactFindComponent implements OnInit {

  FormRegister: FormRegister;
  buttonValue = 'SUBMIT';
  successMessage;
  showMessage = false;
  QuoteRequestBody: QuoteRequestBody;
  submitted = false;
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // tslint:disable-next-line: max-line-length
    contact_number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
    message: new FormControl('', [Validators.required])
  });
  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
  }
  console.log(this.registerForm.value);
  this.QuoteRequestBody = this.registerForm.value;
}
getQuotedForm() {
    this.formService.GetQuoteForm(this.QuoteRequestBody).subscribe((response) => {
          (async () => {
            this.buttonValue = 'LOADING...';
            await this.delay(2000);
            this.showMessage = true;
            this.FormRegister = response;
            this.buttonValue = 'SUBMIT';
        })();
    });
  }

  // Wait function
  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
 }
}
