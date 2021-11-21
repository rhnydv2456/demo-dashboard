import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.scss'],
})
export class DataChartComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'bar',
    },
    accessibility: {
      description: '',
    },
    title: {
      text: 'Historic World Population by Region',
    },
    subtitle: {
      text: 'Sources: Dummy data',
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: ' millions',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts?.defaultOptions?.legend?.backgroundColor || '#FFFFFF',
      shadow: true,
    },
    series: [
      {
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2],
      },
      {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6],
      },
      {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31],
      },
      {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40],
      },
      {
        name: 'Year 2020',
        data: [1416, 1101, 4486, 750, 45],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    Highcharts.chart('container', this.options);
  }
}
