import { Component, Input, OnInit } from '@angular/core';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { Product } from 'src/app/shared/models/entities/product.model';

registerLocaleData(localeES);

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product?: Product;
  
  constructor() { }

  ngOnInit(): void {
  }
}
