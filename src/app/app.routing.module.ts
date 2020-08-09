import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { Dashboard3Component } from "./dashboard3/dashboard3.component";
import { Dashboard4Component } from "./dashboard4/dashboard4.component";
import { Hero1Component } from "./hero1/hero1.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "", component: Hero1Component },
      { path: "hero1", component: Hero1Component },
      { path: "dashboard1", component: Dashboard1Component },
      { path: "dashboard2", component: Dashboard2Component },
      { path: "dashboard3", component: Dashboard3Component },
      { path: "dashboard4", component: Dashboard4Component },
      { path: "**", redirectTo: "login" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
