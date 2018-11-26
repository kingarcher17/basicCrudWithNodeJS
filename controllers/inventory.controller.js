const Inventory = require('../models/inventory.model');

exports.home = function(req, res) {
	res.sendFile('home.html', { root: './views' });
}

exports.inventory_create = function(req, res) {
	let inventory = new Inventory({
		name: req.body.name,
		price: req.body.price
	});
	
	inventory.save(function(err) {
		if (err) {
			console.log("ERROR : " + err);
			return next(err);
		}
		res.sendFile('home.html', { root: './views' });
	});
}

exports.inventory_all = function(req, res) {
	Inventory.find(function(err, result) {
	    if (err) throw err;
	    res.send(result);
	});
}

exports.inventory_details = function(req, res) {
	Inventory.findById(req.params.id, 
	function (err, inventory) {
		if(err) return next(err);
		res.sendFile('home.html', { root: './views' });
	})
};

exports.inventory_update = function(req, res) {
	Inventory.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, inventory) {
		if (err) return next(err);
		res.sendFile('home.html', { root: './views' });
	});
}

exports.inventory_delete = function(req, res) {
	Inventory.findByIdAndRemove(req.params.id, function(err) {
		if (err) return next(err);
		res.sendFile('home.html', { root: './views' });
	})
}	