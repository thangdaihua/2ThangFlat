import { Component, ViewChild } from '@angular/core';
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-by-domain',
  templateUrl: './design-by-domain.component.html',
  styleUrls: ['./design-by-domain.component.scss']
})
export class DesignByDomainComponent {
  @ViewChild('canvas', { static: false }) canvas: FabricjsEditorComponent;

  headPreview = "1"
  bodyPreview = "1"
  bottomPreview = "1"
  backdropPreview = "1"
  stylePreview = "colorful"
  posePreview = "standing"
  genderPreview = "male"

  domain = "Office"

  fileNameBackdrops = "1"
  fileNameHead = "1"
  fileNameTop = "1"
  fileNameBottom = "1"
  pose = "standing"
  gender = "male"
  style = "duotone"
  carouselHead = []

  temp = [
    { imageLink: "assets/preview/office/1.jpg", id: 1, head: "1", body: "3", bottom: "1", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/2.jpg", id: 2, head: "1", body: "2", bottom: "1", backdrops: "1", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/3.jpg", id: 3, head: "1", body: "5", bottom: "1", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/4.jpg", id: 4, head: "1", body: "7", bottom: "1", backdrops: "3", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/5.jpg", id: 5, head: "3", body: "2", bottom: "5", backdrops: "3", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/6.jpg", id: 1, head: "6", body: "3", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/7.jpg", id: 6, head: "3", body: "3", bottom: "5", backdrops: "3", style: "colorful", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/8.jpg", id: 7, head: "3", body: "5", bottom: "5", backdrops: "3", style: "colorful", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/9.jpg", id: 8, head: "1", body: "5", bottom: "2", backdrops: "3", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/10.jpg", id: 9, head: "5", body: "3", bottom: "1", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/11.jpg", id: 10, head: "3", body: "2", bottom: "4", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/12.jpg", id: 11, head: "1", body: "6", bottom: "6", backdrops: "3", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/13.jpg", id: 12, head: "3", body: "7", bottom: "6", backdrops: "1", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/14.jpg", id: 13, head: "1", body: "5", bottom: "3", backdrops: "2", style: "colorful", pose: "running", gender: "male" },
    { imageLink: "assets/preview/office/15.jpg", id: 14, head: "7", body: "2", bottom: "3", backdrops: "3", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/16.jpg", id: 15, head: "3", body: "6", bottom: "5", backdrops: "3", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/17.jpg", id: 16, head: "3", body: "3", bottom: "6", backdrops: "4", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/18.jpg", id: 1, head: "1", body: "7", bottom: "4", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/19.jpg", id: 17, head: "7", body: "3", bottom: "3", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/20.jpg", id: 18, head: "6", body: "7", bottom: "1", backdrops: "4", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/21.jpg", id: 19, head: "7", body: "3", bottom: "1", backdrops: "3", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/22.jpg", id: 1, head: "1", body: "7", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/23.jpg", id: 1, head: "6", body: "7", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/24.jpg", id: 20, head: "1", body: "7", bottom: "3", backdrops: "4", style: "colorful", pose: "standing", gender: "female" },
  ]

  office = [
    { imageLink: "assets/preview/office/1.jpg", id: 1, head: "1", body: "3", bottom: "1", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/2.jpg", id: 2, head: "1", body: "2", bottom: "1", backdrops: "1", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/3.jpg", id: 3, head: "1", body: "5", bottom: "1", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/4.jpg", id: 4, head: "1", body: "7", bottom: "1", backdrops: "3", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/5.jpg", id: 5, head: "3", body: "2", bottom: "5", backdrops: "3", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/6.jpg", id: 1, head: "6", body: "3", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/7.jpg", id: 6, head: "3", body: "3", bottom: "5", backdrops: "3", style: "colorful", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/8.jpg", id: 7, head: "3", body: "5", bottom: "5", backdrops: "3", style: "colorful", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/9.jpg", id: 8, head: "1", body: "5", bottom: "2", backdrops: "3", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/10.jpg", id: 9, head: "5", body: "3", bottom: "1", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/11.jpg", id: 10, head: "3", body: "2", bottom: "4", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/12.jpg", id: 11, head: "1", body: "6", bottom: "6", backdrops: "3", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/13.jpg", id: 12, head: "3", body: "7", bottom: "6", backdrops: "1", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/14.jpg", id: 13, head: "1", body: "5", bottom: "3", backdrops: "2", style: "colorful", pose: "running", gender: "male" },
    { imageLink: "assets/preview/office/15.jpg", id: 14, head: "7", body: "2", bottom: "3", backdrops: "3", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/16.jpg", id: 15, head: "3", body: "6", bottom: "5", backdrops: "3", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/17.jpg", id: 16, head: "3", body: "3", bottom: "6", backdrops: "4", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/office/18.jpg", id: 1, head: "1", body: "7", bottom: "4", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/19.jpg", id: 17, head: "7", body: "3", bottom: "3", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/20.jpg", id: 18, head: "6", body: "7", bottom: "1", backdrops: "4", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/21.jpg", id: 19, head: "7", body: "3", bottom: "1", backdrops: "3", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/office/22.jpg", id: 1, head: "1", body: "7", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/office/23.jpg", id: 1, head: "6", body: "7", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/office/24.jpg", id: 20, head: "1", body: "7", bottom: "3", backdrops: "4", style: "colorful", pose: "standing", gender: "female" },
  ]
  sport = [
    { imageLink: "assets/preview/sport/1.jpg", id: 1, head: "1", body: "1", bottom: "5", backdrops: "6", style: "colorful", pose: "cycling", gender: "female" },
    { imageLink: "assets/preview/sport/2.jpg", id: 1, head: "5", body: "6", bottom: "2", backdrops: "1", style: "colorful", pose: "cycling", gender: "male" },
    { imageLink: "assets/preview/sport/3.jpg", id: 1, head: "1", body: "8", bottom: "4", backdrops: "4", style: "duotone", pose: "running", gender: "female" },
    { imageLink: "assets/preview/sport/4.jpg", id: 1, head: "2", body: "4", bottom: "8", backdrops: "2", style: "colorful", pose: "running", gender: "male" },
    { imageLink: "assets/preview/sport/5.jpg", id: 1, head: "1", body: "4", bottom: "8", backdrops: "2", style: "colorful", pose: "running", gender: "female" },
    { imageLink: "assets/preview/sport/6.jpg", id: 1, head: "1", body: "3", bottom: "4", backdrops: "6", style: "colorful", pose: "running", gender: "female" },
    { imageLink: "assets/preview/sport/7.jpg", id: 1, head: "5", body: "4", bottom: "8", backdrops: "6", style: "duotone", pose: "cycling", gender: "male" },
    { imageLink: "assets/preview/sport/8.jpg", id: 1, head: "5", body: "4", bottom: "8", backdrops: "6", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/sport/9.jpg", id: 1, head: "5", body: "4", bottom: "8", backdrops: "6", style: "duotone", pose: "running", gender: "male" },
    { imageLink: "assets/preview/sport/10.jpg", id: 1, head: "6", body: "1", bottom: "3", backdrops: "2", style: "duotone", pose: "running", gender: "male" },
    { imageLink: "assets/preview/sport/11.jpg", id: 1, head: "5", body: "4", bottom: "5", backdrops: "2", style: "colorful", pose: "cycling", gender: "female" },
    { imageLink: "assets/preview/sport/12.jpg", id: 1, head: "6", body: "6", bottom: "4", backdrops: "2", style: "colorful", pose: "running", gender: "male" },
    { imageLink: "assets/preview/sport/13.jpg", id: 1, head: "5", body: "4", bottom: "6", backdrops: "2", style: "colorful", pose: "running", gender: "male" },
    { imageLink: "assets/preview/sport/14.jpg", id: 1, head: "5", body: "4", bottom: "1", backdrops: "2", style: "duotone", pose: "running", gender: "female" },
    { imageLink: "assets/preview/sport/15.jpg", id: 1, head: "5", body: "4", bottom: "1", backdrops: "6", style: "colorful", pose: "cycling", gender: "female" },
    { imageLink: "assets/preview/sport/16.jpg", id: 1, head: "8", body: "8", bottom: "3", backdrops: "6", style: "colorful", pose: "running", gender: "female" },
    { imageLink: "assets/preview/sport/17.jpg", id: 1, head: "1", body: "8", bottom: "4", backdrops: "4", style: "colorful", pose: "running", gender: "female" },
    { imageLink: "assets/preview/sport/18.jpg", id: 1, head: "3", body: "3", bottom: "1", backdrops: "6", style: "colorful", pose: "cycling", gender: "male" },
    { imageLink: "assets/preview/sport/19.jpg", id: 1, head: "1", body: "3", bottom: "8", backdrops: "2", style: "colorful", pose: "running", gender: "female" },
    { imageLink: "assets/preview/sport/20.jpg", id: 1, head: "1", body: "3", bottom: "8", backdrops: "6", style: "colorful", pose: "cycling", gender: "female" },
    { imageLink: "assets/preview/sport/21.jpg", id: 1, head: "5", body: "1", bottom: "4", backdrops: "1", style: "colorful", pose: "cycling", gender: "male" },
    { imageLink: "assets/preview/sport/22.jpg", id: 1, head: "5", body: "1", bottom: "1", backdrops: "6", style: "colorful", pose: "running", gender: "male" },
    { imageLink: "assets/preview/sport/23.jpg", id: 1, head: "5", body: "4", bottom: "5", backdrops: "2", style: "duotone", pose: "cycling", gender: "female" },
    { imageLink: "assets/preview/sport/24.jpg", id: 1, head: "1", body: "4", bottom: "4", backdrops: "2", style: "duotone", pose: "cycling", gender: "female" },
  ]
  education = [
    { imageLink: "assets/preview/education/1.jpg", id: 1, head: "1", body: "3", bottom: "1", backdrops: "16", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/2.jpg", id: 2, head: "1", body: "2", bottom: "1", backdrops: "3", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/3.jpg", id: 1, head: "1", body: "6", bottom: "1", backdrops: "17", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/4.jpg", id: 4, head: "1", body: "7", bottom: "1", backdrops: "11", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/5.jpg", id: 5, head: "3", body: "2", bottom: "5", backdrops: "18", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/6.jpg", id: 1, head: "6", body: "3", bottom: "1", backdrops: "1", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/education/7.jpg", id: 6, head: "3", body: "3", bottom: "5", backdrops: "19", style: "colorful", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/education/8.jpg", id: 1, head: "1", body: "6", bottom: "4", backdrops: "12", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/9.jpg", id: 1, head: "1", body: "3", bottom: "1", backdrops: "20", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/education/10.jpg", id: 9, head: "5", body: "3", bottom: "1", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/education/11.jpg", id: 1, head: "1", body: "6", bottom: "1", backdrops: "21", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/education/12.jpg", id: 11, head: "1", body: "6", bottom: "6", backdrops: "3", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/education/13.jpg", id: 12, head: "3", body: "7", bottom: "6", backdrops: "21", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/education/14.jpg", id: 1, head: "6", body: "7", bottom: "4", backdrops: "11", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/15.jpg", id: 14, head: "7", body: "2", bottom: "3", backdrops: "1", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/16.jpg", id: 15, head: "3", body: "6", bottom: "5", backdrops: "5", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/education/17.jpg", id: 16, head: "3", body: "3", bottom: "6", backdrops: "8", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/education/18.jpg", id: 1, head: "1", body: "7", bottom: "4", backdrops: "17", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/education/19.jpg", id: 17, head: "7", body: "3", bottom: "3", backdrops: "18", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/20.jpg", id: 18, head: "6", body: "7", bottom: "1", backdrops: "4", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/21.jpg", id: 19, head: "7", body: "3", bottom: "1", backdrops: "19", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/education/22.jpg", id: 1, head: "1", body: "7", bottom: "1", backdrops: "1", style: "duotone", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/education/23.jpg", id: 1, head: "6", body: "7", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/education/24.jpg", id: 20, head: "1", body: "7", bottom: "3", backdrops: "20", style: "colorful", pose: "standing", gender: "female" },
    ]

  marketing = [
    { imageLink: "assets/preview/marketing/1.jpg", id: 1, head: "1", body: "3", bottom: "1", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/2.jpg", id: 2, head: "1", body: "2", bottom: "1", backdrops: "3", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/3.jpg", id: 1, head: "1", body: "6", bottom: "1", backdrops: "9", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/4.jpg", id: 4, head: "1", body: "7", bottom: "1", backdrops: "11", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/5.jpg", id: 5, head: "3", body: "2", bottom: "5", backdrops: "12", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/6.jpg", id: 1, head: "6", body: "3", bottom: "1", backdrops: "1", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/marketing/7.jpg", id: 6, head: "3", body: "3", bottom: "5", backdrops: "14", style: "colorful", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/marketing/8.jpg", id: 1, head: "1", body: "6", bottom: "4", backdrops: "12", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/9.jpg", id: 1, head: "1", body: "3", bottom: "1", backdrops: "11", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/marketing/10.jpg", id: 9, head: "5", body: "3", bottom: "1", backdrops: "4", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/marketing/11.jpg", id: 1, head: "1", body: "6", bottom: "1", backdrops: "9", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/marketing/12.jpg", id: 11, head: "1", body: "6", bottom: "6", backdrops: "3", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/marketing/13.jpg", id: 12, head: "3", body: "7", bottom: "6", backdrops: "1", style: "colorful", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/marketing/14.jpg", id: 1, head: "6", body: "7", bottom: "4", backdrops: "11", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/15.jpg", id: 14, head: "7", body: "2", bottom: "3", backdrops: "1", style: "duotone", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/16.jpg", id: 15, head: "3", body: "6", bottom: "5", backdrops: "5", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/marketing/17.jpg", id: 16, head: "3", body: "3", bottom: "6", backdrops: "8", style: "duotone", pose: "standing", gender: "female" },
    { imageLink: "assets/preview/marketing/18.jpg", id: 1, head: "1", body: "7", bottom: "4", backdrops: "14", style: "colorful", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/marketing/19.jpg", id: 17, head: "7", body: "3", bottom: "3", backdrops: "1", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/20.jpg", id: 18, head: "6", body: "7", bottom: "1", backdrops: "4", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/21.jpg", id: 19, head: "7", body: "3", bottom: "1", backdrops: "3", style: "colorful", pose: "standing", gender: "male" },
    { imageLink: "assets/preview/marketing/22.jpg", id: 1, head: "1", body: "7", bottom: "1", backdrops: "1", style: "duotone", pose: "walking", gender: "female" },
    { imageLink: "assets/preview/marketing/23.jpg", id: 1, head: "6", body: "7", bottom: "1", backdrops: "3", style: "duotone", pose: "walking", gender: "male" },
    { imageLink: "assets/preview/marketing/24.jpg", id: 20, head: "1", body: "7", bottom: "3", backdrops: "10", style: "colorful", pose: "standing", gender: "female" },
  ]
  setDomainEducation() {
    this.domain = "Education";
    this.temp = this.education
  }
  setDomainSport() {
    this.domain = "Sport";
    this.temp = this.sport
  }
  setDomainMarketing() {
    this.domain = "Marketing";
    this.temp = this.marketing
  }
  setDomainOffice() {
    this.domain = "Office";
    this.temp = this.office
  }
  setPreview(headPreview, bodyPreview, bottomPreview, backdropPreview, stylePreview, posePreview, genderPreview) {
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

  public saveToSVG(event) {
    domtoimage.toSvg(document.getElementById('main-editor'), { filter: this.filter })
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
    for (let i = 1; i <= 8; i++) {
      this.carouselHead.push({
        id: i.toString(), imageLink: "assets/images/" + this.gender + "/head/" + this.style + "/" + i.toString() + ".svg"
      });
    }
  }
}

