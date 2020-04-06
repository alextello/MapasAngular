import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR MATERIAL
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
