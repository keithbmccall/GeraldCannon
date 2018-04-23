function openpage(){
	document.getElementById('static').id='staticgone';
	
}

function launchmenu(){
	$('.nav').toggleClass('navopen');

};

// home page





var s=0;
function indexslideshow(){
var i=0;
var x = document.getElementsByClassName('slide slidein');
	while (i < x.length){
		x[i].style.display ='none';
		i++;
		
	}
	s++;
	if (s > x.length){
		s=1;
	}
	
		x[s-1].style.display='block';
		setTimeout(indexslideshow,5200);

}
indexslideshow();




// slideshow modal
function launchmodal(){
	document.getElementById('lightboxbackground').style.display = "block";
};
function closemodal(){
	document.getElementById('lightboxbackground').style.display = "none";
}


var b=1;
slideshow(b);

function slideshowcontrol(n){
	slideshow(b+=n)
}
function currentslide(n){
	slideshow(b=n)
}
function slideshow(n){
	var i;
	var y = document.getElementsByClassName('galleryslide');

	if (n>y.length) {
		b = 1;
	}
	if (n<1) {
		b = y.length;
	}
	for (i=0;i<y.length;i++){
		y[i].style.display='none';
	}
	y[b-1].style.display='block';
}


// validator on contact page

function validate(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('e-mail').value;
	var message = document.getElementById('message').value;
	if (name == '' || email == '' || message ==''){
		alert('all fields must be filled out')
	}
	else {
		window.location.href = "./thanks.html";

	}
}

function start(){
	window.location.href = "pages/geraldcannon.html";
}


