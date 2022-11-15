import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FilterPipe }  from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
