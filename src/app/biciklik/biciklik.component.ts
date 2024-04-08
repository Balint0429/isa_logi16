// biciklik.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-biciklik',
  templateUrl: './biciklik.component.html',
  styleUrls: ['./biciklik.component.css']
})
export class BiciklikComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';

  constructor(
    private http: HttpClient,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.filterProducts(); 
  }  

  getProducts(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/termekek/25')
      .subscribe(products => {
        console.log('Products retrieved:', products); // Log retrieved products
        this.products = products;
        this.filteredProducts = products;
        this.categories = this.getCategories();
      });
  }
  
  getCategories(): string[] {
    const uniqueCategories = new Set<string>();
    this.products.forEach(product => {
      uniqueCategories.add(product.termek_kateg);
    });
    const categories = Array.from(uniqueCategories);
    console.log('Categories:', categories); // Log categories
    return categories;
  }
  

  filterProducts(): void {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.termek_kateg === this.selectedCategory);
    }
  }

  onCategorySelect(): void {
    this.filterProducts();
  }
}
