import { Component, Input } from '@angular/core';
import { QuoteRequestModel } from '../shared';

@Component({
  selector: 'quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})

export class QuoteRequestComponent {
	
	private quoteRequestModel: QuoteRequestModel = new QuoteRequestModel();
	 
	  constructor () {
	  }
}