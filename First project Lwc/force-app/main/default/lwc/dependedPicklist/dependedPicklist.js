import { LightningElement, track } from 'lwc';

export default class DependedPicklist extends LightningElement {
	getcountry ='';
	getstate ='';
	getcity ='';
	pincode ='';
	stateOption=[];
	cityOption=[];
	pinCodesOption=[];
	data={
		"India":{
		    "Rajasthan":{
		        "Ajmer":{
			 "305001":"305001" ,
			 "344444" :"344444" 
		        },
		        "Jaipur":{
			  '300230':'300230',
			  '2330303':'231213'
		        },
		        "Udaipur":{
			  '122323':'342443',
			  '312312':'3122319',
		        }
		    },
		    "UP":{
		        "Kanpur":{
			  '12345':'12345',
			  '3456':'3456'
		        },
		        "Lucknow":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		        "Gorkhpur":{
			  "23889":'23444',
			  '34424':'314423'
		        }
		    },
		    "Delhi":{
		        "Palam":{
			  '110077':'110077',
			  "23889":'23444',
			  '34424':'314423'
		        },
		        "Rajiv chowk":{
			  '110078':'110078',
			  "23889":'23444',
			  '34424':'314423'
		        },
		        "Karol garh":{
			  '3738923':'277382',
			  "882922":'2782781'
		        }
		    }
		},
		"Australia":{
		    "New South Wales":{
		        "Syndey":{
			  '110067':'110076',
			  "238898":'234448',
			  '3442433':'3144236'
	  
		        },
		        "NewCastle":{
			  '110067':'110076',
			  "2382424":'235545',
			  '3442535':'31442123'
		        },
		        "Wollen":{
			  '1100655':'1100456',
			  "23889556":'234122',
			  '3442433':'31442312'
		        }
		    },
		    "Queensland":{
		        "Brisbane":{
			  '234555':'233333',
			  '232333':'2323213'
	  
		        },
		       "Gold Coast":{
		        '234555':'233333',
		        '232333':'2323213'
		       },
		        "Caims":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		    },
		    "Victoria":{
		        "Melbourne":{
			  '234555':'233333',
			  '232333':'2323213'
	  
		        },
		        "Geelong":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		        "Ballana":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		    
		    }
	  
		},
		"United States":{
		    "Florida":{
		        "Miami":{
			  '234555':'233333',
			  '232333':'2323213'
	  
		        },
		        "Orlando":{
			  '234555':'233333',
			  '232333':'2323213'
	  
		        },
		        "Tamper":{
			  '234555':'233333',
			  '232333':'2323213'
	  
		        }
		    },
		    "California":{
		        "Los Angeles":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		        "San franciso":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		        "San diago":{
			  '234555':'233333',
			  '232333':'2323213'
		        }
		    },
		    "Texas":{
		        "Houston":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		        "Austlin":{
			  '234555':'233333',
			  '232333':'2323213'
		        },
		        "Dallas":{
			  '234555':'233333',
			  '232333':'2323213'
		        }
		    }
		}
	      }

	get countryArr (){
       			 let countryname = Object.keys(this.data);
        			let countryioption=[]
        			for (var index = 0; index < countryname.length; index++) {
				 let countryname1= {
               				 "label" : countryname[index],
                				"value" : countryname[index]
              				 }
			 countryioption.push(countryname1)
			}
		return countryioption;
	}

	 StateArr(){
        		let statename = Object.keys(this.data[this.getcountry]);
        		this.stateOption=[];
	
       		 for (let index = 0; index < statename.length; index++) {
			let statename1= {
               			"label" : statename[index],
				"value" : statename[index]
               			}
			   this.stateOption.push(statename1)
			}
		//return this.stateOption;
	}

	 CityArr(){
		let cityname = Object.keys(this.data[this.getcountry][this.getstate]);
		this.cityOption=[];
		for (let index = 0; index < cityname.length; index++) {
					let cityname1= {
		"label" : cityname[index],
		"value" : cityname[index]
		}
				this.cityOption.push(cityname1)
				}
			//return cityOption;
		}

	 pinCode (){
		let pincode = Object.keys(this.data[this.getcountry][this.getstate][this.getcity]);

			this.pinCodesOption=[];
			for (let index = 0; index < pincode.length; index++) {
							let pincode1= {
				"label" : pincode[index],
				"value" : pincode[index]
				}
						this.pinCodesOption.push(pincode1)
						}
		//return pinCodesOption;
	}

	handleCountry(event) {
			this.getcountry = event.target.value;
			this.StateArr();
			
		}
	handleState(event) {
		  this.getstate = event.target.value;
		  this.CityArr();
	}
	handlecity(event) {
		this.getcity = event.target.value;
		this.pinCode();
 	 }
}
