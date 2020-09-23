import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.css']
})
export class InbuiltPipesComponent implements OnInit {

  constructor() { }

  price: number;
  dateVal: Date;
  pie : number;
  jsonVal : Object;
  name : string;

  ngOnInit(): void {
    this.price = 3000;
    this.dateVal = new Date();
    this.pie = 3.14156789;
    this.jsonVal = { name : "Subhrajit", add : {street1 : "18 holmes"}};
    this.name = "Subhannik";
  }

}
