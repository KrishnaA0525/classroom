import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  course = 1;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "right",
      labels: {
        usePointStyle: true
      }
    }
  };
  public pieChartLabels: Label[] = [['Submissions'], ['Late Submissions'], 'Not Submitted'];
  public pieChartData: SingleDataSet = [20, 35, 45];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [

  ];
  public pieChartColors: any = [
    {
      backgroundColor: ["green", "orange", "red"]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onCourseChange() {
    // We can fetch course related data from database
    switch(+this.course) {
      case 1: this.pieChartData = [20, 35, 45];
      break;
      case 2: this.pieChartData = [30, 15, 55];
      break;
      case 3: this.pieChartData = [40, 10, 50];
      break;
      case 4: this.pieChartData = [60, 20, 20];
      break;
    }
  }

}
