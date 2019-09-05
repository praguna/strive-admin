import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {api} from './utils'

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private httpClient:HttpClient) { }
  getProblems(){
   return this.httpClient.get(api+'data/problems');
  }

  getProblem(id:string){
    return this.httpClient.get(api+'data/problem?id='+id);
  }
  getProblemDetail(id:string){
    return this.httpClient.get(api+'data/problem/detail?id='+id);
  }
  putProblem(data:any){
    return this.httpClient.post(api+'data/submit',data);
  }
  deleteProblem(data:any){
    return this.httpClient.post(api+'data/delete',data)
  }
  getProblemByName(name : string){
    return this.httpClient.get(api+'data/problem/name?name='+name);
  }
}
