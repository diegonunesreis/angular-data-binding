import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [
    PaiComponent,
    FilhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PaiComponent]
})
export class AppModule { }
