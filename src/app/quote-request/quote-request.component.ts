import { Component, Input } from '@angular/core';
import { QuoteRequestModel } from '../shared';

@Component({
  selector: 'quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})

export class QuoteRequestComponent {
	
	private quoteRequestModel: QuoteRequestModel = new QuoteRequestModel();
	private quoteDetails: any = {};
	private imagesBaseURL: string = "https://d19vuzhmciufvl.cloudfront.net/hyderabad/images/list-images/";
	 
	  constructor () {
	  	this.initializeQuoteDetails();
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
	  									{"displayName":"Photo&amp;Video", "value":"photoVideo", "imageName":"photo.png"},
	  									{"displayName":"Catering", "value":"catering", "imageName":"catering.png"},
	  									{"displayName":"Beauty&amp;Health", "value":"beautyHealth", "imageName":"beauty.png"},
	  									{"displayName":"Decorator", "value":"decorator", "imageName":"decorator.png"}
	  								];
	  	this.quoteDetails.entertainmentItemsList = [
			  									{"displayName":"Face&nbsp;Painting", "value":"facePainting", "imageName":"face.png"},
			  									{"displayName":"Orchestra", "value":"orchestra", "imageName":"orchestra.png"},
			  									{"displayName":"Event&nbsp;Entertainers", "value":"eventEntertainers", "imageName":"entertainment.png"},
			  									{"displayName":"Magic&nbsp;Show", "value":"magicShow", "imageName":"magic.png"},
			  									{"displayName":"Mimicry", "value":"mimicry", "imageName":"mimicry.png"}
	  										 ];
	  }
}