import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { BeautifyNamePipe } from './pipes/beautify-name.pipe';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InbuiltPipesComponent,
    CustomPipesComponent,
    BeautifyNamePipe,
    ReverseStrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
