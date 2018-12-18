'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
var app = {
	list: [{
		id: 1,
		name: 'iphone X',
		price: 990,
		tax: 10,
		type: 1
	}, {
		id: 2,
		name: 'iphone XS',
		price: 3000,
		tax: 15,
		type: 2
	}]
};

var _ = new PriceForm('#formCalcProductPrice1');
var _2 = new PriceForm('#formCalcProductPrice2');

function PriceForm(target) {
	// properties
	this.$parent = $(target);
	this.$product = this.$parent.find('.product');
	this.$price = this.$parent.find('.price');
	this.$quantity = this.$parent.find('.quantity');
	this.$tax = this.$parent.find('.tax');
	this.$total = this.$parent.find('.total');
	this.$btn = this.$parent.find('.calcPriceBtn');
	this.$observes = [this.$product, this.$quantity];
	//method
	// listen the button
	this.doCalc = function () {
		var _self = this;
		this.$btn.on('click', function () {
			var total = 0;
			var type = _self.$product.val();
			var quantity = _self.$quantity.val();
			var tax = 0; // get from database.
			app.list.forEach(function (item) {
				item.type == type ? total = Math.round(quantity * item.price * (item.tax / 100 + 1)) : null;
			});
			console.log('hwhw');
			// render result
			_self.$total.val(total.toString());
		});
	};
	this.updateForm = function () {
		var _self = this;
		var type = this.$product.val();
		var price = 0;
		var tax = 0;
		app.list.forEach(function (item) {
			item.type == type ? (tax = item.tax, price = item.price) : null;
		});
		_self.$tax.val(tax.toString());
		_self.$price.val(price.toString());
		// re-calc
		_self.$btn.trigger('click');
	};
	this.onChange = function ($targets) {
		var _self = this;
		$targets.forEach(function ($target) {
			$target.on('change', function () {
				_self.updateForm();
				console.log('in onchange function');
				_self.$btn.trigger('click');
			});
		});
	};

	// listenning btn
	this.doCalc();
	this.onChange(this.$observes);
	// listenning the change
}
//# sourceMappingURL=main.js.map
