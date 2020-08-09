import { Component, OnInit } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { salesData } from "../model/chart-ngx";

@Component({
  selector: "app-dashboard4",
  templateUrl: "./dashboard4.component.html",
  styleUrls: ["./dashboard4.component.css"]
})
export class Dashboard4Component {
  //ref : https://www.ngdevelop.tech/how-to-use-ngx-charts-in-angular/
  salesData: any[];
  view: any[] = [700, 200];

  // options
  legend: boolean = false;
  animations: boolean = true;
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Year";
  yAxisLabel: string = "Sale";
  timeline: boolean = false;
  legendTitle: string = "Product Sale Chart";
  gradient: boolean = true;
 colorScheme = {
    domain: ["#962D3E", "#343642", "#979C9C", "#F2EBC7", "#348899"]
  };

  constructor() {
    Object.assign(this, { salesData });
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  labelFormatting(c) {
    return `${c.label} !`;
  }
}
