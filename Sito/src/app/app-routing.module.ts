import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';

const routes: Routes = [
  {path: 'Blue-Eyes-Ultimate-Dragon',component: Card1Component },
  {path: 'Slifer-the-Sky-Dragon',component: Card2Component},
  {path: 'Emperor-of-Lightning',component: Card3Component},
  {path: 'Dark-Blade-the-Dragon-Knight',component: Card4Component},
  {path: 'Galaxy-Eyes-Full-Armor-Photon-Dragon',component: Card5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
