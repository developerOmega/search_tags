export default function SearchTag (dataValue, inputTags){
	this.publication_option = document.getElementById("contentTags");
	this.field = document.getElementById(inputTags);
	this.data = dataValue;
	this.newData = [];

	this.seachTags = function(options){
		if (this.field.value.match(/@[a-zA-Z0-9]+/)){
			var value = this.field.value.split("");
			value.shift();
			value = value.join("");

			for (let i = 0; i < this.data.length; i++){
				if (this.data[i].name.indexOf(value) > -1) {

					console.log("correcto");

					options[i].value = this.data[i].id;
					options[i].innerHTML = "<img src= '" +this.data[i].photo + "' > " +  "<div> <p>" + this.data[i].name + "</p> <p>" +  this.data[i].type + "</p></div>";

					this.publication_option.appendChild(options[i]);
				}else{

					options[i].value = "";
					options[i].innerHTML = "";
				}
			}
		}else{
			this.publication_option.innerHTML = "";
		}	
	}

	this.tags = function(){

		var options = new Array();
		var self = this;

		for (let i = 0; i < self.data.length; i++) {
			// options[i] = document.createElement('option');
			options[i] = document.createElement('div');


		}

		self.field.addEventListener('keyup',function(){
			self.seachTags(options);

		});

	}


}