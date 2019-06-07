import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view-menu/home/home.component';
import { VideoComponent } from './view-menu/video/video.component';
import { MailComponent } from './view-menu/mail/mail.component';
import { ProfileComponent } from './view-menu/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'mail', component: MailComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
