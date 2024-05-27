import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Chart, { Point } from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart')
  private chartRef!: ElementRef;
   chart!: Chart;
  private readonly data: Point[] = [
    { x: 2, y: 5 },
    { x: 2, y: 10 },
    { x: 3, y: 6 },
    { x: 4, y: 2 },
    { x: 4.1, y: 6 },
  ];

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
