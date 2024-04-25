import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-word-guss',
  templateUrl: './word-guss.component.html',
  styleUrl: './word-guss.component.css'
})
export class WordGussComponent {
  
  wordDatabase:any[] =[
   {
    
    "id":"1",
    "word":"money",
    "category":"finance"
   },
   {
    "id":"2",
    "word":"kidnap",
    "category":"crime"
   },
   {
    "id":"3",
    "word":"kaput",
    "category":"not working correctly"
   },
   {
    "id":"4",
    "word":"root",
    "category":"botany"
   },
   {
    "id":"5",
    "word":"fugacious",
    "category":"not lasting very long"
   },
   {
    "id":"6",
    "word":"sunday",
    "category":"week"
   },
   {
    "id":"7",
    "word":"diwali",
    "category":"festival"
   },
  ]
  wordsList:any[] = [];
  existWord:string[]=[]
  increment:number=0;
  existWordCopy:any[]=[];
  status:boolean=false;
  remainGuess:number=5
  wordsListLength:number=this.wordDatabase.length
  wordHint:any;
  wrongLettersTemp:any[]=[];
  wrongLettersRep:any[]=[];
  next(){
    this.status=false
    this.existWordCopy = [];
    this.remainGuess=5;
    if(this.wordDatabase.length>=this.increment+1){
      this.wordsList.push(this.wordDatabase[this.increment])
      this.setWord(this.wordsList[this.increment].word)
      this.wordHint = this.wordsList[this.increment].category
      this.increment =this.increment+1 
    }else{
      alert("All words have attempted")
    } 
  }
  prev(){
      if(this.increment>0 && this.increment!=1){
        this.increment =this.increment-1
        this.setWord(this.wordsList[this.increment-1].word);
        this.wordHint = this.wordsList[this.increment-1].category
        this.wordsList.pop();
      }
  }

  onChangeWord(val:any,i:number){
   if(this.existWordCopy.length <=0){
     this.existWordCopy = [...this.existWord]
     this.existWordCopy[i]=val.toLowercase()
     this.wrongLettersTemp.push(val.toLowercase())
   }else{
     this.existWordCopy[i]=val.toLowercase()
     this.wrongLettersTemp.push(val.toLowercase())
   }  
  }
  setWrongLetterValue(){
    for(let i=0;i<this.wrongLettersTemp.length;i++){
      this.wrongLettersRep[i]=this.wrongLettersTemp[i]
    }
  }
  compareTwoString(string2:any){
    let string1 = ""
    for(let i=0;i<this.wordsList.length;i++){
       string1=this.wordsList[this.increment-1].word
    }
    if(string1.length===string2.length && string1.toString()===string2.join('')){
     this.status = true
    }else{
      if(this.remainGuess >0){
        this.remainGuess = this.remainGuess-1
      }else{
        alert('you have not remain guess')
      }
    }
  }
  
  checkWord(){
   this.compareTwoString(this.existWordCopy)
   if(!this.status){
     this.setWrongLetterValue()
   }

  }
  setWord(word:string){
   const wordlength = word.length;
   this.existWord = word.split("");
  //  if(this.remainGuess !=0){
     this.removeAlpha(wordlength)
  //  }
  }
  removeAlpha(wordlength:number){
   if(wordlength < 2){
    this.removeSomeValue(1)
   }
   if(wordlength == 3){
    this.removeSomeValue(1)
   }
   else if(wordlength == 4){
    this.removeSomeValue(1)
   }
   else if(wordlength == 5){
    this.removeSomeValue(2)
   }
   else if(wordlength >= 6){
    this.removeSomeValue(3)
   }
  }
  removeSomeValue(value:number){
   for(let i=0;i<value;i++){
    this.existWord[this.randomValue(this.existWord.length)]="";
   }  
  }
 addSomeValue(words:any){
    for(let i=0;i<words.length;i++){
     if(this.existWord[i]==""){
       this.existWord[i]=words[i]
     }
    }  
   }
  randomValue(num:number){
    const random = Math.floor(Math.random() * num);
    return random;
  }

  
  ngOnInit(){
    this.next()
  }

}
