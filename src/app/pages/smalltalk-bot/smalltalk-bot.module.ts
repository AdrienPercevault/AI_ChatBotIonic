import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SmalltalkBotPage } from './smalltalk-bot.page';

const routes: Routes = [
  {
    path: '',
    component: SmalltalkBotPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SmalltalkBotPage]
})
export class SmalltalkBotPageModule {}
