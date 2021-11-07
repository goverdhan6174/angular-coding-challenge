import { Component, Input, OnInit } from '@angular/core';

interface PicturedButton {
  path: string;
  content?: { text: string, fontSize?: string };
  buttonDesc?: string;
}

interface cssButton {
  classes: string;
}

export interface ButtonOptions {
  href: string;
  disabled: boolean;
  type: Partial<{ pictured: PicturedButton, css: cssButton }>;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  buttonOptions: ButtonOptions;

  constructor() { }

  ngOnInit(): void { }

  redirect(href: string) {
    console.log("I am redirecting to:", href);
  }

}
