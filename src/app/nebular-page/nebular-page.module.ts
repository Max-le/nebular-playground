import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbCardModule, NbSearchModule, NbSpinnerModule } from '@nebular/theme';
import { SearchComponent } from './search/search.component';

import { HttpClient } from '@angular/common/http';




@NgModule({
  declarations: [SearchComponent],

    //Exporting my component so the root module (app.module) can access it.
    exports : [
      SearchComponent, 
    ],

  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    RouterModule,
    NbSearchModule, //Installing nebular search...
  ], 


  
})
export class NebularPageModule { }
