import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InputSwitchShowcaseComponent } from './showcases/input-switch-showcase/input-switch-showcase.component';
import { DialogShowcaseComponent } from './showcases/dialog-showcase/dialog-showcase.component';
import { TooltipShowcaseComponent } from './showcases/tooltip-showcase/tooltip-showcase.component';
import { TooltipDirectiveShowcaseComponent } from './showcases/tooltip-directive-showcase/tooltip-directive-showcase.component';


const appRoutes: Routes = [
  { path: 'InputSwitch', component: InputSwitchShowcaseComponent },
  { path: 'Dialog',      component: DialogShowcaseComponent },
  { path: 'Tooltip',      component: TooltipShowcaseComponent },
  { path: 'TooltipDirective',      component: TooltipDirectiveShowcaseComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
