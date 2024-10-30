import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { CateogriesComponent } from './components/cateogries/cateogries.component';

export const routes: Routes = [
    {path:'',component:ProductsComponent ,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'login',component:LoginComponent},
    {path:'product',component:ProductsComponent},
    {path:'register',component:RegisterComponent},
    {path:'cateogry',component:CateogriesComponent}
];
