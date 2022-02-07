import { IMessage } from './../../models/IMessage';

import { IGitCommit } from 'src/app/models/IGitCommit';
import { NotificationService } from './notification.service';
import { Component, OnInit } from '@angular/core';
import { compileInjectable } from '@angular/compiler';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

//public commits: any = [];
//commits!: Commit[]

constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
/*     this.notificationService.commitsAll().subscribe(commits => {
      this.commits = commits
      console.log(commits)
    }) */

/*     this.notificationService.buscarCommit()
      .subscribe( commits => {
        this.commits = commits
       // console.log(commits)
    }); */

   // this.notificationService.mapearMessages(this.messages)


/*     this.notificationService.apiAllCommits.subscribe(
      res => console.log(res)
    ) */

  }

}
