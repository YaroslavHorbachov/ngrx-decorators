import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from './main-form.component';

@NgModule({
  declarations: [MainFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MainFormComponent],
})
export class MainFormModule {}
