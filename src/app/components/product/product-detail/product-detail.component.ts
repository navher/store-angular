import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ProductService } from 'src/app/shared/services/product.service';
import { SIZE } from 'src/app/shared/size.enum';
import { IProduct } from 'src/app/shared/models/interfaces/product.interface';

registerLocaleData(localeES);

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product? :  IProduct;
  allSizes = Object.values(SIZE);

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = data;
      }
    );
  }

}
