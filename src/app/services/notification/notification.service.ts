import { ICommit } from './ICommit.modal';
import { IMessage } from './../../models/IMessage';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGitCommit } from 'src/app/models';
import { TemplateBindingParseResult } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

baseUrl = "https://api.github.com/repos/codepes/github/commits";
url = "http://localhost:3000/messages";

  constructor(private httpClient: HttpClient) { }

/*   commitsAll(): Observable<ICommit[]>{
    return this.httpClient.get<ICommit[]>(this.baseUrl)
  } */

  buscarCommit(){
    const url = "https://api.github.com/repos/codepes/github/commits";
    return this.httpClient.get<IGitCommit[]>(url);
  }

  buscarMessages(){
    return this.httpClient.get<IMessage[]>(this.url);
  }

  mapearMessages(messages : any){
    const resposta = messages.map((message : any) => {
      console.log(message.commit[0].author)

      return resposta
    })
  }

}
