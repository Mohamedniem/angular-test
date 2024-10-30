
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../iproduct';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  p: number = 1;
     

  private _ProductService=inject(ProductService)
  constructor(){}

  allproducts:Iproduct[]=[]

  ngOnInit(){
    this.products()
  }

  products(){
    this._ProductService.getProduct().subscribe({
      next:(response)=>{this.allproducts=response,
        console.log(response)
      },
      error:(err)=>{console.log(err)}
    })
  }




}
