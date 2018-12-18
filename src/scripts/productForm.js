

function PriceForm(target) {
	// properties
	this.$parent = $(target);
	this.$product = this.$parent.find(('.product'));
	this.$price = this.$parent.find(('.price'));
	this.$quantity = this.$parent.find(('.quantity'));
	this.$tax = this.$parent.find(('.tax'));
	this.$total = this.$parent.find(('.total'));
	this.$btn = this.$parent.find(('.calcPriceBtn'));
	this.$observes = [this.$product, this.$quantity];
	//method
	// listen the button
	this.doCalc = function () {
		let _self = this;
		this.$btn.on('click', function () {
			let total = 0;
			let type = _self.$product.val();
			let quantity = _self.$quantity.val();
			let tax = 0; // get from database.
			app.list.forEach(item => {
				(item.type == type) ? (total = Math.round(quantity * item.price * (item.tax / 100 + 1))) : null;
			});
			// render result
			_self.$total.val(total.toString());
		})
	};
	this.updateForm = function () {
		let _self = this;
		let type = this.$product.val();
		let price = 0;
		let tax = 0;
		app.list.forEach(item => {
			(item.type == type) ? (tax = item.tax, price = item.price) : null;
		})
		_self.$tax.val(tax.toString());
		_self.$price.val(price.toString());
		// re-calc
		_self.$btn.trigger('click');
	};
	this.onChange = function ($targets) {
		let _self = this;
		$targets.forEach(($target) => {
			$target.on('change', function () {
				_self.updateForm();
				_self.$btn.trigger('click');
			})
		})
	}



	// listenning btn
	this.doCalc();
	this.onChange(this.$observes);
	// listenning the change
}
