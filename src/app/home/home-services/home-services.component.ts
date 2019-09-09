import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent implements OnInit {

  constructor() { }

  homeService = [
    // tslint:disable-next-line: max-line-length
    {image: 'assets/images/db.png', headings: 'DIGITAL BRANDING', serviceContents: 'Proving result-driven digital marketing solutions like SEO, Social Media Marketing, PPC, App & website.' },
    // tslint:disable-next-line: max-line-length
    {image: 'assets/images/wd.png', headings: 'Web Development', serviceContents: 'Delivering simple yet evolving scope web development services that match our customer’s business requirements and strategies.'},
    // tslint:disable-next-line: max-line-length
    {image: 'assets/images/es.png', headings: 'ECOMMERCE SOLUTIONS', serviceContents: 'High-end eCommerce Solutions including website design, development, marketing and end-to-end support.' },
     // tslint:disable-next-line: max-line-length
    {image: 'assets/images/android.png', headings: 'Android Development', serviceContents: 'High-quality Android app development services with a customer-centric architecture for both start-ups and enterprise clients.' },
     // tslint:disable-next-line: max-line-length
    {image: 'assets/images/ide.png', headings: 'iPhone Development', serviceContents: 'Creating the next big thing with our quality-rich iOS app for business. We follow the latest iOS development technologies for making custom iPhone apps.' },
      // tslint:disable-next-line: max-line-length
    {image: 'assets/images/ca.png', headings: 'Custom Applications', serviceContents: 'High-quality web, desktop, Android and iOS app development services with a customer-centric architecture for both start-ups and enterprise clients.' },
     // tslint:disable-next-line: max-line-length
    {image: 'assets/images/seo.png', headings: 'Search Engine Optimisation', serviceContents: 'Mark the top position on SERPs with our leading SEO services. Get onto the front page of Google in just 3-6 months.' },
      // tslint:disable-next-line: max-line-length
    {image: 'assets/images/dm.png', headings: 'Digital Marketing', serviceContents: 'Get complete Digital Marketing solution with SMO, SEM, ORM, SEO and conversion optimization services under one roof.' },
     // tslint:disable-next-line: max-line-length
    {image: 'assets/images/st.png', headings: 'Software Testing', serviceContents: 'Evaluate the functionality of software and make it more customer-friendly with our Software testing. Enjoy defect free software for your business.' }
  ];
  ngOnInit() {
  }

}
