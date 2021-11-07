import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input()
  currentPage: string;

  constructor() { }

  ngOnInit(): void {
  }

  getSvgClasses(path: string) {
    const resultArr = ["svgIcon"];
    if(path === this.currentPage) {
      resultArr.push("selectedIcon");
    }
    return resultArr.join(" ");
  }

  redirectTo(path: string) {
    // redirectionLink
  }

}
