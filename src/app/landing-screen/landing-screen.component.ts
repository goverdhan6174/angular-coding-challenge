import { Component, OnInit } from '@angular/core';
import { ButtonOptions } from '../global/button/button.component';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {
    public pveButton: ButtonOptions = {
    href: "/random",
    disabled: false,
    type: { pictured: { path: "/assets/landing/button_pve_wip.png", content: { text: "Quest", fontSize: "24px" } } }
  }

  public pvpButton: ButtonOptions = {
    href: "/random",
    disabled: false,
    type: { pictured: { path: "/assets/landing/button_pvp_wip.png", content: { text: "Arena", fontSize: "24px" } } }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
