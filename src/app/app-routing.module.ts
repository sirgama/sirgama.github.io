import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  { path: 'thankyou',  component: ThankyouComponent,},
  { path: '',  component: HeroComponent,},
  { path: 'home',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
