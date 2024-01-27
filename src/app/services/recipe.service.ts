import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
  getRecipes():Observable<any>{
    return this._HttpClient.get(this.baseUrl)
  }
}
