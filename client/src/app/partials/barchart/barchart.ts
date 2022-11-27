import { Component, Input } from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.html',
})
export class BarChartComponent {
  @Input()
  responses: any;

  @Input()
  options: any;

  ngOnInit() {
    console.log('ngOnInit');

    var temp1 = [];

    for (const option of this.options) {
      temp1.push(option.value);
    }

    this.mbarChartLabels = temp1;

    var temp2 = [];
    for (const response of this.responses) {
      temp2[response.value] =
        temp2[response.value] == null ? 1 : temp2[response.value] + 1;
    }

    var temp3 = [];

    for (let i = 0; i < temp1.length; i++) {
      temp3[i] = temp2[temp1[i]] == null ? 0 : temp2[temp1[i]];
    }

    this.barChartData = [{ data: temp3, label: 'Count' }];

    var max = Math.max.apply(null, temp3);

    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              max: max,
              min: 0,
            },
          },
        ],
      },
    };
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            steps: 1,
            stepValue: 1,
            max: 20,
            min: 0,
          },
        },
      ],
    },
  };

  //  mbarChartLabels:any;
  //  barChartData:any;
  // public mbarChartLabels: string[] = [
  //   '2012',
  //   '2013',
  //   '2014',
  //   '2015',
  //   '2016',
  //   '2017',
  //   '2018',
  // ];
  // public barChartData: any[] = [
  //   { data: [55, 60, 75, 82, 56, 62, 80], label: 'Count' },
  // ];
  mbarChartLabels: string[];
  barChartData: any[];

  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartColors: Array<any> = [
    {
      backgroundColor: '#699fb1',
      borderColor: '#699fb1',
      pointBackgroundColor: '#699fb1',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: '#699fb1',
    },
  ];

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
}
