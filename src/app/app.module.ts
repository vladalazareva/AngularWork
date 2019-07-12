import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSwitchComponent } from './components/input-switch/input-switch.component';
import { InputSwitchShowcaseComponent } from './showcases/input-switch-showcase/input-switch-showcase.component';
import { LogspaceComponent } from './components/logspace/logspace.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogShowcaseComponent } from './showcases/dialog-showcase/dialog-showcase.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipShowcaseComponent } from './showcases/tooltip-showcase/tooltip-showcase.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipDirectiveShowcaseComponent } from './showcases/tooltip-directive-showcase/tooltip-directive-showcase.component';

const appRoutes: Routes = [
  { path: 'InputSwitch', component: InputSwitchShowcaseComponent },
  { path: 'Dialog',      component: DialogShowcaseComponent },
  { path: 'Tooltip',      component: TooltipShowcaseComponent },
  { path: 'TooltipDirective',      component: TooltipDirectiveShowcaseComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    InputSwitchComponent,
    InputSwitchShowcaseComponent,
    LogspaceComponent,
    DialogComponent,
    DialogShowcaseComponent,
    TooltipComponent,
    TooltipShowcaseComponent,
    TooltipDirective,
    TooltipDirectiveShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
