if ($(this).text().valueOf() == "The Hoot") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() >= 1 && currentdate.getDay() <= 4) {
			  		var today = new Date().getHours();
			  		console.log(today);
			  		if (today == 0 || today >= 20) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	if (currentdate.getDay() == 0) {
			  		var today = new Date().getHours();
			  		if (today >= 20) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 5) {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		if ((today == 1 && mins <= 45) || today == 0 || (today == 8 && mins >= 30)) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 6) {
			  		$(this).css("background-color", "red");
			  	}	  
			  }
			  else if ($(this).text().valueOf() == "Coffeehouse") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() >= 1 && currentdate.getDay() <= 4) {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		console.log(today);
			  		if (today == 0 || (today >= 20) || (today == 7 && mins >= 30)) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	if (currentdate.getDay() == 0) {
			  		var today = new Date().getHours();
			  		if (today >= 14) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 5) {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		console.log(today);
			  		if (today == 0 || (today >= 8 && today < 17) || (today == 7 && mins >= 30)) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 6) {
			  		var today = new Date().getHours();
			  		if (today >= 10 && today < 17) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	  
			  }
			  else if ($(this).text().valueOf() == "Fondren Library") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() >= 1 && currentdate.getDay() <= 4) {
			  		$(this).css("background-color", "green");
			  	}
			  	if (currentdate.getDay() == 0) {
			  		var today = new Date().getHours();
			  		if (today >= 12) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 5) {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		console.log(today);
			  		if (today < 22) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 6) {
			  		var today = new Date().getHours();
			  		if (today >= 9 && today < 18) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	  
			  }
			  else if ($(this).text().valueOf() == "RMC Student Center") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() >= 1 && currentdate.getDay() <= 5) {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		console.log(today);
			  		if (today <= 1 || (today >= 7)) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	if (currentdate.getDay() == 0) {
			  		var today = new Date().getHours();
			  		if (today >= 12) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	if (currentdate.getDay() == 6) {
			  		var today = new Date().getHours();
			  		if (today >= 9) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	  
			  }
			  else if ($(this).text().valueOf() == "Sammy's") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() == 0 ||  currentdate.getDay() == 6) {
			  		$(this).css("background-color", "red");
			  	}
			  	else {
			  		var today = new Date().getHours();
			  		console.log(today);
			  		if (today >= 11 && today < 14) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  }
			  else if ($(this).text().valueOf() == "Brochstein") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() == 0 ||  currentdate.getDay() == 6) {
			  		var today = new Date().getHours();
			  		if (today < 18 && today >= 9) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	else {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		console.log(today);
			  		if ((today >= 8 && today < 19) || (today == 7 && mins >= 30)) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  }
			  else if ($(this).text().valueOf() == "Recharge-U") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() == 0) {
			  		$(this).css("background-color", "red");
			  	}
			  	if (currentdate.getDay() >= 1 && currentdate.getDay() <= 4) {
			  		var today = new Date().getHours();
			  		if (today >= 8 && today < 22) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	if (currentdate.getDay() == 5) {
			  		var today = new Date().getHours();
			  		if (today >= 8 && today < 20) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 6) {
			  		var today = new Date().getHours();
			  		if (today >= 10 && today < 22) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  }
			  else if ($(this).text().valueOf() == "the Rec") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() == 0) {
			  		var today = new Date().getHours();
			  		if (today >= 10 && today < 22) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	if (currentdate.getDay() >= 1 && currentdate.getDay() <= 4) {
			  		var today = new Date().getHours();
			  		if (today >= 6 && today <= 23) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  	if (currentdate.getDay() == 5) {
			  		var today = new Date().getHours();
			  		if (today >= 6 && today < 22) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}	
			  	if (currentdate.getDay() == 6) {
			  		var today = new Date().getHours();
			  		if (today >= 8 && today < 22) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  }
			  else if ($(this).text().valueOf() == "Student Health Center") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() == 0 ||  currentdate.getDay() == 6) {
			  		$(this).css("background-color", "red");
			  	}
			  	else {
			  		var today = new Date().getHours();
			  		console.log(today);
			  		if (today >= 8 && today < 17) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  }
			  else if ($(this).text().valueOf() == "Cashier's Office") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() == 0 ||  currentdate.getDay() == 6) {
			  		$(this).css("background-color", "red");
			  	}
			  	else {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		console.log(today);
			  		if ((today >= 9 && today < 16) || (today == 8 && mins >= 30)) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  }
			  else if ($(this).text().valueOf() == "Registrar's Office") {
			  	var currentdate = new Date(); 
			  	if (currentdate.getDay() == 0 ||  currentdate.getDay() == 6) {
			  		$(this).css("background-color", "red");
			  	}
			  	else {
			  		var today = new Date().getHours();
			  		var mins = new Date().getMinutes();
			  		console.log(today);
			  		if ((today >= 9 && today < 16) || (today == 8 && mins >= 30)) {
			  			$(this).css("background-color", "green");
			  		} else {
			  			$(this).css("background-color", "red");
			  		}
			  	}
			  }