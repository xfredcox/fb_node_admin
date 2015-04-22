(function () {

    var db = function () {
	console.log(">>>> FIREBASE DB SHELL");

	var Firebase = require('firebase')
	this.ref = new Firebase(process.env.FIREBASE_BASE_URL)
	this._isAuthenticated = false;

	var that = this;
	this.auth = function () {
	    that.ref.authWithCustomToken(process.env.FIREBASE_TOKEN, function (error, result) {
		if (error) {
		    console.error("Failed to Login: " + error);
		} else {
		    console.log("Authenticated successfully with payload: " + result.auth);
		    //    that._isAuthenticated = true;
		}
	    })
	}

	this.pwd = function () {
	    return that.ref.toString();
	}


    }

    if (typeof exports !== 'undefined') {
	// Github = exports;
	module.exports = db;
    } else {
	window.db = db;
    }


}).call(this);
