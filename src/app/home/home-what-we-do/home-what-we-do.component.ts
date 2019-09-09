import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-what-we-do',
  templateUrl: './home-what-we-do.component.html',
  styleUrls: ['./home-what-we-do.component.css']
})
export class HomeWhatWeDoComponent implements OnInit {

  constructor() { }
   whatWeDo = [
    // tslint:disable-next-line: max-line-length
     {img: 'assets/images/what-we-do-img1.jpg', image_icon: 'assets/images/increase-icon.png', headings: 'Increase Productivity', contents: 'We help you to achieve results and increase productivity with our top-notch digital marketing services, mobile app development and software testing services.'},
     // tslint:disable-next-line: max-line-length
     {img: 'assets/images/what-we-do-img2.jpg', image_icon: 'assets/images/grow-icon.png', headings: 'Grow your business', contents: 'We make your brand visible and Rank #1 on Google with our digital marketing services. We provide robust and bespoke web development services, helping you to grow your business.'},
      // tslint:disable-next-line: max-line-length
     {img: 'assets/images/what-we-do-img3.jpg', image_icon: 'assets/images/stay-running-icon.png', headings: 'Stay up and running', contents: 'Feel protected and yield the highest financial return with our disaster and recovery plan with minimal downtime.'},
     // tslint:disable-next-line: max-line-length
     {img: 'assets/images/what-we-do-img4.jpg', image_icon: 'assets/images/reduce-cost-icon.png', headings: 'Reduce costs', contents: 'We offer the most affordable digital marketing solutions to all sizes of businesses, helping them to reduce costs without compromising on quality standards.'}
   ];
  ngOnInit() {
  }

}
