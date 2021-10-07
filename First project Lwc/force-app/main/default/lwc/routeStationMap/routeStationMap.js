import {
          LightningElement
} from 'lwc';
import getRouteStation from '@salesforce/apex/getRouteStationApiLWC.getRouteStation';
export default class RouteStationMap extends LightningElement {

          currentStation;
          distinationStation;
          routeDetail;
          handelCLick() {
                    var journeyData = this.template.querySelectorAll(".forInput");
                    var journey = {
                              currentStation: journeyData[0].value,
                              distinationStation: journeyData[1].value

                    }
                    this.currentStation=journey.currentStation;
                    this.distinationStation=journey.distinationStation;
                    getRouteStation({
                              Departure: this.currentStation ,
                               Arrival:this.distinationStation 
                    }).then(result => {
                              this.routeDetail = JSON.parse(result);
                              console.log(this.routeDetail);
                              for(var i in this.routeDetail){
                                        console.log(this.routeDetail[0])
                              }
                    }).catch(error => {
                              console.log(error);
                    });
          }
}