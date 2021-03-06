import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MainFormModule } from './main-form/main-form.module';
import { DecoratorsModule } from './shared/decorators';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainFormModule, StoreModule.forRoot({}, {}), DecoratorsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
