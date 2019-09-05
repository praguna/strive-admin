export let api:string ="http://ec2-35-172-129-162.compute-1.amazonaws.com:3000/api/";

export interface ProblemData{
  name:string,
  author:string,
  tag:string,
  company:string,
  background:string,
  description:string,
  solution:string,
  input:string,
  output:string,
  difficulty:null
} 

export const Tags=[
  {display :'Dynamic Programming', value:'dp' },
  {display : 'Searching', value :'searching' },
  {display :'Sorting', value :'sorting'},
  {display :'Math', value :'math'},
  {display :'Graphs', value :'graph'},
  {display : 'Trees', value : 'tree'},
  {display : 'Arrays and Strings', value : 'arrays'},
  {display : 'Advanced Data Structure', value :'advanced'},
  {display :'AdHoc', value: 'adhoc'}
]
export const Levels=[
  {display : "Hard" , value : "hard"},
  {display : "Medium" , value :"medium"},
  {display :"Easy", value : "easy"},
  {display : "Advanced" , value :"advanced"}
]

export class Problem{
  name : string;
  author : string;
  company : string;
  tag : string;
  difficulty : string;
  date : Date
}

export class Detail{
  background:string;
  description:string;
  solution:string;
  input:string;
  output:string;

}
