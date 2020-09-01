import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataInformationService {

  private homePage: Observable<any[]>;
  private resumePage = [];
  private contactPage = [];
  private urlData = 'assets/info.json';

  constructor(private _http: HttpClient, private db: AngularFireDatabase) {
  }

  initData(): Observable<boolean> {
    return new Observable((subscriber) => {
      this.db.object('homePage').valueChanges().subscribe(async (data) => {
        await this.setInformationLocal(data, 'homepage');
        subscriber.next(true);
      });
      this.db.object('resumePage').valueChanges().subscribe(async (data) => {
        await this.setInformationLocal(data, 'resumepage');
        subscriber.next(true);
      });
      this.db.object('portfolioPage').valueChanges().subscribe(async (data) => {
        await this.setInformationLocal(data, 'portfoliopage');
        subscriber.next(true);
      });
      this.db.object('contactPage').valueChanges().subscribe(async (data) => {
        await this.setInformationLocal(data, 'contactPage');
        subscriber.next(true);
      });
    });
  }

  setInformationLocal(data, label) {
    return new Promise((resolve) => {
      localStorage.setItem(label, JSON.stringify(data));
      resolve(true);
    });

  }


}

