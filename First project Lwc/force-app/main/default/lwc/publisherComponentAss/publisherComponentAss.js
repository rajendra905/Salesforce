import { LightningElement , wire} from 'lwc';
import { fireEvent, registerListener } from 'c/pubSub';
import allcontactList from '@salesforce/apex/ContactControllerLWC.allcontactList';
import { CurrentPageReference } from 'lightning/navigation';
export default class PublisherComponentAss extends LightningElement {

          allcontactdata;
          @wire(CurrentPageReference) pageRef;
          @wire(allcontactList) getContactList({error, data}){
                    this.allcontactdata=data;
                    if(data ){
                              this.allcontactdata = data;
                             
                            }
                    else{ console.log("##",error); }
          }
          selectedContact(event){
                    
                    console.log('contact ID',event.target.value);
                    fireEvent(this.pageRef,"sendContactId",event.target.value);
          }
          
}