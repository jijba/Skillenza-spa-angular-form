import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouting } from './app.routes';
import { UserComponent } from './user/user.component';
import { GetFormComponent } from './get-form/get-form.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GetFormComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    appRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
