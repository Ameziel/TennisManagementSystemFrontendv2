import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Eleve} from "../models/eleve.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ElevesService {

  constructor(private http:HttpClient) { }

  public getAllEleves():Observable<Array<Eleve>> {
    return this.http.get<Array<Eleve>>(environment.backendHost + "/eleves")
  }

  public searchEleves(keyword : string):Observable<Array<Eleve>> {
    return this.http.get<Array<Eleve>>( environment.backendHost+ "/eleves/search?keyword=" + keyword)
  }

  // public getClient(): Observable<Client[]> {
  //   return this.httpClient.get<Client[]>(this.serviceUrlGetAll);
  // }
  //
  // public addClient(client: Client): Observable<Client> {
  //   return this.httpClient.post<Client>(this.serviceUrlClient, client);
  // }
  //
  // public updateClient(client: Client): Observable<Client> {
  //   return this.httpClient.put<Client>(this.serviceUrlClient, client);
  // }
  //
  // public deleteClient(clientID: number): Observable<void> {
  //   return this.httpClient.delete<void>(this.serviceUrlClient + `/${clientID}`);
  // }
}

