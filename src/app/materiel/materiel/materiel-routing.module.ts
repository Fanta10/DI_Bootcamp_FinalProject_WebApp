import { LayoutCustomerComponent } from './../../layout/layout-customer/layout-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatematerielComponent } from './components/createmateriel/createmateriel.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCustomerComponent,
    children : [
      {
        path : 'materiel',
        component : CreatematerielComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielRoutingModule { }
