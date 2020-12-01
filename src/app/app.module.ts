import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'



import { AppComponent } from './app.component';
import { FabricjsEditorModule } from 'projects/angular-editor-fabric-js/src/public-api';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditorComponent } from './editor/editor.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DesignByDomainComponent } from './design-by-domain/design-by-domain.component';


@NgModule({
  declarations: [

    AppComponent,


    EditorComponent,

    MainPageComponent,

    TopBarComponent,

    HomePageComponent,

    FirstComponent,

    SecondComponent,

    DesignByDomainComponent,

    
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'editor',
        component: EditorComponent
      },
      {
        path: 'main-page',
        component: MainPageComponent
      },
      {
        path: 'by-domain',
        component: DesignByDomainComponent
      }
    ]),

    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    FabricjsEditorModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
