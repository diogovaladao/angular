import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  
  creatProduct(): void{
    if(this.product.price == 0 || this.product.name == ''){
      this.productService.showMessage("Nome ou preço não está preenchido!")
      return
    }
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!")
      this.router.navigate(["/products"])
    })
  }

  cancel(){
    this.router.navigate(["/products"])
  }
}
