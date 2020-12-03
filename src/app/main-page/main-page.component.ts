import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  gender="male"
  style="colorful"
  pose="cycling"
  fileNameBottom="1"
  fileNameHead="1"
  fileNameTop="1"
  fileNameBackdrops="1"
  carouselHead=[]
  carouselBody=[]
  carouselBottom=[]
  carouselBackdrop=[]
  constructor() {
   }
  ngOnInit(): void {
    for ( let i = 1; i<=8 ; i++){
      this.carouselHead.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/head/" + this.style + "/" + i.toString() + ".svg"
      });
    }
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    for ( let i = 1; i<=21 ; i++){
      this.carouselBackdrop.push({
        id: i.toString() , imageLink:"assets/images/backdrops/" + this.style + "/" + i.toString() + ".svg"
      });
    }
  }
  setMale(){
    this.gender="male"
    this.carouselHead.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselHead.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/head/" + this.style + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }

    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }

    this.carouselBackdrop.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=21 ; i++){
      this.carouselBackdrop.push({
        id: i.toString() , imageLink:"assets/images/backdrops/" + this.style + "/" + i.toString() + ".svg"
      });
    }
  }
  setFemale(){
    this.gender="female"
    this.carouselHead.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselHead.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/head/" + this.style + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }

    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }

    this.carouselBackdrop.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=21 ; i++){
      this.carouselBackdrop.push({
        id: i.toString() , imageLink:"assets/images/backdrops/" + this.style + "/" + i.toString() + ".svg"
      });
    }
  }
  setStanding(){
    this.pose="standing"
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
  }
  setRunning(){
    this.pose="running"
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
  }
  setCycling(){
    this.pose="cycling"
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
  }
  setWalking(){
    this.pose="walking"
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
  }

  setColorful(){
    this.style="colorful"
    this.carouselHead.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselHead.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/head/" + this.style + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBackdrop.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=21 ; i++){
      this.carouselBackdrop.push({
        id: i.toString() , imageLink:"assets/images/backdrops/" + this.style + "/" + i.toString() + ".svg"
      });
    }

  }

  setDuotone(){
    this.style="duotone"
    this.carouselHead.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselHead.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/head/" + this.style + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBody.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBody.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/top/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBottom.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=8 ; i++){
      this.carouselBottom.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/bottom/" + this.style + "/" + this.pose + "/" + i.toString() + ".svg"
      });
    }
    this.carouselBackdrop.splice(0, this.carouselHead.length)
    for ( let i = 1; i<=21 ; i++){
      this.carouselBackdrop.push({
        id: i.toString() , imageLink:"assets/images/backdrops/" + this.style + "/" + i.toString() + ".svg"
      });
    }
  }

  setHeadOption(filename){
    this.fileNameHead=filename;
  }

  setBodyOption(filename){
    this.fileNameTop=filename;
  }

  setBottomOption(filename){
    this.fileNameBottom=filename;
  }

  setBackdropOption(filename){
    this.fileNameBackdrops=filename;
  }
  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
