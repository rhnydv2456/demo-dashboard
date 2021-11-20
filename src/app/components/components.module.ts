import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentRoutingModule } from './component-routing.module';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [DashboardComponent, TopnavComponent],
  imports: [CommonModule, ComponentRoutingModule],
})
export class ComponentsModule {}
