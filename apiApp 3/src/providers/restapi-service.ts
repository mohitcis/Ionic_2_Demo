import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestapiService {
  // public apiUrl;
    public  apiUrl = 'https://jsonplaceholder.typicode.com';
    public data;
  constructor(public http: Http) {
    console.log('Hello RestapiService Provider');

  }


    getUsers(){
      if(this.data){
        return Promise.resolve(this.data);
      }
      return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl+'/users')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, (err) => {
           reject(err);
        });

      });
    }

    saveUser(data) {
      return new Promise((resolve,reject) => {
        this.http.post(this.apiUrl+'/users', JSON.stringify(data))
         .subscribe(res => {
          resolve(res);
         },(err) => {
          reject(err);
         });
      });
    }
}
