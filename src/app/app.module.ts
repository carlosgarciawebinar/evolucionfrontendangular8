
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatButtonModule } from '@angular/material';
import { MailComponent } from './view-menu/mail/mail.component';
import { VideoComponent } from './view-menu/video/video.component';
import { ProfileComponent } from './view-menu/profile/profile.component';
import { HomeComponent } from './view-menu/home/home.component';
//import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MailComponent,
    VideoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    //MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
