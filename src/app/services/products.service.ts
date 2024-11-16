import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment.development";
import {catchError, map, Observable, tap} from "rxjs";
import {ResponseProducts} from "@interfaces/products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = environment.urlBase;

  constructor(private http: HttpClient) { }

  getProducts():Observable<ResponseProducts[]> {
    return this.http.get<ResponseProducts[]>(`${this.url}products`)
      .pipe(tap( resp => resp ));
  }
}
