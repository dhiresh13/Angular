import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PersonComponent } from "./person/person.component";
import { BioDataComponent } from "./bio-data/bio-data.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    BioDataComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
