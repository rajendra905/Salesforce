import { LightningElement ,api} from 'lwc';

export default class Detailproduct extends LightningElement {
          @api name;
          @api price;
          @api description;
          @api count;
          @api url;
          @api keyboardcount =  0;
          @api mousecount = 0;
          @api pendrivecount = 0;
          @api webcameracount = 0;
          @api graphicscardcount = 0;
          @api
          getValueFromParent(data){
                   var productData= JSON.parse(JSON.stringify(data));
                   this.name = productData.name;
                   this.price = productData.price;
                   this.description = productData.description;
                   this.count = productData.count;
                   this.url = productData.url;
                   console.log(this.name,this.price,this.description,this.count,this.url);

                    // var employeeData = JSON.parse(JSON.stringify(data));
          }
          addProduct(){
                    if(this.name == 'KeyBoard'){
                             this.keyboardcount = this.keyboardcount +1;
                              const childEvent = new CustomEvent('keyboard',{
                                        detail: this.keyboardcount
                              });
                              this.dispatchEvent(childEvent);

                              

                    }else if(this.name == 'Mouse'){
                              this.mousecount = this.mousecount + 1;
                              const childEvent = new CustomEvent('mouse',{
                                        detail: this.mousecount
                              });
                              this.dispatchEvent(childEvent);

                    }else if(this.name == 'Pendrive'){
                              this.pendrivecount = this.pendrivecount +1;
                              const childEvent = new CustomEvent('pendrive',{
                                        detail: this.pendrivecount
                              });
                              this.dispatchEvent(childEvent);

                    }else if(this.name == 'WebCamera'){
                              this.webcameracount= this.webcameracount +1;
                              const childEvent = new CustomEvent('webcamera',{
                                        detail: this.webcameracount
                              });
                              this.dispatchEvent(childEvent);

                    }else if(this.name == 'GraphicsCard'){
                              this.graphicscardcount = this.graphicscardcount + 1;
                              const childEvent = new CustomEvent('graphics',{
                                        detail: this.graphicscardcount
                              });
                    }

          }
}