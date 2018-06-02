import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { BankComponent } from '../bank/bank.component';
import { AuthGuard } from '../auth.guard';
import { RegisteerGuard } from '../registeer.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DeptListComponent } from '../dept-list/dept-list.component';
import { DeptDetailComponent } from '../dept-detail/dept-detail.component';
import { FruitListComponent } from '../fruit-list/fruit-list.component';
import { FruitDetailComponent } from '../fruit-detail/fruit-detail.component';
const routes: Routes=[
  {
    path: "",component:PageNotFoundComponent
  },
  {
    path:'dept',
    component:DeptListComponent,
  
  },
  {
    path:'dept/:id',
    component:DeptDetailComponent,
  
  },
  {
    path:'fList',
    component:FruitListComponent,
  
  },
  {
    path:'fList/:id',
    component:FruitDetailComponent,
  
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'bank',
    component:BankComponent,
    canActivate:[RegisteerGuard]
  },
  {
    path:'',
    redirectTo:'/register',
    pathMatch:'full'
  },
  {
    path: "**",component:PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
export const routerComponent = [ RegisterComponent,DeptListComponent,FruitDetailComponent,
  BankComponent,PageNotFoundComponent,DeptDetailComponent,FruitListComponent];