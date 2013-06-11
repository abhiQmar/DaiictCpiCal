var st = "<center><b><font size=4>";
var asd;
var subCredits = new Array();
var totalCredits, semCredits,courses;

function calculations(){
	courses = 0;
	var overall = 0;
	var probability = document.getElementById('probab').value,
	adcc = document.getElementById('adc').value,
	analogc = document.getElementById('analog').value,
	syss = document.getElementById('sys').value,
	ibfwtf = document.getElementById('ibf').value,
	envi = document.getElementById('environ').value;

	if(probability>10 || adcc>10 || analogc>10 || syss>10 || ibfwtf>10 || envi>10){
		alert ('Invalid grade entered!! Please enter a valid grade.');
		return;
	}
	if(probability != "" && !(isNaN(probability))){
		overall += subCredits[1]*document.wtf.probab.value;
		courses += subCredits[1];
		}
	
	if(adcc != "" && !(isNaN(adcc))){
		overall += subCredits[2]*adcc;
		courses += subCredits[2];
		}
	
	if(analogc != "" && !(isNaN(analogc))){
		overall += subCredits[3]*analogc;
		courses += subCredits[3];
		}
	if(envi != "" && !(isNaN(envi))){
		overall += subCredits[4]*envi;
		courses += subCredits[4];
		}
	if(ibfwtf != "" && !(isNaN(ibfwtf))){
		overall += subCredits[5]*ibfwtf;
		courses +=subCredits[5];
		}
	if(syss != "" && !(isNaN(syss))){ 
		overall += subCredits[6]*syss;
		courses += subCredits[6];
		}
	asd = overall/courses;
	//alert (courses + "over="+ overall +" spi="+asd);
	asd = Math.round(asd * 100) / 100;
	document.getElementById('bak').value ="Your SPI is " + asd +",\nCredits earned this sem: "+overall+" out of "+courses*10+ setString('sub1', probability) + setString('sub2',adcc) + setString('sub3',analogc)+ setString('sub4', envi)+ setString('sub5',ibfwtf) + setString('sub6',syss);
	document.getElementById('new').value=asd;
	document.getElementById('printSpi').innerHTML="<b><font color=#00AA00 size=5>This Sem's SPI is " + asd;
}

var overalls=0;

