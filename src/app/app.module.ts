import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ItemComponent } from './todo/item/item.component';
import { FullItemComponent } from './todo/item/full-item/full-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ItemComponent,
    FullItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
