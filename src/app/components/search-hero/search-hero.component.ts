import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiHeroesService } from '../../services/api-heroes.service';
import { fromEvent, from } from 'rxjs';
import { tap, pluck, debounceTime, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css'],
})
export class SearchHeroComponent implements OnInit {
  @ViewChild('inputHero') inputHero: ElementRef;
  private urlApiHeroes = `https://www.superheroapi.com/api.php/`;
  private idApiHeores = `3312144262137687/search/`;

  public ArraysHeroes: Array<any> = [];

  public loading: boolean = true;

  constructor(private http: HttpClient, private AHSService: ApiHeroesService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.searchHero();
  }

  searchHero() {
    // this.ArraysHeroes = [];
    // console.log(this.inputHero);
    fromEvent(this.inputHero.nativeElement, 'keyup')
      .pipe(
        tap(() => {
          this.loading = true;
          this.ArraysHeroes = [];
        }),
        pluck('target', 'value'),
        debounceTime(1500),
        switchMap((nameHero) =>
          this.http
            .get(`${this.urlApiHeroes}${this.idApiHeores}${nameHero}`)
            .pipe(
              pluck('results'),
              switchMap((resultArray: Array<any>) =>
                from(resultArray).pipe(
                  map((getHeroInfo: any) => {
                    let resultHero: any = {
                      image: getHeroInfo.image.url,
                      name: getHeroInfo.name,
                      id: getHeroInfo.id,
                      fullName: getHeroInfo.biography['full-name'],
                    };
                    return resultHero;
                  })
                )
              )
            )
        )
      )
      .subscribe(
        (value: any) => {
          console.log(value);
          this.ArraysHeroes.push(value);
          this.loading = false;
        },
        () => this.searchHero()
      );
  }
}
