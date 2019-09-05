import { Component, OnInit, Input } from '@angular/core';
import {Tags,Levels, Problem, Detail} from '../utils'
import { ActivatedRoute } from '@angular/router';
import { ProblemService } from '../problem.service';
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.scss']
})
export class ProblemDetailComponent implements OnInit {
  
  data:any;
  isSubmitted:boolean=false;
  isDeleted:boolean=false;
  problem:Problem;
  detail:Detail;
  tags=Tags;
  id:string
  levels=Levels;
  constructor(private route : ActivatedRoute,private problemservice : ProblemService,private router :Router,private _snackBar: MatSnackBar) { 
    this.id=this.route.snapshot.paramMap.get("id");
  }
  ngOnInit() {
    this.problem=new Problem();
    this.detail=new Detail();
    if(this.id=="edit_new") return;
    this.problemservice.getProblem(this.id).subscribe((problem:any)=>{
      if(problem=="error") this.router.navigate(['/problems'])
      this.problem.name=problem.name;
      this.problem.author=problem.author;
      this.problem.company=problem.company;
      this.problem.tag=problem.tag;
      this.problem.difficulty=problem.difficulty;
    });

    this.problemservice.getProblemDetail(this.id).subscribe((detail:any)=>{
      if(detail=="error") this.router.navigate(['/problems'])  
      this.detail.background=detail.background;
      this.detail.description=detail.description;
      this.detail.input=detail.input;
      this.detail.solution=detail.solution;
      this.detail.output=detail.output;
    });


  }
  onSubmit(f:NgForm):void{
    this.data={
      id : this.id,
      detail : this.detail,
      problem : this.problem
    }
    if(this.id=="edit_new"){
      this.problemservice.getProblemByName(f.value.name).subscribe(data=>{
        if(data==null){
          this.updateProblem();
          this.router.navigate(['/problems']);
        }
        else{
          this._snackBar.open("Problem Already Exists with that Name","OK",{duration:3000});
        }
      })
    }
    else this.updateProblem();
  }
  removeProblem(){
    this.isDeleted=true;
    this.problemservice.deleteProblem({id : this.id}).subscribe(data=>{
      this._snackBar.open("Deleted Problem "+this.problem.name,"OK",{duration:1500});
      this.router.navigate(['/problems'])
      this.isDeleted=false;
      
    },
    error=> this._snackBar.open("Network Error","OK",{duration:3000})
    )
  }
  updateProblem(){
    this.isSubmitted=true;
    this.problemservice.putProblem(this.data).subscribe(data=>{
      this._snackBar.open("Updated Problem "+this.problem.name,"OK",{duration:1500});
      if(this.id=="edit_new") this.router.navigate(['/problems'])
      this.isSubmitted=false;
    },
    error =>  this._snackBar.open("Network Error","OK",{duration:3000})
    )
  }

}
