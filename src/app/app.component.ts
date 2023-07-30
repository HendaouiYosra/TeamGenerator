import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTeams:boolean=false;
  newMemberName="";
  members: string[]=[];
  errorMessage='';
  numberOfTeams:number|""="";
  teams: string [][]=[];
  errorMessageNumber="";
  constructor(private elementRef: ElementRef){
    
  }

  scrollToSection(sectionId: string): void {
    const sectionElement = this.elementRef.nativeElement.querySelector('#' + sectionId);
    if (sectionElement) {
      setTimeout(() => {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    }
  }
onInput(member:string){
  this.newMemberName=member;
  console.log(this.newMemberName);
}
onInputNumber(number: string){
  if(number && !isNaN(parseInt(number))){
  this.numberOfTeams=parseInt(number);
  console.log(this.numberOfTeams);}
}


 addMember(){
  if (this.newMemberName=="") 
  { this.errorMessage="the name can't be empty";}
  else{
    this.showTeams = false;
    this.errorMessage='';
  this.members.push(this.newMemberName);
  this.newMemberName="";
console.log(this.members);}}


generateTeams(){
  if(!this.numberOfTeams||this.numberOfTeams<=0){
    this.errorMessageNumber="invalid number";
    return
  }
  if(this.members.length<this.numberOfTeams){
    this.errorMessageNumber="not enough members";
    return;
  }
this.errorMessageNumber='';
this.teams=[];
  let allMembers=[...this.members];
 while(allMembers.length){
  for(let i=0;i<this.numberOfTeams;i++){
    const randomIndex=Math.floor(Math.random()* allMembers.length);
    const member=allMembers.splice(randomIndex,1)[0];
    if(member){
    if (this.teams[i]
      ){
      this.teams[i].push(member);
    }else{
      this.teams[i]=[member];
    }
   
   }
   else{break;}
   

  }
  

}  this.numberOfTeams="";
this.members=[];
allMembers=[];

console.log(this.teams);
this.showTeams = !this.showTeams;
this.scrollToSection('teams');

}}

