import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { ModalService } from './services/modal.service'

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        LoginModalComponent,
        HeaderComponent,
        FooterComponent
    ],
    declarations: [
        LoginModalComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        ModalService
    ],
})
export class CoreModule { }
