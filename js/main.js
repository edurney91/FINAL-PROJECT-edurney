//****ALL PAGES**//



//****HOMPAGE***//
// Header:
// - video will automatically star playing
//- words appear when page loads?

// Header in Nav:
// - hover change color
// - on click take you to the appropriate page 

//- on click of arrow, you are taken down the page to the about me section


//****PORFOLIO***//
//-videos will appear 

//***Wedding video 1**//
//pause and play video

var vid = document.getElementById("myVideo"); 

function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 

//****FAQ***//
//-on click drop down answers will appear with toggle slide
//-answers will hide with read less
function toggleAnswer1() {
	$("#answer1").toggle();
};

$("#answer1").hide();
$("#question1").click(toggleAnswer1);

function toggleAnswer2() {
	$("#answer2").toggle();
};

$("#answer2").hide();
$("#question2").click(toggleAnswer2);

function toggleAnswer3() {
	$("#answer3").toggle();
};

$("#answer3").hide();
$("#question3").click(toggleAnswer3);

//****CONTACT***//
//-submit form 