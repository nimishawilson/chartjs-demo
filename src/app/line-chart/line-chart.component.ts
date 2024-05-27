import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, Point } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chart')
  private chartRef!: ElementRef;
  private chart!: Chart;
  private readonly data: Point[] = [
    { x: 2, y: 5 },
    { x: 3, y: 10 },
    { x: 3.5, y: 6 },
    { x: 4, y: 2 },
    { x: 4.1, y: 6 },
  ];

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Interesting Data',
            data: this.data,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxis: {
            type: 'linear'
          }
        }
      },
    });
  }
}
