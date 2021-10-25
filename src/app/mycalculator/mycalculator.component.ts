import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycalculator',
  templateUrl: './mycalculator.component.html',
  styleUrls: ['./mycalculator.component.css']
})
export class MycalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result:number=0;
  a:number=0;
  b:number=0;
  c:number=0;
  res:string="";
  fact:number=0;

  add(val1:string,val2:string)
  {
    this.a = Number(val1);
    this.b = Number(val2);
    this.result = this.a + this.b ;
  }

  sub(val1:string,val2:string)
  {
    this.a = Number(val1);
    this.b = Number(val2);
    this.result = this.a - this.b ;
  }

  mul(val1:string,val2:string)
  {
    this.a = Number(val1);
    this.b = Number(val2);
    this.result = this.a * this.b ;
  }

  div(val1:string,val2:string)
  {
    this.a = Number(val1);
    this.b = Number(val2);
    this.result = this.a / this.b ;
  }

  prime(val3:string)
  {
    var flag=0;
    this.c = Number(val3);
    for( let i=2 ; i<=(this.c)/2 ; i++)
    {
      if(this.c%i==0)
      {
        flag=1;
      }

      if(flag==1)
      {
        this.res="Number is a Non-Prime and ";
      }
      else
      {
        this.res="Number is a Prime and ";
      }
    }

    var num = 1;
    if(this.c==0)
    {
      this.fact=1;
    }
    else
    {
      while(this.c!=1)
      {
        num=num*this.c;
        this.c = this.c-1;
      }
      this.fact = num;
    }
  }

}
