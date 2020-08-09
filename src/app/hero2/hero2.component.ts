import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { salesData } from "../model/chart-ngx";

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component {
  salesData: any[];

  // options
  view: [200, 100];
  legend: boolean = false;
  animations: boolean = true;
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = "Products";
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
}
