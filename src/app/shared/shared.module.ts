import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class SharedModule {}
