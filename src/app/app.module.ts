import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

//Import my feature module
import {NebularPageModule} from './nebular-page/nebular-page.module'
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),//Fix NbService proivder error
    NbEvaIconsModule, 
    NebularPageModule, // Importing my custom module
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
