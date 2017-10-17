import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MATERIAL_COMPATIBILITY_MODE,MatCheckboxModule,MatInputModule ,MatDialogModule} from '@angular/material';
//import {Component} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule
  ],
  exports:[
  MatCheckboxModule,
  MatInputModule,
  MatDialogModule
  ],
  declarations: [],
  providers: [
     { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
   ],
})
export class MaterialModule { }
