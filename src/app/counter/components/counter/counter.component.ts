import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`

  <h1>{{title}}</h1>
<hr>
<p> Bienvenidos a Angular</p>
<h3>Counter: {{counter}}
</h3>
<button (click)="increaseBy(+1)"> +1</button>
<button (click)="reset()">reset</button>
<button (click)="increaseBy(-1)">-1</button>

<hr>



  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  public title:string ="app-counter"
  public counter:number=10;
  increaseBy(value:number):void{

    this.counter+=value;
  }
   reset(){

    this.counter=10;
  }
}
