import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarousel } from '../models/interfaces/carousel.interface';
import { ITarget } from '../models/interfaces/target.interface';
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  public getAllTargets(): Observable<ITarget[]>{
    const urlEndPint: string = "http://localhost:3001/targets"
    return this.http.get<ITarget[]>(urlEndPint);
  }

  public getCarousel(): Observable<ICarousel[]> {
    const urlEndPint: string = "http://localhost:3001/carousel"
    return this.http.get<ICarousel[]>(urlEndPint);
  }
}
