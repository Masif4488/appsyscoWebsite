export class QuoteRequestBody {
 name: string;
 email: string;
 // tslint:disable-next-line: variable-name
 contact_number: number;
 message: string;

  // tslint:disable-next-line: variable-name
  constructor(name: string, email: string, contact_number: number, message: string) {
    this.name = name;
    this.email = email;
    this.contact_number = contact_number;
    this.message = message;
  }


}

