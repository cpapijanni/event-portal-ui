import { Component, Input } from '@angular/core';
import { QuoteRequestModel } from '../shared';

@Component({
  selector: 'quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})

export class QuoteRequestComponent {
	
	private quoteRequestModel: QuoteRequestModel;
	private quoteDetails: any = {};
	private showSuccessMsg: boolean = false; 

	private imagesBaseURL: string = "https://d19vuzhmciufvl.cloudfront.net/hyderabad/images/list-images/";
	 
	  constructor () {
		this.initializeQuoteRequestModel();
	  	this.initializeQuoteDetails();
	  }

	  private initializeQuoteRequestModel(){
		  this.quoteRequestModel =  new QuoteRequestModel();
		  this.quoteRequestModel.eventType = 'wedding';
		  this.quoteRequestModel.services = [];
		  this.quoteRequestModel.entertainment = [];
		  this.quoteRequestModel.isEventPlannerNeeded = 'No';
	  }
	  
	  private initializeQuoteDetails(){
	  	this.quoteDetails.eventTypeList = [ 	
		  									{"displayName":"Wedding", "value":"wedding", "imageName":"wedding.png"},
		  									{"displayName":"Engagement", "value":"engagement", "imageName":"engagement.png"},
		  									{"displayName":"Reception", "value":"reception", "imageName":"reception.png"},
		  									{"displayName":"Birthday", "value":"birthday", "imageName":"birthday.png"},
		  									{"displayName":"CradleCeremony", "value":"cradleCeremony", "imageName":"cradle.png"},
		  									{"displayName":"HomeEvents", "value":"homeEvents", "imageName":"home.png"},
		  									{"displayName":"OtherEvents", "value":"otherEvents", "imageName":"other.png"}
	  								 	 ];
	  	this.quoteDetails.budgetRange = [	
		  									{"displayName":"RS-50,000", "value":"50000"},
		  									{"displayName":"RS-1 Lakh", "value":"100000"},
		  									{"displayName":"RS-2 Lakhs", "value":"200000"},
		  									{"displayName":"RS-3 Lakhs", "value":"300000"},
		  									{"displayName":"RS-4 Lakhs", "value":"400000"},
		  									{"displayName":"RS-5 Lakhs", "value":"500000"}
	  									];
	  	this.quoteDetails.servicesList = [
	  									{"displayName":"Venues", "value":"venues", "imageName":"venue.png"},
	  									{"displayName":"Photo&Video", "value":"photoVideo", "imageName":"photo.png"},
	  									{"displayName":"Catering", "value":"catering", "imageName":"catering.png"},
	  									{"displayName":"Beauty&Health", "value":"beautyHealth", "imageName":"beauty.png"},
	  									{"displayName":"Decorator", "value":"decorator", "imageName":"decorator.png"}
	  								];
	  	this.quoteDetails.entertainmentItemsList = [
			  									{"displayName":"FacePainting", "value":"facePainting", "imageName":"face.png"},
			  									{"displayName":"Orchestra", "value":"orchestra", "imageName":"orchestra.png"},
			  									{"displayName":"EventEntertainers", "value":"eventEntertainers", "imageName":"entertainment.png"},
			  									{"displayName":"MagicShow", "value":"magicShow", "imageName":"magic.png"},
			  									{"displayName":"Mimicry", "value":"mimicry", "imageName":"mimicry.png"}
	  										 ];
	  }

	  private setEventType(eventType: string){
		this.quoteRequestModel.eventType = eventType;
	  }

	  private setBudget(budget: string){
		this.quoteRequestModel.totalBudget = budget;
	  }

	  private setServices(service: string){
		if(this.quoteRequestModel.services.indexOf(service) === -1){
			this.quoteRequestModel.services.push(service);
		}else{
			this.quoteRequestModel.services.splice(this.quoteRequestModel.services.indexOf(service), 1);
		}
	  }

	  private setEntertainmentItems(entertainmentItem: string){
		if(this.quoteRequestModel.entertainment.indexOf(entertainmentItem) === -1){
			this.quoteRequestModel.entertainment.push(entertainmentItem);
		}else{
			this.quoteRequestModel.entertainment.splice(this.quoteRequestModel.entertainment.indexOf(entertainmentItem), 1);
		}
	  }

	  private isEventPlannerNeeded(value: string){
		  this.quoteRequestModel.isEventPlannerNeeded = value;
	  }

	  private setCity(city: string){
		  this.quoteRequestModel.city = city;
	  }

	  private submitQuoteRequest(){
		  this.showSuccessMsg = true;
	  }
}