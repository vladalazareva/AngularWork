import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSwitchComponent } from './components/input-switch/input-switch.component';
import { InputSwitchShowcaseComponent } from './showcases/input-switch-showcase/input-switch-showcase.component';
import { LogspaceComponent } from './components/logspace/logspace.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogShowcaseComponent } from './showcases/dialog-showcase/dialog-showcase.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipShowcaseComponent } from './showcases/tooltip-showcase/tooltip-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSwitchComponent,
    InputSwitchShowcaseComponent,
    LogspaceComponent,
    DialogComponent,
    DialogShowcaseComponent,
    TooltipComponent,
    TooltipShowcaseComponent
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
