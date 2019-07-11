import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DonorpostComponent } from './donorpost/donorpost.component';
import { RegisterComponent } from './register/register.component';
import { RecreqsComponent } from './recreqs/recreqs.component';
import { LaunchComponent } from './launch/launch.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'postdonations',
    component: DonorpostComponent
  },
  {
    path: 'receivedonations',
    component: RecreqsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DonorpostComponent,
    LaunchComponent,
    RecreqsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
