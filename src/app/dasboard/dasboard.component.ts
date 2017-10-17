import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  nombreDas: string='Bien venidos a dasboard';    
  constructor() { }

  ngOnInit() {
  }

}
