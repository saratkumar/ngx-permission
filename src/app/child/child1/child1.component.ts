import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private permissionsService: NgxPermissionsService) { }

  ngOnInit() {

    console.log(this.permissionsService.getPermissions(), 'sadfsadfads');

  }

}
