import { LightningElement, wire } from 'lwc';
import { fireEvent, registerListener } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class PublisherComponentExample extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    getName='';
    getQuantity='';
    amount;
    productDetail={};
    allProductEdit;
    isAdd = true ;
    index = 0;
    isSubmit = false;


    connectedCallback() {
        registerListener("sendProductDetailEdit",this.productDetailEdit,this);        
    }
    productDetailEdit(data){
            this.isSubmit = true;
            this.isAdd = false;
            
            // this.getName = data.name;
            // this.getQuantity = data.quantity;
            // this.amount = data.amount;
            // console.log(this.getName,this.getQuantity,this.amount);
            


             this.allProductEdit = data;
             console.log(this.allProductEdit);
            // console.log(this.allProductEdit);
            
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
    
    handleSendMessage() {
        fireEvent(this.pageRef,"sendMessage","Hello message received from publisher component");
    }
    handleAdd(){
        this.amount = this.template.querySelector('.amount').value;
        this.productDetail={
            index : this.index +1,
            name : this.getName ,
            quantity : this.getQuantity,
            amount : this.amount,
         }
         
         fireEvent(this.pageRef,"sendProductDetail",this.productDetail);
         this.index ++ ;
         
    }
    handelName(event){
        this.getName=event.target.value;
    }
    handelQunatity(event){
        this.getQuantity = event.target.value;
    }
    handelRemove(event){

        
        var abc= event.target.dataset.item;
        console.log(abc - 1);
        let a = this.allProductEdit[abc-1].index;
        console.log('data',a);
        // abc= abc - 1;

        // // this.allProductEdit.pop(abc);
        // console.log('@@@@@@@@'+abc);
        // console.log(this.allProductEdit.length)
        // delete this.allProductEdit[abc];

        // console.log("All"+JSON.stringify(this.allProductEdit));
        // console.log(this.allProductEdit.length);
        // this.allProductEdit = [...this.allProductEdit];
        // fireEvent(this.pageRef,"sendProductDetailEdit",this.allProductEdit);

    }
    handleSumit(){
       fireEvent(this.pageRef,"sendProductDetail",this.allProductEdit);
       for(var product in this.allProductEdit){

            // this.allProductEdit = [];
            this.allProductEdit =[{
                name : this.getName,
                quantity : this.getQuantity,
                amount : this.amount
            }]
           console.log(this.allProductEdit[product]);
       }
     //  console.log('hii'+this.allProductEdit);
    }
}