var slidesPE = ['./images/3dartist/pe/slides/1.png'
			, './images/3dartist/pe/slides/2.png'
			, './images/3dartist/pe/slides/3.png'
			, './images/3dartist/pe/slides/4.png'
			, './images/3dartist/pe/slides/5.png'
			, './images/3dartist/pe/slides/6.png'
			, './images/3dartist/pe/slides/7.png'
			, './images/3dartist/pe/slides/8.png'
			, './images/3dartist/pe/slides/9.png'
			, './images/3dartist/pe/slides/10.png'
			, './images/3dartist/pe/slides/11.png'
			];
			
var slidesPH = ['./images/3dartist/ph/slides/1.png'
			, './images/3dartist/ph/slides/2.png'
			, './images/3dartist/ph/slides/3.png'
			];			

var index = 0;

function onNextPE() {
	index++;
	if (index == 11) {
		index = 0;
	};
	
	document.getElementById("firstimgPE").src = slidesPE[index];
}

function onPrevPE() {
	index--;
	if (index == -1) {
		index = 10;
	};
	
	document.getElementById("firstimgPE").src = slidesPE[index];
}

function onNextPH() {
	index++;
	if (index == 3) {
		index = 0;
	};
	
	document.getElementById("firstimgPH").src = slidesPH[index];
}

function onPrevPH() {
	index--;
	if (index == -1) {
		index = 2;
	};
	
	document.getElementById("firstimgPH").src = slidesPH[index];
}