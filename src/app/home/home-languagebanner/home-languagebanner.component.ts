import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-languagebanner',
  templateUrl: './home-languagebanner.component.html',
  styleUrls: ['./home-languagebanner.component.css']
})
export class HomeLanguagebannerComponent implements OnInit {

  constructor() { }
  languageBanner = [
    {img: 'assets/images/ai.png'},
    {img: 'assets/images/id.png'},
    {img: 'assets/images/edit.png'},
    {img: 'assets/images/html5.png'},
    {img: 'assets/images/php.png'},
    {img: 'assets/images/wordpress.png'},
    {img: 'assets/images/jquery.png'},
    {img: 'assets/images/3.png'},
    {img: 'assets/images/mysql.png'},
    {img: 'assets/images/woocommerce.png'},
  ];
  ngOnInit() {
  }

}
