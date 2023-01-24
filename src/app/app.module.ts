import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndexComponent } from './components/index/index.component';
import { OurworkComponent } from './components/ourwork/ourwork.component';
import { AppRoutingRoutes } from './app-routing.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    AboutComponent,
    ClientsComponent,
    ContactComponent,
    IndexComponent,
    OurworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
