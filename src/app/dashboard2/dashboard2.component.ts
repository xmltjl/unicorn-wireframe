import { Component, OnInit } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { salesData } from "../model/chart-ngx";

@Component({
  selector: "app-dashboard2",
  templateUrl: "./dashboard2.component.html",
  styleUrls: ["./dashboard2.component.css"]
})
export class Dashboard2Component {
  //ref : https://www.ngdevelop.tech/how-to-use-ngx-charts-in-angular/
  salesData: any[];
  view: any[] = [700, 200];

  // options
  legend: boolean = true;
  animations: boolean = true;
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Products";
  yAxisLabel: string = "Sale";
  timeline: boolean = false;
  legendTitle: string = "Product Sale Chart";
  gradient: boolean = true;
  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
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
