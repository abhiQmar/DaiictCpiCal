
var asd;
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
		overall += 3*ibfwtf;
		courses +=3;
		}
	if(syss != "" && !(isNaN(syss))){
		overall += 4.5*syss;
		courses +=4.5;
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
	overalls=((document.getElementById('old').value*60.5)+(document.getElementById('new').value*23.5))/84;
	overalls=Math.round(overalls * 100) / 100
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

