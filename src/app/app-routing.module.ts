import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'customer', loadChildren: () => import('../../projects/customer/src/app/app.module').then(m => m.AppModule) },
  { path: 'staff', loadChildren: () => import('../../projects/staff/src/app/app.module').then(m => m.AppModule) },
  { path: '**', redirectTo: 'customer', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
