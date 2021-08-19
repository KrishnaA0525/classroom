import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-router-link-renderer',
  template: '<a href="#" routerLink="../edit/{{params.data.id}}">Edit</a>',
  styleUrls: ['./router-link-renderer.component.css']
})
export class RouterLinkRendererComponent implements OnInit, AgRendererComponent {

  params: any;

  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
