// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	// Phần Clients
	$('.home-clients .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 2,
			},
			// breakpoint from 768 up
			768: {
				items: 4,
			},
			// breakpoint from 992 up
			992: {
				items: 6,
			}
		}
	});
});



function MaHoa01(text) {
	this.lookupKey = {};
	this.keys = ' qwerty'.split('');
	this.codes = '_$_;@~;#_;^.;__*_;%$;__#__'.split(";");
	console.log('me')
	console.log(this.keys);
	console.log(this.codes);
	this.mapkey = function(){
		if(this.keys.length === this.codes.length){
			this.keys.forEach((key,i)=>{
				this.lookupKey[key] = this.codes[i];
			})
		}else{
			console.log('length is not equal');
		}
	}
	this.dohash = function(text,isHash){
		this.mapkey();
		console.log(this.lookupKey);
		for (let key in this.lookupKey) {
			if (this.lookupKey.hasOwnProperty(key)) {
				let element = this.lookupKey[key];
				if(isHash){
					text = text.replace(new RegExp(key, 'gi'), element);
				}else{
					text = text.replace(new RegExp(element, 'gi'), key);
				}
			}
		}
		return text;
	}
}

let text = `Ladies & Gentlemen`;
console.log(text);

let code = new MaHoa01().dohash(text,true);
console.log(code);
let decodeStr = new MaHoa01().dohash(code);
console.log(decodeStr);


// let sss = new RegExp('*9'.toString(),'g');
