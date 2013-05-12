
var asd;
var sub5credits;
var sub6credits;
var totalCredits;
var semCredits;
function initial(){
	document.getElementById('sub1').innerHTML="<center><b><font size=4>Probability:";
	document.getElementById('sub2').innerHTML="<center><b><font size=4>ADC:";
	document.getElementById('sub3').innerHTML="<center><b><font size=4>Analog circuits:";
	document.getElementById('sub4').innerHTML="<center><b><font size=4>Environment:";
	document.getElementById('sub5').innerHTML="<center><b><font size=4>IBF:";
	document.getElementById('sub6').innerHTML="<center><b><font size=4>System Software:";
	document.getElementById('sem').innerHTML="<center><b><font size=5>4th Semester";
	if(document.getElementById('ibf').style.display=='none'){
		document.getElementById('ibf').style.display='block';
		document.getElementById('sys').style.display='block';
		}
	sub5credits=3;
	sub6credits=4.5;
	totalCredits=16 + 20.5+ 24;
	semCredits=23.5;
}
function calculations(){
	var courses = 0;
	var overall = 0;
	var probability = document.getElementById('probab').value;
	var adcc = document.getElementById('adc').value;
	var analogc = document.getElementById('analog').value;
	var syss = document.getElementById('sys').value;
	var ibfwtf = document.getElementById('ibf').value;
	var envi = document.getElementById('environ').value;
	if(probability != "" && !(isNaN(probability))){
		overall += 4*document.wtf.probab.value;
		courses +=4;
		}
	
	if(adcc != "" && !(isNaN(adcc))){
		overall += 4.5*adcc;
		courses +=4.5;
		}
	
	if(analogc != "" && !(isNaN(analogc))){
		overall += 4.5*analogc;
		courses +=4.5;
		}
	if(ibfwtf != "" && !(isNaN(ibfwtf))){
		overall += sub5credits*ibfwtf;
		courses +=sub5credits;
		}
	if(syss != "" && !(isNaN(syss))){
		overall += sub6credits*syss;
		courses +=sub6credits;
		}
	if(envi != "" && !(isNaN(envi))){
		overall += 3*envi;
		courses +=3;
		}
	asd = overall/courses;
	asd = Math.round(asd * 100) / 100;
	document.getElementById('bak').value ="Your SPI is " + asd + ",\nGrade in Probability:" + probability + ",\nGrade in ADC:" + adcc + ",\nGrade in Analog:" + analogc+ ",\nGrade in IBF:" + ibfwtf ;
	document.getElementById('new').value=asd;
	document.getElementById('printSpi').innerHTML="<b><font color=#00AA00 size=5>This Sem's SPI is " + asd;
	}
var overalls=0;
function findcpi(){
	overalls=((document.getElementById('old').value*totalCredits)+(document.getElementById('new').value*semCredits)) / (totalCredits+semCredits);
	overalls=Math.round(overalls * 100) / 100;
	if(overalls>7.5)
	document.getElementById('finally').innerHTML="<b><font color=red size=5>Congratulations!! your CPI is "+ overalls;
	else
	document.getElementById('finally').innerHTML="<b><font color=red size=5>Your CPI is "+ overalls;
}

function fileSave(){
	var text = document.getElementById("bak").value;
	var file = new Blob([text],{type: 'text/plain'});
	if(text!= ""){
	var link = document.createElement("a");
	link.href = window.webkitURL.createObjectURL(file);
	link.download = "asd";
	link.click();
	}
	else alert("Please enter text to save.");
}
function fileSave1(){
	if(overalls){
	var text = "You CPI is " + overalls;
	var file = new Blob([text],{type: 'text/plain'});
	var link1 = document.createElement("a");
	link1.href = window.webkitURL.createObjectURL(file);
	link1.download = "finalCpi";
	link1.click();
	}
	else alert("CPI not calculated yet.");
}

function sem3(){
	document.getElementById('sub1').innerHTML="<center><b><font size=4>Algebra:";
	document.getElementById('sub2').innerHTML="<center><b><font size=4>Computer Org:";
	document.getElementById('sub3').innerHTML="<center><b><font size=4>data:";
	document.getElementById('sub4').innerHTML="<center><b><font size=4>STS:";
	document.getElementById('sub5').innerHTML="<center><b><font size=4>EMT:";
	document.getElementById('sub6').innerHTML="<center><b><font size=4>SAS:";
	document.getElementById('sem').innerHTML="<center><b><font size=5>3rd Semester";
	
	document.getElementById('ibf').style.display='block';
	document.getElementById('sys').style.display='block';
	
	sub5credits=4;
	sub6credits=4;
	totalCredits=16+20.5;
	semCredits=24;
}

function sem2(){
	document.getElementById('sub1').innerHTML="<center><b><font size=4>Discrete Math:";
	document.getElementById('sub2').innerHTML="<center><b><font size=4>Digital Logic Design";
	document.getElementById('sub3').innerHTML="<center><b><font size=4>OOP:";
	document.getElementById('sub4').innerHTML="<center><b><font size=4>Economics:";
	document.getElementById('sub5').innerHTML="";
	document.getElementById('sub6').innerHTML="<center><b><font size=4>Intro to communication:";
	document.getElementById('sem').innerHTML="<center><b><font size=5>2nd Semester";
	
	document.getElementById('ibf').style.display='none';
	document.getElementById('sys').style.display='block';
	
	totalCredits=16;
	semCredits=20.5;
}
function sem1(){
	document.getElementById('sub1').innerHTML="<center><b><font size=4>Calculas and complex:";
	document.getElementById('sub2').innerHTML="<center><b><font size=4>BEC:";
	document.getElementById('sub3').innerHTML="<center><b><font size=4>Intro to Prog	:";
	document.getElementById('sub4').innerHTML="<center><b><font size=4>Approaches to Indian Society:";
	document.getElementById('sem').innerHTML="<center><b><font size=5>1st Semester";
	document.getElementById('sub5').innerHTML="";
	document.getElementById('sub6').innerHTML="";
	
	document.getElementById('ibf').style.display='none';
	document.getElementById('sys').style.display='none';
	
	totalCredits=0;
	semCredits=16;
}
