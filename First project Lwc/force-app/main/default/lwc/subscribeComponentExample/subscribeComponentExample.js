import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SubscribeComponentExample extends LightningElement {
    


    @wire(CurrentPageReference) pageRef;

    publisherMessage;
    userDetail = {};
    productDetail ={};
    getName = '';
    getQuantity = '';
    amount;



    connectedCallback() {
        registerListener("sendMessage",this.handleSendMessage,this);        
    }
    get NameArr(){
      
        return[
            {label:'Keyboard',value:'keyboard'},
            {label:'Mouse',value:'mouse'},
            {label:'Pendrive',value:'pendrive'},
            {label:'WebCamera',value:'webcamera'},
            {label:'HeadPhone',value:'headphone'}
        ]
    };

    get quantityArr(){
      
        return[
            {label:'1',value:'1'},
            {label:'2',value:'2'},
            {label:'3',value:'3'},
            {label:'4',value:'4'},
            {label:'5',value:'5'}
        ]
    };

    handleSendMessage(message) {
        console.log(message);
        this.publisherMessage = message;
    }
    productDetail(data){
        this.getName= data.name;
        this.getQuantity =data.quantity;
        this.amount = data.amount;
    }
    handleUserDetail(data) {
        console.log(data);
        this.userDetail = {
            id : data.id,
            name : data.name,
            salary : data.salary,
            city : data.city
        }
    }

    handleSubscribe() {
        registerListener("sendUserDetail",this.handleUserDetail,this);
        registerListener("sendProductDetail",this.productDetail,this);

    }

    handelSubmit() {


        this.productDetail = {
            name :this.getName,
            quantity : this.getQuantity,
            amount : this.amount
        }

        fireEvent(this.pageRef,"allDetail",this.productDetail);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }
}