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

  public searchElevesByName(keyword : string):Observable<Array<Eleve>> {
    return this.http.get<Array<Eleve>>( environment.backendHost+ "/eleves/search?keyword=" + keyword)
  }

  public getEleveById(id : string) : Observable<Eleve> {
    return this.http.get<Eleve>(environment.backendHost + "/eleves/" + id);
  }

  public updateEleve(eleve : Eleve) : Observable<Eleve> {
    return this.http.post<Eleve>( environment.backendHost + "/eleves", eleve);
  }

  public saveEleve(eleve : Eleve):Observable<Eleve> {
    return this.http.post<Eleve>( environment.backendHost + "/eleves", eleve);
  }

  public deleteEleve(id : string){
     return this.http.delete( environment.backendHost + "/eleves/" + id);
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

