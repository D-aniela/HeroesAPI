import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiHeroesService {
  private urlApiHeroes = `https://www.superheroapi.com/api.php/`;
  private idApiHeores = `3312144262137687/`;

  constructor(private http: HttpClient) {}

  public getHeroe(id: any) {
    // console.log(`${this.urlApiHeroes}${this.idApiHeores}${id}`);

    return this.http.get(`${this.urlApiHeroes}${this.idApiHeores}${id}`);
  }
}
