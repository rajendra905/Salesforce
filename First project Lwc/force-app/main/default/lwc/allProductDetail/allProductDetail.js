import { LightningElement ,wire, track } from 'lwc';
import { fireEvent, registerListener } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class AllProductDetail extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    aLLproductList =[];
    allEditData=[];
    Total = 0;
    cb;
    connectedCallback() {
        registerListener("sendProductDetail",this.productDetail,this);    
    }
     productDetail(data){
        this.aLLproductList=[...this.aLLproductList , {
            index: data.index,
            name : data.name,
            quantity : data.quantity,
            amount : data.quantity * data.amount

        }];
        this.Total= this.Total + parseInt(data.quantity * data.amount);
        
    }
    handelChangeData(){
        this.cb = this.template.querySelector('.accept');

        if(this.cb.checked){
            fireEvent(this.pageRef,"sendProductDetailEdit",this.aLLproductList);
        }
        this.aLLproductList = [];
    //     this.allEditData.push(this.aLLproductList);
    //     this.allEditData.push(this.cb.checked);
    //    console.log("@@@@@",this.allEditData);
       

    }
}