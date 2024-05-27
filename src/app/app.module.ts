import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
