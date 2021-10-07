import { LightningElement, track ,wire} from 'lwc';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubSub';
import accountList from '@salesforce/apex/AccountContactController.accountList';
import saveTask from '@salesforce/apex/ContactControllerLWC.saveTask';
import allcontactList from '@salesforce/apex/ContactControllerLWC.allcontactList';
import contactDetailList from '@salesforce/apex/ContactControllerLWC.contactDetailList';
import deleteContact from '@salesforce/apex/ContactControllerLWC.deleteContact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import { CurrentPageReference } from 'lightning/navigation';


export default class SubscribeComponentAss extends LightningElement {

    @track contactId;
    allcontactdata={};
    accountName=[];
    contactName=[];
    getConName;
    getAccName;
    taskDetail;
    @wire(CurrentPageReference) pageRef;

    @wire(accountList) getAccountList({error, data}){
        if(data){
                  for( var i=0; i<data.length; i++) {
                     // console.log('id=' + data[i].Id);
                      this.accountName = [...this.accountName ,{value: data[i].Id , label: data[i].Name}];                                   
                  }       
                 // console.log("@@", data);
               //   this.allAccountList=data;
              }
              else{
                  console.log("@@", error);
              }
} 
@wire(allcontactList) getContactList({error, data}){
    if(data){
              for( var i=0; i<data.length; i++) {
                 // console.log('id=' + data[i].Id);
                  this.contactName = [...this.contactName ,{value: data[i].Id , label: data[i].Name}];                                   
              }       
             // console.log("@@", data);
           //   this.allAccountList=data;
          }
          else{
              console.log("@@", error);
          }
} 

    get getAccountName() {
        console.log(this.accountName);
        return this.accountName;
    }
    get getContactName() {
        console.log(this.contactName);
        return this.contactName;
    }   
    connectedCallback() {
        registerListener("sendContactId",this.handleContactId,this);        
    }
    handleContactId(id){

            console.log('Yes ContactID',id);
            this.contactId = id;
            contactDetailList({contactId : this.contactId}).then((result) => {
                console.log('result',result);
                this.allcontactdata={
                    Name:result.Name,
                    accId : result.AccountId,
                    conId :result.Id,
                    AccountName : result.Account.Name,
                    Rating : result.Account.Rating,
                    AccountPhone : result.Account.Phone,
                    Coustomer_priority : result.Account.CustomerPriority__c,
                    Email : result.Email,
                    Birthdate  : result.Birthdate ,
                    Phone : result.Phone,
                    Fax : result.Fax
                    };
                console.log('data',this.allcontactdata);
                this.getConName = this.allcontactdata.conId;
                this.getAccName = this.allcontactdata.accId;
            }).catch({
    
            });
    }

    deleteRecord(){
        deleteContact({contactId:this.contactId}).then(result=>{
                            
            if(result == 'success'){
                console.log('success');
                    
            }

            }).catch(error=>{
          
            console.log('error',error);
            })
    }
    // handleContactname(event){
    //         this.getConName = event.target.value;
    // }
    // handleAccountname(event){
    //         this.getAccName = event.target.value;
    // }

    SaveRecord(){
         var subject= this.template.querySelector('.subject').value;
         var priority= this.template.querySelector('.priority').value;
             saveTask({subject:subject,priority:priority,contactId:this.getConName,accountId:this.getAccName}).then(result=>{
                            
                const toastEvent = new ShowToastEvent({
                    title:'Record',
                    message:'Task Created',
                    variant:'success',
                })
                this.dispatchEvent(toastEvent);
                 subject='';
                priority='';
                this.getConName='';
                this.getAccName='';
    
                }).catch(error=>{
              
                console.log('error',error);
                })
    }
    
          disconnectedCallback() {
                    unregisterAllListeners(this);
                }
}