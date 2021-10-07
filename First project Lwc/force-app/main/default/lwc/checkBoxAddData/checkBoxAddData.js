import { LightningElement } from 'lwc';

export default class CheckBoxAddData extends LightningElement {
          status ='true';
          checkedvalue ='';
          textboxData ='';
          getcheckBox='';
          dropDownArr = [];
          checkBoxValue =[];
         // dropdwonData =[];
          get getStatus(){
                    return [
                              {label: 'Enable', value : 'true'},
                              {label: 'Disable', value : ''}
                    ]
          }
          handleRadio(event){
                    this.status = event.target.value;
                   
                    
          }
//          get  dropdwonData(){
                   
//                    var drop ={"label" : this.textboxData , "value" : this.textboxData}
//                    this.dropDownArr.push(drop);
//                     return this.dropDownArr;
//           }
          addValue(){
                    this.textboxData = this.template.querySelector('.inputFor').value;
                    this.dropDownArr =[...this.dropDownArr,{label:this.textboxData, value:this.textboxData}];

                 this.checkBoxValue=[...this.checkBoxValue,{label:this.textboxData+'', value :this.textboxData+''}];
                 this.checkedvalue= true;
          }
}