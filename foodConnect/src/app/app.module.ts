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
import { DonorFormComponent } from './donor-form/donor-form.component';
import { RecipientFormComponent } from './recipient-form/recipient-form.component';
import { ButtonModule, DropdownModule, NumberModule } from "carbon-components-angular";

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
  },
  {
    path: 'registerdonor',
    component: DonorFormComponent
  },
  {
    path: 'registerrecipient',
    component: RecipientFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DonorpostComponent,
    LaunchComponent,
    RecreqsComponent,
    RegisterComponent,
    DonorFormComponent,
    RecipientFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    DropdownModule,
    NumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
