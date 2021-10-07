import { LightningElement,api} from 'lwc';
import KEYBOARD from '@salesforce/resourceUrl/keyBoard';
import MOUSE from '@salesforce/resourceUrl/Mouse';
import PENDRIVE from '@salesforce/resourceUrl/penDrive';
import WEBCAMERA from '@salesforce/resourceUrl/webCamera';




export default class Allproduct extends LightningElement {
         
          @api countKeboard = 0;
          @api countMouse =0;
          @api countPendrive = 0;
          @api countWebcamera = 0;
          @api countgraphics = 0;
          @api
          singleProduct;
          oneProduct;
          keyBoard = KEYBOARD;
          mouse = MOUSE;
          pendrive = PENDRIVE;
          webcamera = WEBCAMERA;
         // graphicscard = GRAPHICSCARD;
         
          value=["KeyBoard"];
          
          product ={
                    "KeyBoard" :{
                              "name" : "KeyBoard",
                              "price" : "500",
                              "description" : "KeyBoard",
                              "count" : "0",
                              "url" : this.keyBoard
                     },
                    "Mouse" :{
                              "name" : "Mouse",
                              "price" : "200",
                              "description" : "Mouse",
                              "count" : "0",
                              "url" : this.mouse

                    },
                    "Pendrive" :{
                              "name" : "Pendrive",
                              "price" : "150",
                              "description" : "Pendrive",
                              "count" : "0",
                              "url" : this.pendrive

                    },
                    "WebCamera" :{
                              "name" : "WebCamera",
                              "price" : "300",
                              "description" : "WebCamera",
                              "count" : "0",
                              "url" : this.webcamera
                    },
                    "GraphicsCard" :{
                              "name" : "GraphicsCard",
                              "price" : "700",
                              "description" : "GraphicsCard",
                              "count" : "0",
                              "url" : this.graphicscard
                    }
          }


          get options() {
                    return [
                        { label: 'KeyBoard', value: 'KeyBoard' },
                        { label: 'Mouse', value: 'Mouse' },
                        { label: 'Pendrive', value: 'Pendrive' },
                        { label: 'WebCamera', value: 'WebCamera' },
                        { label: 'GraphicsCard', value: 'GraphicsCard' },
                        
                    ];
                }

          handleProduct(event){
                    
                    var getProduct = event.target.value;
                    //alert(getProduct);
                    
                    for(var pro in getProduct){
                              if(getProduct[pro] == 'KeyBoard'){
                                        this.value =[];
                                        getProduct = [];
                                        getProduct= 'KeyBoard';
                                        this.value.push('KeyBoard');
                                       this.getProductDetail(getProduct);
                              }else if(getProduct[pro] == 'Mouse'){
                                       this.value =[];
                                        getProduct = [];
                                        getProduct= 'Mouse';
                                        this.value.push('Mouse');
                                        this.getProductDetail(getProduct);
                              }else if(getProduct[pro] == 'Pendrive'){
                                        this.value =[];
                                        getProduct = [];
                                        getProduct= 'Pendrive';
                                        this.value.push('Pendrive');
                                        this.getProductDetail(getProduct);
                              }else if(getProduct[pro] == 'WebCamera'){
                                        this.value =[];
                                        getProduct = [];
                                        getProduct= 'WebCamera';
                                        this.value.push('WebCamera');
                                        this.getProductDetail(getProduct);
                              }else if(getProduct[pro] == 'GraphicsCard'){
                                        this.value =[];
                                        getProduct = [];
                                        getProduct= 'GraphicsCard';
                                        
                                        this.value.push('GraphicsCard');
                                        this.getProductDetail(getProduct);
                              }
                    }
          }  

          getProductDetail(getProduct){
                    this.singleProduct  = this.product[getProduct];
                     console.log('Parent',this.singleProduct);
                     //var detail ={'name':'rajendra'};
                    // console.log('hiiii',this.template.querySelector('c-detailproduct'));
                    this.template.querySelector(".child").getValueFromParent(this.singleProduct);
                    
          }
          handelKeyBoard(event){
                    if(event.detail <=3){
                    this.countKeboard = event.detail;
                    }
                    else{
                              alert("Limited KeyBoard Available");
                    }
          }
          handelMouse(event){
                    if(event.detail <=3){
                              this.countMouse = event.detail;
                    }
                    else{
                              alert("Limited Mouse Available");
                    }
          }
          handelPendrive(event){
                    if(event.detail <=3){
                              this.countPendrive = event.detail;
                    }
                    else{
                              alert("Limited PenDrive Available");
                    }
           }
          handelWebcamera(event){
                    if(event.detail <=3){
                              this.countWebcamera = event.detail;
                    }
                    else{
                              alert("Limited WebCamera Available");
                    }
          }
          handelgraphics(event){
                    if(event.detail <=3){
                              this.countgraphics = event.detail;

                    }
                    else{
                              alert("Limited WebCamera Available");
                    }

          }
           
}