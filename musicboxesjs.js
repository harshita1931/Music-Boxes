$(document).ready(function(){
	//variable declarations
	var cNote = document.getElementById('cAudio');
	var dNote = document.getElementById('dAudio');
	var eNote = document.getElementById('eAudio');
	var fNote = document.getElementById('fAudio');
	var gNote = document.getElementById('gAudio');
	var aNote = document.getElementById('aAudio');
	var bNote = document.getElementById('bAudio');

	//when #c is left-clicked
	$('#c').mousedown(function(){
		cNote.currentTime=0;	//playing the music from time=0
		cNote.play();			//playing the music
	});

	//when #d is left-clicked
	$('#d').mousedown(function(){
		dNote.currentTime=0;
		dNote.play();
	});

	//when #e is left-clicked
	$('#e').mousedown(function(){
    	eNote.currentTime = 0;
    	eNote.play();
	});

	//when #f is left-clicked
	$('#f').mousedown(function(){
    	fNote.currentTime = 0;
    	fNote.play();
	});

	//when #g is left-clicked
	$('#g').mousedown(function(){
    	gNote.currentTime = 0;
    	gNote.play();
	});

	//when #a is left-clicked
	$('#a').mousedown(function(){
    	aNote.currentTime = 0;
    	aNote.play();
	});

	//when #b is left-clicked
	$('#b').mousedown(function(){
    	bNote.currentTime = 0;
    	bNote.play();
	});

});