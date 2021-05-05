import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ChuckService } from "./postit.service";
import { HttpClientModule } from "@angular/common/http";
import { ReadPostitComponent } from "./read-postit/read-postit.component";
import { NewPostitComponent } from "./new-postit/new-postit.component";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, ReadPostitComponent, NewPostitComponent],
  providers: [ChuckService],
  bootstrap: [AppComponent]
})
export class AppModule {}
