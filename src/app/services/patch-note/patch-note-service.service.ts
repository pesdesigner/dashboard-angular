import { map } from 'rxjs/operators';
import { patchNoteInterface } from './../../interfaces/patchNote';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatchNoteServiceService {

//  getCommitUrl = 'https://api.github.com/repos/{user}/{gitName}/commits';
  getCommitUrl = 'https://api.github.com/repos/{user}/{gitName}/commits?access_token={token}';

  constructor(
    private http : HttpClient,
  ) { }

   getCommits(): Observable<patchNoteInterface> {
 //  let getCommitUrl = this.getCommitUrl.replace('{user}', 'codepes').replace('{gitName}','github');
     let getCommitUrl = this.getCommitUrl.replace('{user}', 'codepes').replace('{gitName}','api-patch').replace('{token}','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');
    return this.http.get<JSON>(getCommitUrl, {headers : {
      authorization : "Bearer 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"}} ).pipe(
      map((gitRes : any) => {
        let newPatchNote : patchNoteInterface = {"commits" : []}

          gitRes.forEach((gitItem : any) => {
            if(gitItem.commit.message.slice(0,4) === 'FEAT') {
              let newCommit = {
                "id" : gitItem.sha,
                "message" : gitItem.commit.message.slice(5),
                "date" : gitItem.commit.committer.date
              }
              newPatchNote.commits.push(newCommit);
            }
          });

        return newPatchNote
      })
    );
  }

}

/*
getCommits(): Observable<JSON> {
  let getCommitUrl = this.getCommitUrl.replace('{user}', 'codepes').replace('{gitName}','github');
  return this.http.get<JSON>(getCommitUrl);
} */


/*  getCommits(): Observable<patchNoteInterface> {
let getCommitUrl = this.getCommitUrl.replace('{user}', 'codepes').replace('{gitName}','github');
return this.http.get<JSON>(getCommitUrl).pipe(
  map((gitRes : any) => {
    let newPatchNote : patchNoteInterface = {"commits" : []}


    console.log(newPatchNote)
    return newPatchNote
  })
);
}


/* ok
   getCommits(): Observable<patchNoteInterface> {
    let getCommitUrl = this.getCommitUrl.replace('{user}', 'codepes').replace('{gitName}','github');
    return this.http.get<JSON>(getCommitUrl).pipe(
      map((gitRes : any) => {
        let newPatchNote : patchNoteInterface = {"commits" : []}

        gitRes.forEach((gitItem : any) => {

            let newCommit = {
              "id" : gitItem.sha,
              "message" : gitItem.commit.message,
              "date" : gitItem.commit.committer.date
            }
            newPatchNote.commits.push(newCommit);

        });

        return newPatchNote
      })
    );
  }

*/
