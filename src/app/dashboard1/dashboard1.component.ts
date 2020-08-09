import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {





  ngOnInit(): void {}

  // data: Observable<ChartData>;

  // constructor(private http: HttpClient) {
  //   this.data = this.http.get<ChartData>('../../data/chart-bar.json');
  // }

}