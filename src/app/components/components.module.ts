import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentRoutingModule } from './component-routing.module';
import { TopnavComponent } from './topnav/topnav.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgbdSortableHeader } from '../shared/directives/sortable.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { DataChartComponent } from './data-chart/data-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TopnavComponent,
    DataTableComponent,
    NgbdSortableHeader,
    DataChartComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    NgbModule,
    FormsModule,
    HighchartsChartModule,
  ],
})
export class ComponentsModule {}
