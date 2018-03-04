import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { WallComponent } from './component/wall/wall.component';
import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
