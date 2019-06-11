import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'music-bot', loadChildren: './pages/music-bot/music-bot.module#MusicBotPageModule' },
  { path: 'manage-bot', loadChildren: './pages/manage-bot/manage-bot.module#ManageBotPageModule' },
  { path: 'smalltalk-bot', loadChildren: './pages/smalltalk-bot/smalltalk-bot.module#SmalltalkBotPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
