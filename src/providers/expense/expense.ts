import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ExpenseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ExpenseProvider {

  constructor(public http: Http) {
    console.log('Hello ExpenseProvider Provider');
  }

  getCategories(){
    return this.http.get("./assets/mock/categories.json").map(res => res.json());
  }

}
