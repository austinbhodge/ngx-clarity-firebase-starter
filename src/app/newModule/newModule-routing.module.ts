import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewModuleComponent }    from './newModule.component';
import { NewComponent }  from './component/new.component';

const moduleRoutes: Routes = [
  { path: '',  component: NewModuleComponent },
  { path: 'new', component: NewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(moduleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewModuleRoutingModule { }

