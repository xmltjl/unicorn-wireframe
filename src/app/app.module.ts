import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";
import { HttpModule } from "@angular/http";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavLeftComponent } from "./nav-left/nav-left.component";

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { Dashboard3Component } from "./dashboard3/dashboard3.component";
import { Dashboard4Component } from "./dashboard4/dashboard4.component";
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxChartsModule
  ],
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    NavLeftComponent,
 
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    Hero1Component,
    Hero2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
