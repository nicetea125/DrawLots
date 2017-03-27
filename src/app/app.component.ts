import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  sI:string = "a1";
  sII:string = "a2";
  sIII:string = "a3";
  sIV:string = "a4";
  showWin:boolean = false;
  showStartBtn:boolean = true;
  winner:number = 0;

  audio = new Audio('./assets/s.mp3');


  intervalms = 7000;

  ngOnInit() {
   
  }

  clickStart(){
     this.showStartBtn = false;
     this.audio.play();
     this.ab();
  }

  ab(){
    let timer = Observable.interval(9000).take(1);
      timer.subscribe( x => {
        this.sI = "b1";
        this.sII = "b2";
        this.sIII = "b3";
        this.sIV = "b4";
        this.bc();
      });
  }

  bc(){
    let timer = Observable.interval(this.intervalms).take(1);
      timer.subscribe( x => {
        this.sI = "c1";
        this.sII = "c2";
        this.sIII = "c3";
        this.sIV = "c4";
        this.cd();
      });
  }

  cd(){
    let timer = Observable.interval(this.intervalms+1000).take(1);
      timer.subscribe( x => {
        this.sI = "d1";
        this.sII = "d2";
        this.sIII = "d3";
        this.sIV = "d4";
        this.showWinner();
      });
  }

  showWinner(){
    this.winner = Math.floor((Math.random() * 6) + 1);
    this.showWin = true;
    //this.audioOut();
    
  }

  audioOut(){
    let timer = Observable.interval(200).take(10);
    timer.subscribe( x => {
       this.audio.volume -= 0.1;
    });
  }
}
