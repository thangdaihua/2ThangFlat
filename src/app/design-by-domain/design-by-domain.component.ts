import { Component, ViewChild } from '@angular/core';
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {Router} from '@angular/router';

@Component({
  selector: 'app-design-by-domain',
  templateUrl: './design-by-domain.component.html',
  styleUrls: ['./design-by-domain.component.scss']
})
export class DesignByDomainComponent  {
  @ViewChild('canvas', {static: false}) canvas: FabricjsEditorComponent;

  headPreview="1"
  bodyPreview="1"
  bottomPreview="1"
  backdropPreview="1"
  stylePreview="colorful"
  posePreview="standing"
  genderPreview="male"

  domain="Education"

  fileNameBackdrops="1"
  fileNameHead="1"
  fileNameTop="1"
  fileNameBottom="1"
  pose="standing"
  gender="male"
  style="duotone"
  carouselHead=[]
  
office = [
  {imageLink:"assets/images/backdrops/colorful/1.svg", id: 1, head:"1", body:"2", bottom:"1", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
  {imageLink:"assets/images/backdrops/colorful/2.svg", id: 1, head:"1", body:"2", bottom:"2", backdrops:"4", style:"colorful", pose:"standing", gender:"female"},
  {imageLink:"assets/images/backdrops/colorful/3.svg", id: 1, head:"1", body:"2", bottom:"3", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
  {imageLink:"assets/images/backdrops/colorful/4.svg", id: 1, head:"1", body:"2", bottom:"4", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
  {imageLink:"assets/images/backdrops/colorful/5.svg", id: 1, head:"1", body:"2", bottom:"5", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
  {imageLink:"assets/images/backdrops/colorful/6.svg", id: 1, head:"1", body:"2", bottom:"6", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
  {imageLink:"assets/images/backdrops/colorful/7.svg", id: 1, head:"1", body:"2", bottom:"8", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
  {imageLink:"assets/images/backdrops/colorful/8.svg", id: 1, head:"1", body:"2", bottom:"8", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
  {imageLink:"assets/images/backdrops/colorful/1.svg", id: 1, head:"1", body:"2", bottom:"1", backdrops:"4", style:"colorful", pose:"standing", gender:"male"},
]
setDomainEducation(){
  this.domain="Education";
}
setDomainSport(){
  this.domain="Sport";
}
setDomainMarketing(){
  this.domain="Marketing";
}
setDomainOffice(){
  this.domain="Office";
}
setPreview(headPreview, bodyPreview, bottomPreview, backdropPreview, stylePreview, posePreview, genderPreview){
  this.headPreview = headPreview;
  this.bodyPreview = bodyPreview;
  this.bottomPreview = bottomPreview;
  this.backdropPreview = backdropPreview;
  this.stylePreview = stylePreview;
  this.posePreview = posePreview;
  this.genderPreview = genderPreview;
}
  constructor(private router: Router) { }
  public downloadImage(event) {
    console.log(this.router.url)
    var imageElement = document.getElementById("main-editor")
    
    domtoimage.toBlob(imageElement)
    .then(function (blob) {
        console.log(blob)
        saveAs.saveAs(blob, '2TFlat.png');
    });
  }

  public filter(node) {
    return (node.tagName !== 'i');
}
 
  public saveToSVG(event){
    domtoimage.toSvg(document.getElementById('main-editor'), {filter: this.filter})
    .then(function (dataUrl) {
        /* do something */
        var dl = document.createElement("a");
        document.body.appendChild(dl); // This line makes it work in Firefox.
        dl.setAttribute("href", dataUrl);
        dl.setAttribute("download", "2TFlat.svg");
        dl.click();
    });
  }
  ngOnInit(): void {
    for ( let i = 1; i<=8 ; i++){
      this.carouselHead.push({
        id: i.toString() , imageLink:"assets/images/" + this.gender + "/head/" + this.style + "/" + i.toString() + ".svg"
      });
    }
  }
}
