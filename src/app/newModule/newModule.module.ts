import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { NewModuleComponent } from './newModule.component';
import { NewModuleRoutingModule } from './newModule-routing.module'
import { NewComponent } from './component/new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewModuleRoutingModule
  ],
  declarations: [
    NewModuleComponent,
    NewComponent
  ],
  providers: []
})
export class NewModule {}

