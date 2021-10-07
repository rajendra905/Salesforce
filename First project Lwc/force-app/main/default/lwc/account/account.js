import { api, LightningElement, track, wire } from 'lwc';
import accountList from '@salesforce/apex/AccountControllerLWC.accountList';
import accountViewList  from '@salesforce/apex/AccountControllerLWC.accountViewList';
import deleteAccountRecord  from '@salesforce/apex/AccountControllerLWC.deleteAccount';
import {refreshApex} from '@salesforce/apex';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import accountClone from '@salesforce/apex/AccountControllerLWC.accountClone';


export default class Account extends LightningElement {
          count = 0 ;
          @api recordId;
          allAccountData;
          accountViewData;
          @track recordid;
          @track isDeleteModel;
          @track isNewModel;
          @track isViewModel;
          @track isCloneModel;
          @track isEditModel = false;
          @track allDataList=[];
          @track wireList=[];
          @wire(accountList) accList(result) {
            this.wireList = result;
        }
          @wire(accountList) getAccountList({error, data}){
                    this.allDataList=data;
                    if(data){
                              this.allAccountData = data;
                             
                            }
                    else{ console.log("##",error); }
          }
          // updateData(){
          //   this.isEditModel = false;
          // }
        handleSubmit(event) {
            console.log('onsubmit event recordEditForm'+ event.detail.fields);
           
        }
        handleSuccess(event) {
      
          const toastEvent = new ShowToastEvent({
              title:'Record Edited',
              message:'Record Edited successfully',
              variant:'success',
          })
          this.dispatchEvent(toastEvent);
              console.log('onsubmit event recordEditForm'+ event.detail.fields);
              this.isEditModel=false;
              this.isNewModel= false;
              return refreshApex(this.wireList);
      }
          deleteModel(event){
                    this.isDeleteModel = true;
                    this.recordid = event.target.value;
          }
          viewModel(event){
                    this.recordid = event.target.value;
                   
                    accountViewList({accountId:this.recordid}).then(result=>{
                              this.isViewModel = true;
                              console.log('!!',result);
                              this.accountViewData = result;
                              
                    }).catch(error=>{
                              console.log('error',console.error);
                    })
                    
                   
          }
          editModel(event){
                    this.recordId = event.target.value;
                   this.isEditModel = true;
          }
          cloneMoel(event){
            this.recordId = event.target.value;
            this.isCloneModel = true;
          }

          deleteRecord(){
                    deleteAccountRecord({accountId:this.recordid}).then(result=>{
                            
                              if(result == 'success'){
                                        this.isDeleteModel = false;
                                        return refreshApex(this.wireList);
                                       // refreshApex(this.allDataList);
                              }

                              }).catch(error=>{
                              this.isDeleteModel = false;
                              console.log('error',error);
                    })
                   // this.closeModal();
          }
        
          closeModal(){
                    this.isDeleteModel =false;
          }
          closeModalView(){
                    this.isViewModel =false;
                    this.isEditModel=false;
                    this.isNewModel=false;
                    this.isCloneModel= false;
          }
          newModel(){
              this.isNewModel = true;
          }
          cloneAccount(){
            var accountData = this.template.querySelectorAll(".forInput");
            var account={
            Name:accountData[0].value,
            Phone:accountData[1].value,
            Rating:accountData[2].value,
            AccountNumber:accountData[3].value
          }
          accountClone({newAccountClone: account})
          .then(result => {
              const toastEvent = new ShowToastEvent({
                  title:'New Records',
                  message:'New Account Record successfully',
                  variant:'success',
              })
              this.dispatchEvent(toastEvent);
              this.isCloneModel=false;
          return refreshApex(this.wireList);
          }).catch(error => {
          console.log("!!",error);
          });
             }
          
}
