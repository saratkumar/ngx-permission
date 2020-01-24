import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule } from '@angular/router';
import { childRoutes } from './child.routes';



@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
      rolesIsolate: true
    })
  ]
})
export class ChildModule { }
