import { BrowserModule } from '@angular/platform-browser';
import 'zone.js';
import 'reflect-metadata'
import { ServicesService } from './services.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RegisteerGuard } from './registeer.guard';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HighlightDirective } from './highlight.directive';
import { MyComponent } from './my/my.component';
import { RegisterComponent } from './register/register.component';
import { BankComponent } from './bank/bank.component';
import { HeadComponent } from './head/head.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContractService } from './contract.service';
import { HeadService } from './head.service';
import { NgifComponent } from './ngif/ngif.component';
import { CompInteractionComponent } from './comp-interaction/comp-interaction.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HttpClientModule} from '@angular/common/http';
import { routerComponent } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HighlightDirective,
    MyComponent,
    routerComponent,
    HeadComponent,
    NgifComponent,
    CompInteractionComponent,
    EmpListComponent,
    PageNotFoundComponent,
    DeptListComponent,
    DeptDetailComponent,
    FruitListComponent,
    FruitDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServicesService,ContractService,HeadService,
    AuthGuard,RegisteerGuard],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
