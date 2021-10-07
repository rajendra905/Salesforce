import { LightningElement, wire } from 'lwc';
import contactList from '@salesforce/apex/ContactControllerLWC.contactList';
import allcontactList from '@salesforce/apex/ContactControllerLWC.allcontactList';

export default class ContactLimitData extends LightningElement {
          allcontactdata;
          limitvalue;
          getcheckboxvalue ='';
          isName =true;
          isEmail=true;
          isPhone = true;
          isFax =true;
          isBirthDate = true;
          value = ['Name','Email','Phone','Fax','BirthDate','All'];
          truevalue;
          allcheckvar;
          @wire(allcontactList) getContactList({error, data}){
                    this.allcontactdata=data;
                    if(data ){
                              this.allcontactdata = data;
                             
                            }
                    else{ console.log("##",error); }
          }




          get limitOptions(){
      
              return[
                  {label:'5',value:'5'},
                  {label:'10',value:'10'},
                  {label:'15',value:'15'},
                  {label:'20',value:'20'},
                  {label:'25',value:'25'}
              ]
          };
         

          get options() {
              return [
                  { label: 'Name', value: 'Name' },
                  { label: 'Email', value: 'Email' },
                  { label: 'Phone', value: 'Phone' },
                  { label: 'Fax', value: 'Fax' },
                  { label: 'BirthDate', value: 'BirthDate' },
                  { label: 'All', value: 'All' },
              ];
          }
         
          handleChange(e) {
                  this.allcheckvar = e.target.value;
                  if(this.allcheckvar == ''){
                            //alert('hiii');
                            this.value = [];
                            this.value.push('Name');
                             this.allcheckvar.push('Name');
                            
                            
                  }else{
                              for(var checkbox in this.allcheckvar){
                                         if(this.allcheckvar[checkbox] == 'All'){
                                                  this.value = [];
                                                  this.value.push('Name','Email','Phone','Fax','BirthDate','All');
                                                   this.allcheckvar.push('Name','Email','Phone','Fax','BirthDate','All');
                                                  
                                        }
                              }

                  }
          
                  
          this.handelhideshow();
          }
          handelhideshow(){
                    this.isName =this.allcheckvar.some(function(e){
                              return e=='Name';
                    });
                    this.isEmail =this.allcheckvar.some(function(e){
                              return e=='Email';
                    });
                    this.isFax =this.allcheckvar.some(function(e){
                              return e=='Fax';
                    });
                    this.isBirthDate =this.allcheckvar.some(function(e){
                              return e=='BirthDate';
                    });
                    this.isPhone =this.allcheckvar.some(function(e){
                              return e=='Phone';
                    });
          }
      
          handleonoption(event){
              this.limitvalue=event.target.value;
              //console.log('@@'+this.record);
              contactList({recordLimit : this.limitvalue}).then((result) => {
                  this.allcontactdata=result;
              }).catch({
      
              });
          }
}