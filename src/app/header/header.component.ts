import { Component, OnInit, ElementRef } from '@angular/core';
import {NgbModal, NgbModalConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuoteRequestBody } from '../modal/quoterequest';
import {FormRegister} from '../modal/formregister';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModal, NgbActiveModal]
})
export class HeaderComponent implements OnInit {
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

  // tslint:disable-next-line: max-line-length
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private formService: FormService, public router: Router ) {

   }

  routers = [
    {linkName: 'home', url: '/home'},
    {linkName: 'about', url: '/about'},
    {linkName: 'services', url: '/services'},
    {linkName: 'portfolio', url: '/portfolio'},
    {linkName: 'career', url: '/career'},
    {linkName: 'contact', url: '/contact'}
  ];

  ngOnInit() {
    console.log(this.router);

  }
openQuoteModal(content) {
    this.modalService.open(content, {
      windowClass: 'modal-holder', centered: true
    });
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
