import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    data ={
        firstvalue: 0,
        secondvalue : 0,
        add : 0,
        sub: 0,
        mul :0,
        div:0,
        mod : 0
    
    };
   add() {
       // document.getElementsByClassName('hiddenshow').style.display='block';
     //   document.getElementById("myP1").style.display = 'none';
       var firstvalue = parseInt(this.template.querySelector('.firstvalue').value);
       var secondvalue = parseInt(this.template.querySelector('.secondvalue').value);
       var add = firstvalue + secondvalue;
       this.data ={
           firstvalue : firstvalue,
           secondvalue : secondvalue,
           add : add
       }
      document.getElementById("myid").style.display = 'none';
   }
   subtract(){
    var firstvalue = parseInt(this.template.querySelector('.firstvalue').value);
    var secondvalue = parseInt(this.template.querySelector('.secondvalue').value);
    var sub = firstvalue - secondvalue;
    this.data ={
        firstvalue : firstvalue,
        secondvalue : secondvalue,
        sub : sub
    }
    
   }

   multiply(){

    var firstvalue = parseInt(this.template.querySelector('.firstvalue').value);
    var secondvalue = parseInt(this.template.querySelector('.secondvalue').value);
    var mul = firstvalue * secondvalue;
    this.data ={
        firstvalue : firstvalue,
        secondvalue : secondvalue,
        mul : mul
    }
    
   }
   division(){
    var firstvalue = parseInt(this.template.querySelector('.firstvalue').value);
    var secondvalue = parseInt(this.template.querySelector('.secondvalue').value);
    var div = firstvalue / secondvalue;
    this.data ={
        firstvalue : firstvalue,
        secondvalue : secondvalue,
        div : div
    }
   }
   moduls(){
    var firstvalue = parseInt(this.template.querySelector('.firstvalue').value);
    var secondvalue = parseInt(this.template.querySelector('.secondvalue').value);
    var mod = firstvalue %   secondvalue;
    this.data ={
        firstvalue : firstvalue,
           secondvalue : secondvalue,
        mod : mod
    }
   }
}   