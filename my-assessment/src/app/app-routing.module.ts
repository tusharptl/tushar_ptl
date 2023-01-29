import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


const routes: Routes=[

  
  {path:"login",component:LoginComponent},
  {path:"banner",component:BannerComponent},
  {path:"blog",component:BlogComponent},
  {path:"features",component:FeaturesComponent},
  {path:"footer",component:FooterComponent},
  {path:"testimonial",component:TestimonialComponent},
  {path:"header",component:HeaderComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:'/login',pathMatch:"full"}
]



@NgModule({
  declarations: [],
  
    
    imports: [RouterModule.forRoot(routes),FormsModule ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
