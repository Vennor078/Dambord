var container = document.getElementById('container');

var letters = ['a','b','c','d','e','f','g','h'];

function dambord(){

    for( i = 1; i < 9; i++){
	    var row = document.createElement('div');
	    row.id = "Row_" + i;
	    container.appendChild(row);

	    for( j = 0; j < letters.length; j++){
		    var div = document.createElement('div');
		    div.innerHTML = "&nbsp;";
		    div.id = i + letters[j];
		    div.onclick = function(){
			    showId(this);
		    };
		    row.appendChild(div);
		}
	}
}

function showId(e){
	e.innerHTML = e.id;
}

dambord();

function text(){
	for( i = 0; i < letters.length; i++){
		var letter = document.createElement('div');
		letter.id = letters[i];
		letter.innerHTML = letters[i];
		letter.appendChild(letter);
	}
}

text();