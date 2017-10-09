import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { SharedModule } from './shared/shared.module';
import { NewModule } from './newModule/newModule.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";

import { environment } from '../environments/environment';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        AppRoutingModule,
        CoreModule,
        NewModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [AngularFireAuth],
    bootstrap: [AppComponent]
})
export class AppModule {
}
