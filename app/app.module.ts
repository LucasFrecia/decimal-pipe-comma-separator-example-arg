import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms'; 
import { AppComponent }         from './app.component';
import { NumberFormatPipe }     from './shared/number.pipe';

@NgModule({
  imports: [ BrowserModule,
             CommonModule,
             FormsModule ],
  declarations: [ AppComponent,
                  NumberFormatPipe],
  providers: [ NumberFormatPipe ], 
  bootstrap: [ AppComponent ],
  exports: [ NumberFormatPipe]
})
export class AppModule {
  constructor() {} 
}
