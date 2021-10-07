import { LightningElement ,wire,api } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';


export default class ContactWithUiRecord extends LightningElement {
    pageToken = null;
    nextPageToken = null;
    previousPageToken = null;
    records = [];
    error;
    @api count=0;

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'AllContacts',
        sortBy: NAME_FIELD,
        pageSize: 10,
        pageToken: '$pageToken'
    })listView({ error, data }) {
        if (data) {
            this.records = data.records.records;
            this.error = undefined;
            this.nextPageToken = data.records.nextPageToken;
            this.previousPageToken = data.records.previousPageToken;
          //   this.count = data.records.length;
          //   console.log(this.count);
          //   for(let i = 0 ; i <this.records.length; i++){
          //             //console.log('indexing ', data.records.records[i]);
          //             this.records.push({...this.records[i], rowNo : (i+1)}); 
          //             //this.records[i]['rowNo'] = (i+1); 
          //             //console.log('this.records['+i+'] ', this.records[i]);
          //   }
          //   console.log('this.records ', this.records);
          //   console.log('data',data);
        } else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }

    handleNextPage(e) {
        this.pageToken = this.nextPageToken;
    }

    handlePreviousPage(e) {
        this.pageToken = this.previousPageToken;
    }

}