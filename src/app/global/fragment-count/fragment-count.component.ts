import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fragment-count',
  templateUrl: './fragment-count.component.html',
  styleUrls: ['./fragment-count.component.scss']
})
export class FragmentCountComponent implements OnInit {
  @Input()
  count = 999;

  constructor() { }

  ngOnInit(): void { }

}
