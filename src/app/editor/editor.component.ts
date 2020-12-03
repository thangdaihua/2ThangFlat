import { Component, ViewChild } from '@angular/core';
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  
  @ViewChild('canvas', {static: false}) canvas: FabricjsEditorComponent;

  listAssetHead=[];
  listAssetBody=[];
  listAssetBottom=[];
  listAssetBackdrop=[];
  
 
  
  public rasterize() {
    this.canvas.rasterize();
  }

  public rasterizeSVG() {
    this.canvas.rasterizeSVG();
  }

  public saveCanvasToJSON() {
    this.canvas.saveCanvasToJSON();
  }

  public loadCanvasFromJSON() {
    this.canvas.loadCanvasFromJSON();
  }

  public confirmClear() {
    this.canvas.confirmClear();
  }

  public changeSize() {
    this.canvas.changeSize();
  }

  public addText() {
    this.canvas.addText();
  }

  public getImgPolaroid(event) {
    this.canvas.getImgPolaroid(event);
  }

  public addImageOnCanvas(url) {
    this.canvas.addImageOnCanvas(url);
  }

  public readUrl(event) {
    this.canvas.readUrl(event);
  }

  public removeWhite(url) {
    this.canvas.removeWhite(url);
  }

  public addFigure(figure) {
    this.canvas.addFigure(figure);
  }

  public removeSelected() {
    this.canvas.removeSelected();
  }

  public sendToBack() {
    this.canvas.sendToBack();
  }

  public bringToFront() {
    this.canvas.bringToFront();
  }

  public clone() {
    this.canvas.clone();
  }

  public cleanSelect() {
    this.canvas.cleanSelect();
  }

  public setCanvasFill() {
    this.canvas.setCanvasFill();
  }

  public setCanvasImage() {
    this.canvas.setCanvasImage();
  }

  public setId() {
    this.canvas.setId();
  }

  public setOpacity() {
    this.canvas.setOpacity();
  }

  public setFill() {
    this.canvas.setFill();
  }

  public setFontFamily() {
    this.canvas.setFontFamily();
  }

  public setTextAlign(value) {
    this.canvas.setTextAlign(value);
  }

  public setBold() {
    this.canvas.setBold();
  }

  public setFontStyle() {
    this.canvas.setFontStyle();
  }

  public hasTextDecoration(value) {
    this.canvas.hasTextDecoration(value);
  }

  public setTextDecoration(value) {
    this.canvas.setTextDecoration(value);
  }

  public setFontSize() {
    this.canvas.setFontSize();
  }

  public setLineHeight() {
    this.canvas.setLineHeight();
  }

  public setCharSpacing() {
    this.canvas.setCharSpacing();
  }

  public rasterizeJSON() {
    this.canvas.rasterizeJSON();
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
    for ( let i = 1; i<=50 ; i++){
      this.listAssetHead.push({
        id: i.toString() , imageLink:"../assets/images-all/Head/" + i.toString() + ".svg"
      });
    }
    for ( let i = 1; i<=192 ; i++){
      this.listAssetBody.push({
        id: i.toString() , imageLink:"../assets/images-all/Body/" + i.toString() + ".svg"
      });
    }
    for ( let i = 1; i<=192 ; i++){
      this.listAssetBottom.push({
        id: i.toString() , imageLink:"../assets/images-all/Bottom/" + i.toString() + ".svg"
      });
    }
    for ( let i = 1; i<=37 ; i++){
      this.listAssetBackdrop.push({
        id: i.toString() , imageLink:"../assets/images-all/Backdrop/" + i.toString() + ".svg"
      });
    }
  }

}
