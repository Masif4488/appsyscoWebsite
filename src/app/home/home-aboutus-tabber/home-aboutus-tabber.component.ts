import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-aboutus-tabber',
  templateUrl: './home-aboutus-tabber.component.html',
  styleUrls: ['./home-aboutus-tabber.component.css']
})
export class HomeAboutusTabberComponent implements OnInit {
  missions = false;
  visions = false;
  processes = false;
  teams = false;
  histories = true;
  constructor() { }

  ngOnInit() {
  }

  history() {
    this.histories = true;
    this.visions = false;
    this.processes = false;
    this.teams = false;
    this.missions = false;
  }
  mission() {
    this.histories = false;
    this.visions = false;
    this.processes = false;
    this.teams = false;
    this.missions = true;
  }
  vision() {
    this.histories = false;
    this.visions = true;
    this.processes = false;
    this.teams = false;
    this.missions = false;
  }
  process() {
    this.histories = false;
    this.visions = false;
    this.processes = true;
    this.teams = false;
    this.missions = false;
  }
  team() {
    this.histories = false;
    this.visions = false;
    this.processes = false;
    this.teams = true;
    this.missions = false;
  }
}
