import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { StoreComponent } from './store/store.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product-card/product.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    StoreComponent,
    CategoryComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports:[
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  exports:[
    
  ]
})
export class ComponentModule { }
