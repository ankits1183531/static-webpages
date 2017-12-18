import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes , RouterModule} from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MapsitegrateComponent } from './mapsitegrate/mapsitegrate.component';


const routes:Routes = [
  { path: '', component: MainpageComponent , pathMatch:'full'},
  { path: 'about', component: AboutComponent , pathMatch : 'full' },
  { path:'contact', component:ContactComponent , pathMatch : 'full' },
  { path:'**' , component:MainpageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
