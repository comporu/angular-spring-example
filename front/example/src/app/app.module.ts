import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { EmitterComponent } from './emitter/emitter.component';
import {FormsModule} from "@angular/forms";
import { ResolverComponent } from './emitter/resolver/resolver.component';
import { ChildEmitterComponent } from './child-emitter/child-emitter.component';
import { ChildComponent } from './child-emitter/child/child.component';
import { RxComponent } from './rx/rx.component';
import { BackendComponent } from './backend/backend.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmitterComponent,
    ResolverComponent,
    ChildEmitterComponent,
    ChildComponent,
    RxComponent,
    BackendComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
