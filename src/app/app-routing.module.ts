import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';

const routes: Routes = [
//   {path:'dashbord',
//   component: AppComponent

//  },
//  {
//   path: '',
//   redirectTo: '',
//   pathMatch: 'full'
// },
 {path:'login',
  component: LoginComponent

 },

 {
  path: '',
  loadChildren: () => import('./materiel/materiel/materiel.module').then(m => m.MaterielModule)
 }
//  {path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
