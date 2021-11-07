import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-burgermenu',
  templateUrl: './burgermenu.component.html',
  styleUrls: ['./burgermenu.component.scss']
})
export class BurgermenuComponent implements OnInit {
  @Input()
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.open = true;
  }

  closeMenu() {
    this.open = false;
  }

}
