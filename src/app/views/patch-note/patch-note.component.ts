import { patchNoteInterface } from './../../interfaces/patchNote';
import { PatchNoteServiceService } from './../../services/patch-note/patch-note-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patch-note',
  templateUrl: './patch-note.component.html',
  styleUrls: ['./patch-note.component.css']
})
export class PatchNoteComponent implements OnInit {

  patchNote!: patchNoteInterface;

  constructor(private PatchNoteServiceService : PatchNoteServiceService) { }

  ngOnInit(): void {

     this.PatchNoteServiceService.getCommits().subscribe(patchNote => {
      if(!localStorage.getItem('lastPatch') || localStorage.getItem('lastPatch') !== patchNote.commits[0].id){
        this.patchNote = patchNote;
      }
    })
  }

  savePatchNote(): void {
    localStorage.setItem('lastPatch', this.patchNote.commits[0].id);
    this.patchNote = null!;
  }

}



// OK
/* this.PatchNoteServiceService.getCommits().subscribe(patchNote => {
  this.patchNote = patchNote
  console.log(this.patchNote);
}) */
