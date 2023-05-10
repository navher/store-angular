import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<ICategory[]>{
    const urlEndPint: string = "http://localhost:3001/categories"
    return this.http.get<ICategory[]>(urlEndPint);
  }

}
