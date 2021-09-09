import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmitterComponent} from "./emitter/emitter.component";
import {ChildEmitterComponent} from "./child-emitter/child-emitter.component";
import {RxComponent} from "./rx/rx.component";
import {BackendComponent} from "./backend/backend.component";

const routes: Routes = [
  {path: 'emitter', component: EmitterComponent},
  {path: 'child-emitter', component: ChildEmitterComponent},
  {path: 'rx', component: RxComponent},
  {path: 'backend', component: BackendComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
