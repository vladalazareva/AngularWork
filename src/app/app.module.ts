import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSwitchComponent } from './components/input-switch/input-switch.component';
import { InputSwitchShowcaseComponent } from './showcases/input-switch-showcase/input-switch-showcase.component';
import { LogspaceComponent } from './components/logspace/logspace.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSwitchComponent,
    InputSwitchShowcaseComponent,
    LogspaceComponent
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
