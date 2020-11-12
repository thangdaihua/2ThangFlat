import { Component, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public downloadImage(event) {
    console.log(this.router.url)
    var imageElement = document.getElementById("main-page-image")
    
    domtoimage.toBlob(imageElement)
    .then(function (blob) {
        console.log(blob)
        saveAs.saveAs(blob, 'sss.png');
    });
  }

  public filter(node) {
    return (node.tagName !== 'i');
}
 
  public saveToSVG(event){
    domtoimage.toSvg(document.getElementById('main-page-image'), {filter: this.filter})
    .then(function (dataUrl) {
        /* do something */
        var dl = document.createElement("a");
        document.body.appendChild(dl); // This line makes it work in Firefox.
        dl.setAttribute("href", dataUrl);
        dl.setAttribute("download", "test.svg");
        dl.click();
    });
  }
}
