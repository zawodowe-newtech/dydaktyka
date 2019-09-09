document.addEventListener('DOMContentLoaded', function(){
	//console.log('DOM fully loaded and parsed');
	date = new Date();
	info();
})

function info(){
	
	let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
	let s = date.getSeconds(); // 0 - 59
	let d = date.getDay();
	
	//wyświetlamy czas
	let czas = (h < 10) ? "0" + h : h;
	czas += ":";
	czas += (m < 10) ? "0" + m : m;
	czas += ":";
	czas += (s < 10) ? "0" + s : s;
	document.querySelector("header #zegar").innerHTML=
		dzienTyg(d)+"<span> "+czas+"</span>";

	//wyświetlamy co robimy teraz
	let nrL = lekcja(d,h,m);
	let teraz;
	if(nrL<0) teraz = "MAMY WOLNE";
	else if (nrL==0) teraz = "PRZERWA";
	else teraz = "UCZYMY SIĘ";
	document.querySelector("header #teraz").innerHTML = teraz;
	
	//wyswietlay nazwe przedmotu
	let przedA = "";
	let przedB = "";
	if(teraz=="UCZYMY SIĘ"){
		przedA = przedmiot(nrL, d, "a");
		przedB = przedmiot(nrL, d, "b");
	}
	if(przedA=="") document.querySelector("header #lekcja-a").innerHTML = "";
	else document.querySelector("header #lekcja-a ").innerHTML = "1A <span>"+przedA+"</span>";
	if(przedB=="") document.querySelector("header #lekcja-b").innerHTML = "";
	else document.querySelector("header #lekcja-b").innerHTML = "1B <span>"+przedB+"</span>";;
	  
    setTimeout(info, 1000);
}

function dzienTyg(nr){
	switch(nr){
		case 0: return "NIEDZIELA";
		case 1: return "PONIEDZIAŁEK";
		case 2: return "WTOREK"; 
		case 3: return "ŚRODA"; 
		case 4: return "CZWARTEK";
		case 5: return "PIĄTEK"; 
		case 6: return "SOBOTA"; 
	}
}

//1...9 nr lekcji; 0 przerwa; -1 po lekcjach
function lekcja(dzien, godz, min){
	if(dzien==0 || dzien==6) return -1;
	if(godz<8 || (godz==14 && min>=50) || godz>=15) return -1;
		godz -= 8;
		let minuty = 60*godz + min;
		if(minuty<45) return  1;
		else if(minuty>=45 && minuty<50) return  0;
		else if(minuty>=50 && minuty<95) return  2;
		else if(minuty>=95 && minuty<100) return  0;
		else if(minuty>=100 && minuty<145) return  3;
		else if(minuty>=145 && minuty<150) return  0;
		else if(minuty>=150 && minuty<195) return  4;
		else if(minuty>=195 && minuty<200) return  0;
		else if(minuty>=200 && minuty<245) return  5;
		else if(minuty>=245 && minuty<265) return  0;
		else if(minuty>=265 && minuty<310) return  6;
		else if(minuty>=310 && minuty<315) return  0;
		else if(minuty>=315 && minuty<360) return  7;
		else if(minuty>=360 && minuty<365) return  0;
		else if(minuty>=365 && minuty<410) return  8;		
}

function przedmiot(nrLek, dzien, klasa){
	let kla = [
		"Język hiszpański", //poniedziałek
		"Język polski",
		"Język polski",
		"Język angielski",
		"Matematyka",
		"Religia",
		"E-sport",
		"E-sport", 
		"Filozofia", //wtorek
		"Podstawy informatyki",
		"Projektowanie i adminstrowanie bazami danych",
		"Podstawy programowania",
		"Projektowanie i tworzenie stron internetowych",
		"Język polski",
		"Historia",
		"Język angielski",
		"Geografia", //środa
		"Historia",
		"Chemia",
		"Informatyka",
		"Podstawy programowania",
		"Język angielski",
		"Matematyka",
		"E dla bezpieczeństwa",
		"W-F", //czwartek
		"W-F",
		"Bazy danych w praktyce",
		"Bazy danych w praktyce",
		"Projektowanie i tworzenie stron internetowych",
		"Projektowanie i tworzenie stron internetowych",
		"Podstawy programowania",
		"Tworzenie stron internetowych",
		"W-F", //piatek
		"Geografia",
		"Matematyka",
		"Język hiszpański",
		"Religia",
		"Zajęcia z wychowawcą",
		"Chemia",
		""		
	];
	let klb = [
		"Biologia", //poniedziałek
		"Matematyka",
		"Historia",
		"Język angielski",
		"Zajęcia z wychowawcą",
		"Podstawy przedsiębiorczości",
		"E-sport",
		"E-sport", 
		"E dla bezpieczeństwa", //wtorek
		"Podstawy informatyki",
		"Projektowanie i adminstrowanie bazami danych",
		"Podstawy programowania",
		"Projektowanie i tworzenie stron internetowych",
		"Chemia",
		"W-F",
		"Religia",
		"Bazy danych w praktyce",//środa
		"Tworzenie stron internetowych",
		"Informatyka",
		"Język angielski",
		"Historia",
		"WOS",
		"Podstawy programowania w praktyce",
		"Tworzenie stron internetowych",
		"Język hiszpański",//czwartek
		"Język polski",
		"Język polski",
		"Matematyka",
		"Religia",
		"WOK",
		"Język angielski",
		"Projektowanie i tworzenie stron internetowych",
		"Fizyka",//piątek
		"Język polski",
		"Geografia",
		"W-F",
		"W-F",
		"Matematyka"		
	];
	if(klasa=="a") return kla[(dzien-1)*8+nrLek-1];
	else return klb[(dzien-1)*8+nrLek-1];
	
}