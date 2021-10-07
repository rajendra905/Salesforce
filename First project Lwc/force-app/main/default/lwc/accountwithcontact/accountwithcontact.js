import { LightningElement ,wire ,track } from 'lwc';
import accountList from '@salesforce/apex/AccountContactController.accountList';
import contactList from '@salesforce/apex/AccountContactController.contactList';
import deleteContact from '@salesforce/apex/AccountContactController.deleteContact';
import {refreshApex} from '@salesforce/apex';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Accountwithcontact extends LightningElement {

          @track accountName = [];
          getName;
          allcontactdata=[];
          selectedContactID=[];
          @track isNewModel;
          @track wireList=[];
          @track wirecontactList=[];
          @wire(contactList) conList(result) {
                    this.wirecontactList = result;
                }
            @wire(accountList) accList(result) {
                    this.wireList = result;
                }
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

          get getAccountName() {
                    console.log(this.accountName);
                    return this.accountName;
                }

          handleName(event){
                    this.getName = event.target.value;
                    contactList({accountId : this.getName}).then((result) => {
                              this.allcontactdata=result;
                              console.log('Contact',this.allcontactdata);
                          }).catch((error)=>{
                                console.log(error);
                          });
                    
                    
          }
          newModel(){
                    this.isNewModel = true;
                }
          closeModalView(){
                   
                    this.isNewModel=false;
                    
          }
          handleSubmit(event) {
                    console.log('onsubmit event recordSave'+ event.detail.fields);
                   
                }
          handleSuccess(event) {
              
                  const toastEvent = new ShowToastEvent({
                      title:'Record Save',
                      message:'Record Save successfully',
                      variant:'success',
                  })
                  this.dispatchEvent(toastEvent);
                      console.log('onsubmit event recordSave'+ event.detail.fields);
                      this.isNewModel= false;
                      return refreshApex(this.wireList);
              }

          slectedContact(event){
              
              this.selectedContactID =[...this.selectedContactID,event.target.value];


          }
          deleteRecord(){

                    alert(this.selectedContactID);
                    deleteContact({contactId:this.selectedContactID}).then(result=>{
                        refreshApex(this.wirecontactList);
                        const toastEvent = new ShowToastEvent({
                            title:'Record Save',
                            message:'Record Delete successfully',
                            variant:'success',
                        })
                        this.dispatchEvent(toastEvent);
                            return refreshApex(this.wirecontactList);
                         
                    }).catch(error=>{
                             
                              console.log('error',error);
                    })
          }
              
}