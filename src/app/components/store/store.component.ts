import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'src/app/shared/models/entities/carousel.model';
import { Category } from 'src/app/shared/models/entities/category.model';
import { Product } from 'src/app/shared/models/entities/product.model';
import { Target } from 'src/app/shared/models/entities/target.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MediaService } from 'src/app/shared/services/media.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  targets: Target[] = [];
  carousel: Carousel[] = [];
  products:  Product[] = [];
  categories: Category[] = [];
  allCategory: Category = new Category(0, "Todas", "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", true);

  constructor(
    private mediaService: MediaService, 
    private categoryService: CategoryService, 
    private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllTargets();
    this.getCarousel();
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllProductsOfCategory(categoryId: number){
    this.allCategory.setSelected(false);
    for (const cat of this.categories) {
      if(cat.getId() === categoryId){
        cat.setSelected(true);
      }else{
        cat.setSelected(false);
      }
    }
    this.productService.getAllProductsOfCategory(categoryId).subscribe(
      (data) => {
        this.products = [];
        data.forEach((product) => {
          const productToInclude: Product = new Product(product.id, product.name, product.price, product.discountPrice, product.favorite, product.image);
          this.products.push(productToInclude);
        })
      }
    )
  }

  getAllProducts(){
    this.allCategory.setSelected(true);
    for (const cat of this.categories) {
      cat.setSelected(false);
    }
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = [];
        data.forEach((product) => {
          const productToInclude: Product = new Product(product.id, product.name, product.price, product.discountPrice, product.favorite, product.image);
          this.products.push(productToInclude);
        })
      }
    )
  }
  
  private getAllTargets() {
    this.mediaService.getAllTargets().subscribe(
      (data) => {
        data.forEach((target) => {
          const targetToInclude: Target = new Target(target.id, target.image, target.title);
          this.targets.push(targetToInclude);
        })
      }
    )
  }

  private getCarousel() {
    this.mediaService.getCarousel().subscribe(
      (data) => {
        data.forEach((itemCarousel) => {
          const carouselToInclude: Carousel = new Carousel(itemCarousel.id,itemCarousel.image, itemCarousel.description);
          this.carousel.push(carouselToInclude);
        })
      }
    )
  }

  private getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        data.forEach((category) => {
          const categoryToInclude: Category = new Category(category.id, category.name, category.image);
          this.categories.push(categoryToInclude);
        })
      }
    )
  }
}
