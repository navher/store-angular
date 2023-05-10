import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]>{
    const urlEndPint: string = "http://localhost:3001/products"
    return this.http.get<IProduct[]>(urlEndPint);
  }

  public getAllProductsOfCategory(categoryId: number): Observable<IProduct[]>{
    const urlEndPint: string = `http://localhost:3001/categories/${categoryId}/products`
    return this.http.get<IProduct[]>(urlEndPint);
  }

  public getProductById(productId: number): Observable<IProduct>{
    const urlEndPint: string = `http://localhost:3001/products/${productId}`
    return this.http.get<IProduct>(urlEndPint);
  }
}
