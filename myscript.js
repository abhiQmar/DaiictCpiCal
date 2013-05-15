var st = "<center><b><font size=4>";
var str1="";  //For printing grades in TextBox
var str2="";  //For printing grades in TextBox
var asd;
var sub5credits;
var sub6credits;
var totalCredits;
var semCredits;
function initial(){
	clearFields();
	set('sub1',"Probability:");
	set('sub2',"ADC:");
	set('sub3',"Analog circuits:");
	set('sub4',"Environment:");
	set('sub5',"IBF:");
	set('sub6',"System Software:");
	set('sem',"<center><b><font size=5>4th Semester");
	var dis1 = document.getElementById('ibf').style;
	var dis2 = document.getElementById('sys').style;
	if(dis1.display =='none' || dis2.display=='none'){
		dis1.display='block';
		dis2.display='block';
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

	if(probability>10 || adcc>10 || analogc>10 || syss>10 || ibfwtf>10 || envi>10){
		alert ('Invalid grade entered!! Please enter a valid grade.');
		return;
	}
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
	if(envi != "" && !(isNaN(envi))){
		overall += 3*envi;
		courses +=3;
		}
	if(ibfwtf != "" && !(isNaN(ibfwtf))){
		overall += sub5credits*ibfwtf;
		courses +=sub5credits;
		str1 = setString('sub5',ibfwtf);
		}
	if(syss != "" && !(isNaN(syss))){
		overall += sub6credits*syss;
		courses +=sub6credits;
		str2 = setString('sub6',syss);
		}
	asd = overall/courses;
	asd = Math.round(asd * 100) / 100;
	document.getElementById('bak').value ="Your SPI is " + asd + setString('sub1', probability) + setString('sub2',adcc) + setString('sub3',analogc)+ setString('sub4', envi)+ str1 + str2 ;
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
	clearFields();
	set('sub1',"Algebra:");
	set('sub2',"Computer Organisation:");
	set('sub3',"Data Structures:");
	set('sub4',"Science,Tech,Society:");
	set('sub5',"Electromagnetic Theory:");
	set('sub6',"Signals and Systems:");
	set('sem',"<center><b><font size=5>3rd Semester");
	
	document.getElementById('ibf').style.display='block';
	document.getElementById('sys').style.display='block';
	
	sub5credits=4;
	sub6credits=4;
	totalCredits=16+20.5;
	semCredits=24;
}

function sem2(){
	clearFields();
	set('sub1',"Discrete Math:");
	set('sub2', "Digital Logic Design:");
	set('sub3',"OOP:");
	set('sub4',"Economics:");
	set('sub5',"");
	set('sub6',"Intro to communication:");
	set('sem',"<center><b><font size=5>2nd Semester");
	
	document.getElementById('ibf').style.display='none';
	document.getElementById('sys').style.display='block';
	
	totalCredits=16;
	semCredits=20.5;
}
function sem1(){
	clearFields();
	set('sub1',"Calculus and Complex Variables:");
	set('sub2',"Basic Electronic Circuits:");
	set('sub3',"Intro to Prog:");
	set('sub4',"Approaches to Indian Society:");
	set('sem',"<center><b><font size=5>1st Semester");
	set('sub5',"");
	set('sub6',"");
	
	document.getElementById('ibf').style.display='none';
	document.getElementById('sys').style.display='none';
	
	totalCredits=0;
	semCredits=16;
}
function clearFields(){
	clear('probab');
	clear('adc');
	clear('analog');
	clear('sys');
	clear('ibf');
	clear('environ');
	clear('new');
	clear('old');
	set('finally',"");
	set('printSpi',"");
	clear('bak');
	str1="";
	str2="";
}
function clear(y){
	document.getElementById(y).value="";
}
function set(m,n){
document.getElementById(m).innerHTML=st + n;
}
function setString(x,z){
	var one = document.getElementById(x).innerHTML;
	return ",\nGrade in " + one.substring(one.indexOf(':')+1,26) + z;
}