function findcpi(){
	var checkSem4 = document.getElementById('sub4').innerHTML,checkSem3 = document.getElementById('sub3').innerHTML;
	
	// This condition is true for 6th, 7th and 8th Semesters
	if(checkSem3.substring(7,1)=="select"){
		if(courses!=undefined){
				if(document.getElementById('later').value!="" ){
				totalCredits = document.getElementById('later').value;
				semCredits=courses;
			}else{
				alert ('Please fill the last entry!!');
				return;
			}
		}else semCredits= prompt('Enter this Semester\'s Total Credits:');
	}
	// Check if it is 5th sem
	else if(checkSem4.substring(7,1)=="select")
		if(courses!=undefined)
			semCredits=courses;
		else  semCredits= prompt('Enter this Semester\'s Total Credits:');
	overalls=((document.getElementById('old').value*totalCredits)+(document.getElementById('new').value*semCredits)) / (totalCredits+semCredits);
	overalls=Math.round(overalls * 100) / 100;
	alert (overalls+"tto"+totalCredits+"sem"+courses);
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

function sem1(){
	defaultCredits();
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
function sem2(){
	defaultCredits();
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
function sem3(){
	defaultCredits();
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
	
	subCredits[5]=4;
	subCredits[6]=4;
	totalCredits=16+20.5;
	semCredits=24;
}
function initial(){
	clearFields();
	defaultCredits();
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
	subCredits[5]=3;
	subCredits[6]=4.5;
	totalCredits=16 + 20.5+ 24;
	semCredits=23.5;
}
function sem5(){
	clearFields();
	set('sub1',"DBMS:");
	set('sub2',"Computer Networks:");
	set('sub3',"EHD:");
	document.getElementById('sub4').innerHTML=sbox4 + y;
	document.getElementById('sub5').innerHTML=sbox5 + y;
	document.getElementById('sub6').innerHTML=sbox6 + y;
	set('sem',"<center><b><font size=5>5th Semester");
	subCredits[1]=4;
	subCredits[2]=4.5;
	subCredits[3]=4.5;
	subCredits[4]=0;
	subCredits[5]=0;
	subCredits[6]=0;
	totalCredits=16 + 20.5+ 24 + 23.5;
	document.getElementById('later').style.display='none';
}
function sem678(x){
	clearFields();
	document.getElementById('sub2').innerHTML=sbox2 + y;
	document.getElementById('sub3').innerHTML=sbox3 + y;
	document.getElementById('sub4').innerHTML=sbox4 + y;
	document.getElementById('sub5').innerHTML=sbox5 + y;
	document.getElementById('sub6').innerHTML=sbox6 + y;
	document.getElementById('ibf').style.display='block';
	document.getElementById('sys').style.display='block';
	document.getElementById('later').style.display='block';
	if(x==6){
		set('sub1',"SEN:");
		set('sem',"<center><b><font size=5>6th Semester");
		subCredits[1]=4;
		subCredits[2]=0;
	}else if(x==7){
		document.getElementById('sub1').innerHTML=sbox1 + y;
		set('sem',"<center><b><font size=5>7th Semester");
		subCredits[1]=0;
		subCredits[2]=0;
	}else if(x==8){
		set('sub1',"B Tech (ICT) Project - Part I:");
		set('sub2',"B Tech (ICT) Project Part - II:");
		set('sem',"<center><b><font size=5>8th Semester");
		subCredits[1]=3;
		subCredits[2]=12;
	}
	subCredits[3]=0;
	subCredits[4]=0;
	subCredits[5]=0;
	subCredits[6]=0;
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
	courses=undefined;
	for(var i=1;i<7;i++)
		subtext[i]="";
}

function defaultCredits(){
	subCredits[1]=4;
	subCredits[2]=4.5;
	subCredits[3]=4.5;
	subCredits[4]=3;
	subCredits[5]=3;
	subCredits[6]=4.5;
	document.getElementById('later').style.display='none';
}

var sbox1 ="<select class='sel' onchange=setCredits(1) id='selectbox1' >",
	sbox2 ="<select class='sel' onchange=setCredits(2) id='selectbox2' >",
	sbox3 ="<select class='sel' onchange=setCredits(3) id='selectbox3' >",
	sbox4 ="<select class='sel' onchange=setCredits(4) id='selectbox4' >",
	sbox5 ="<select class='sel' onchange=setCredits(5) id='selectbox5' >",
	sbox6 ="<select class='sel' onchange=setCredits(6) id='selectbox6' >",
	y = "<option>Select</option><option value='2183'>Advanced Digital Communication (Credits=3):</option><option value='2241'>Advanced Radio Frequency Engineering (Credits=4):</option><option value='2261'>Approaches to Science Fiction (Credits=3):</option><option value='2188'>Approaches to Semantic Web (Credits=3):</option><option value='2190'>Combinatorial Algorithms (Credits=3):</option><option value='2203'>Development Theory and Practices (Credits=3):</option><option value='2254'>Dynamics of Animation (Credits=4):</option><option value='2175'>Elements of Business Management (Credits=3):</option><option value='2220'>Games, Simulation and Modelling (Credits=4):</option><option value='2258'>International Management (Credits=3):</option><option value='2291'>Introduction to Biotechnology (Credits=3):</option><option value='2253'>Introduction to Graph Theory (Credits=3):</option><option value='2244'>Laboratory in VLSI (Credits=3):</option><option value='2260'>Languages in India and Language Mapping(Credits=3):</option><option value='2250'>Logic for Computer Science(Credits=3):</option><option value='2251'>Natural Computing (Credits=3):</option><option value='2248'>Network Protocols (Credits=4):</option><option value='2283'>North Indian Classical Music  (Credits=1):</option><option value='2242'>Optical Communication (Credits=3):</option><option value='2243'>Optical Information Processing (Credits=3):</option><option value='2255'>Optimization (Credits=3):</option><option value='2257'>Organisational Behaviour (Credits=3):</option><option value='2256'>Quantum Computers (Credits=3):</option><option value='2245'>Robotics Lab (Credits=3):</option><option value='2246'>Security Protocols (Credits=3):</option><option value='2247'>Sensor Network Devices (Credits=3):</option><option value='2240'>Speech Communication (Credits=3):</option><option value='2249'>Stochastic Simulation (Credits=3):</option><option value='2252'>System and Network Security  (Credits=3):</option><option value='2212'>Systems, Policies and Implications (Credits=3):</option><option value='2259'>The Proper Work of Reason: Intro. to the Culture of Philosophy (Credits=3):</option></select>";

var subtext= new Array();

function setCredits(no){
	var boxid = 'selectbox'+ no;
	var slctbox = document.getElementById(boxid);
	subtext[no] =  slctbox.options[slctbox.selectedIndex].text;
	var credit  =  subtext[no].substring(subtext[no].indexOf(")"),subtext[no].indexOf("=")+1);
	subCredits[no]=parseInt(credit);
}
function clear(y){
	document.getElementById(y).value="";
}
function set(m,n){
document.getElementById(m).innerHTML=st + n;
}
function setString(x,z){
	var one = document.getElementById(x).innerHTML;
	if(one.substring(7,1)=="center" && z!="" &&  one!="<center><b><font size=\"4\"></font></b></center>")
		return ",\nGrade in " + one.substring(one.indexOf(':')+1,26) + z;
	else if(one.substring(7,1)=="select" && z!="" &&subtext[parseInt(x.substring(4,3))]!="Select" && subtext[parseInt(x.substring(4,3))] ){
		return ",\nGrade in " + subtext[parseInt(x.substring(4,3))]  + z;}
	else return "" ;
}