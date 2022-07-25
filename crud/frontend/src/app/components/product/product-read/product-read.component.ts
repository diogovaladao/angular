import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.carregaProduto()
  }

  deletaProtudo(id: number) {
    this.productService.delete(id).subscribe()
    this.productService.showMessage("Produto excluído!")
    this.carregaProduto()
  }

  carregaProduto() {
    this.productService.read().subscribe(products => {
      this.produtos = products
    })
  }
}
