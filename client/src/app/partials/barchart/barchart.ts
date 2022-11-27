import { Component, Input } from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.html',
})
export class BarChartComponent {
  @Input()
  data: any;

  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.data);

    const countBy = (arr, fn) =>
      arr
        .map(typeof fn === 'function' ? fn : (val) => val[fn])
        .reduce((acc, val) => {
          acc[val] = (acc[val] || 0) + 1;
          return acc;
        }, {});

    let groupData = countBy(this.data, (x) => x.value);
    const map1 = new Map(Object.entries(groupData));
    this.mbarChartLabels = Array.from(map1.keys());

    var countArr = Array.from(map1.values());
    this.barChartData = [{ data: countArr, label: 'Count' }];

    var max = Math.max.apply(null, countArr);

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
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)',
    },
    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)',
    },
  ];

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
  /*
  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
    ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
  */
}
