/**
 * Created with JetBrains WebStorm.
 * User: Sergey
 * Date: 06.07.13
 * Time: 0:17
 * To change this template use File | Settings | File Templates.
 */

Slider = function() {
	this.photoDir = 'img/photos/';
	this.sliderL = $('#sliderL');
	this.sliderR = $('#sliderR');
	this.card = $('#card');
	this.cardElm = $('#elm');
	this.setVars = function() {
		var cardVars  = $('#elm span');
		$('#card-name').html(cardVars[0].innerHTML);
		$('#card-text').html(cardVars[1].innerHTML);
		$('#card-pay').html(cardVars[2].innerHTML);
		$('#card-img').attr('src', this.photoDir+cardVars[3].innerHTML); //set Img
	}
	this.prev = function() {
		var rightElm = this.sliderR.find('a:first');
		this.sliderL.prepend(this.cardElm.find('a'));//move card to left
		this.cardElm.append(rightElm); // set Card
		this.setVars();
		this.sliderR.append(this.sliderL.find('a:last-child'));
	};
	this.next = function() {
		var leftElm = this.sliderL.find('a:first');
		this.sliderR.prepend(this.cardElm.find('a'));//move card to left
		this.cardElm.append(leftElm); // set Card
		this.setVars();
		this.sliderL.append(this.sliderR.find('a:last-child'));
	};

}
slider = new Slider;