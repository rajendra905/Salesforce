import {
          LightningElement,
          api
} from 'lwc';
import projectStatus from '@salesforce/apex/ProjectControllerLWC.projectStatus';

export default class ProjectStatusComponent extends LightningElement {
          @api recordId;
          currentStatus = '';
          
          connectedCallback() {
                    console.log('id', this.recordId);
                    projectStatus({
                              projectId: this.recordId
                    }).then(result => {
                              console.log('result', result.Status__c);
                              this.currentStatus = result.Status__c;

                    }).catch(error => {
                              console.log(error);
                    });

          }
}