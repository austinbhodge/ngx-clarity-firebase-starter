import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [],
  exports: [ClarityModule]
})
export class SharedModule {}
