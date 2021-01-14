var user="";
var password="";
var confirmedPassword="";
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = time+' - '+date;
var display=[];
var firstIntro=["EEEE I390xf13B7 I40004_BL1_2",
"TE : 102609", "BT : "+dateTime, "<br>", "Start load M8 SMP code! ", 
"CPU clock is 792MHz", "Aml log : DDR0 - init pass with", 
"<br>", "DDR check pass! ", "Load M8 SMP code finished", "<br>",
"Boot From SPI", "ucl decompress...pass", "0x12345678", "Boot from internal device SPI", "<br>", "Portfolio Viewer-318", "<span style='color:cornsilk;'>PROGRAMMED BY:FELIX LEFEBVRE</span>", "<br>", "<br>", "<br>",
"<span style='color:LightCoral;'>C:\\FATAL ERROR:</span>UNABLE TO FIND ROOT USER",
"<span style='color:LightCoral;'>C:\\FATAL ERROR:</span>UNABLE TO FIND ROOT USER",
"<span style='color:LightCoral;'>C:\\FATAL ERROR:</span>UNABLE TO FIND ROOT USER", "<br>", "<br>",  
"\> press <span style='color:MediumSeaGreen;'>X</span> to run sys318.exe", "<dd>", "(boot graphical environment <span style='color:MediumSeaGreen;'>[EASY MODE]</span>)", "<br>",
"\> press <span style='color:cornsilk;'>Y</span> to run setup.exe", "<dd>", "(boot DOS environement <span style='color:cornsilk;'>[HARD MODE]</span>)"];

var setupText=["INITAL BOOT SET-UP", "<br>", "<span style='color:cornsilk;'>CREATE A NEW USER</span>", "USERNAME:"];

var intro=["<br>", "<br>", 
"#**██████╗**██████╗*██████╗*████████╗███████╗*██████╗*██╗*****██╗*██████╗*", 
"#**██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║*****██║██╔═══██╗", 
"#**██████╔╝██║***██║██████╔╝***██║***█████╗**██║***██║██║*****██║██║***██║", 
"#**██╔═══╝*██║***██║██╔══██╗***██║***██╔══╝**██║***██║██║*****██║██║***██║", 
"#**██║*****╚██████╔╝██║**██║***██║***██║*****╚██████╔╝███████╗██║╚██████╔╝", 
"#**╚═╝******╚═════╝*╚═╝**╚═╝***╚═╝***╚═╝******╚═════╝*╚══════╝╚═╝*╚═════╝*", 
"#*************************************************************************", 
"#**██╗***██╗██╗███████╗██╗****██╗███████╗██████╗******██████╗**██╗*█████╗*", 
"#**██║***██║██║██╔════╝██║****██║██╔════╝██╔══██╗*****╚════██╗███║██╔══██╗", 
"#**██║***██║██║█████╗**██║*█╗*██║█████╗**██████╔╝█████╗█████╔╝╚██║╚█████╔╝", 
"#**╚██╗*██╔╝██║██╔══╝**██║███╗██║██╔══╝**██╔══██╗╚════╝╚═══██╗*██║██╔══██╗", 
"#***╚████╔╝*██║███████╗╚███╔███╔╝███████╗██║**██║*****██████╔╝*██║╚█████╔╝", 
"#****╚═══╝**╚═╝╚══════╝*╚══╝╚══╝*╚══════╝╚═╝**╚═╝*****╚═════╝**╚═╝*╚════╝*", 
"#************************************************************************", 


  "<br>", "PROGRAMMED BY: FELIX LEFEBVRE", "<br>","type 'h' or 'help' to get commands list."];

var rootLS="<span style='color:cornsilk;'>mycat.png &nbsp; cv.pdf </span> <br> <span style='color:lightblue;'> games </span> &nbsp;<span style='color:lightblue;'> visual-art </span> <br> <span style='color:lightblue;'>web </span>";
var webLS="<span style='color:cornsilk;'>maquette.html &nbsp; guidetv.html</span>";
var vArtLS="<span style='color:cornsilk;'>myroom.jpg &nbsp; peep.png</span>";
var gamesLS="<span style='color:lightblue;'>unity  </span> &nbsp;<span style='color:lightblue;'>flash</span> &nbsp;<span style='color:lightblue;'>conception</span>";
var unityLS="<span style='color:cornsilk;'>unity.play</span> &nbsp; <span style='color:cornsilk;'>demo.mp4</span>";
var flashLS="<span style='color:cornsilk;'>flash.fla</span> &nbsp; <span style='color:cornsilk;'>demo.mp4</span>";
var conceptionLS="<span style='color:cornsilk;'>video.mp4</span>";
var liveLS=rootLS;
var compteur=0;
var playThe=1;
var lengthIntro=intro.length;
var h1=document.getElementById("demo");
var div=document.getElementById("animator")
var dir="@unix:-$ &#160;"
var root="root@unix:-$ &#160;";
var typing;
var erasedTyping;
var protectTyping=true;
var state="boot";
var preventRepeat=false;
var accountCreated=false;


window.onload = function log(){
    console.log("online");
    document.addEventListener("keydown", boot);
	
	
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
if(isFirefox || isSafari || isOpera || isIE || isEdge){
	alert("Website under-construction \n \nPlease use Google Chrome browser for a better experience.");
}
	
    }

    function boot(){
        if(event.keyCode==66){
            document.removeEventListener("keydown", boot);
            var monVideo=document.getElementById("demoPlayer");
            monVideo.pause();
            var demoText=document.getElementById("videoDemo");
            demoText.classList.add("hidden");
            var bootSound = new Audio("etc/sound/boot.mp3");
            bootSound.play();
            h1.addEventListener("webkitAnimationend", loopIntro);  // Code for Chrome, Safari and Opera
            h1.addEventListener("animationend", loopIntro);        // Standard syntax
            hideAll();
            introManager();
        }else if(event.keyCode==67){skipIntro();
        }else if(event.keyCode==68){player();}
        }

    function skipIntro(){
            document.removeEventListener("keydown", boot);
            hideAll();
            state="demo";
            demoSetup();
    }

    function player(){
        var demoBox=document.getElementById("theDemo");
        demoBox.classList.remove("hidden");  
    }

    function hideAll(){
        var box=document.getElementById("boot");
        box.classList.add("hidden");
        var skip=document.getElementById("skip");
        skip.classList.add("hidden");
        var skipTitle=document.getElementById("skipTitle");
        skipTitle.classList.add("hidden");
        var demoBox=document.getElementById("videoDemo");
        demoBox.classList.add("hidden");
    }

function keyboard(){
    console.log("STROKE");
    switch(event.keyCode || event.key){
        case 65:typeKey("a");break;
        case 66:typeKey("b");break;
        case 67:typeKey("c");break;
        case 68:typeKey("d");break;
        case 69:typeKey("e");break;
        case 70:typeKey("f");break;
        case 71:typeKey("g");break;
        case 72:typeKey("h");break;
        case 73:typeKey("i");break;
        case 74:typeKey("j");break;
        case 75:typeKey("k");break;
        case 76:typeKey("l");break;
        case 77:typeKey("m");break;
        case 78:typeKey("n");break;
        case 79:typeKey("o");break;
        case 80:typeKey("p");break;
        case 81:typeKey("q");break;
        case 82:typeKey("r");break;
        case 83:typeKey("s");break;
        case 84:typeKey("t");break;
        case 85:typeKey("u");break;
        case 86:typeKey("v");break;
        case 87:typeKey("w");break;
        case 88:typeKey("x");break;
        case 89:typeKey("y");break;
        case 90:typeKey("z");break;
        case 48:typeKey("0");break;
        case 49:typeKey("1");break;
        case 50:typeKey("2");break;
        case 51:typeKey("3");break;
        case 52:typeKey("4");break;
        case 53:typeKey("5");break;
        case 54:typeKey("6");break;
        case 55:typeKey("7");break;
        case 56:typeKey("8");break;
        case 57:typeKey("9");break;
        case 189:typeKey("-");break;
        case 187:typeKey("=");break;
        case 191:typeKey("/");break;
        case 107:typeKey("+");break;
        case 188:typeKey(",");break;
        case 190:typeKey(".");break;
        case 106:typeKey("*");break;
        case 111:typeKey("/");break;
        case 109:typeKey("-");break;
        case 32:typeKey("&nbsp;");break;
        case 8:backspace();break; //backspace
        case 13:send();break; //enter
       // case 38:upArrow();break; //upArrow
     }
   
}



// Fonction qui typewrite la premiere ligne (Repeated by loopIntro)
// Puis loop l'affichage pour tout monter
function introManager() {
    document.removeEventListener("keydown", keyboard);
    div.classList.toggle("typewriter");
    void div.offsetWidth
    div.classList.toggle("coucou");
    //var sound=new Audio("etc/sound/Line.mp3")
    //sound.play();

    // FIRSTBOOT LOOP
    if(state=="boot"){
        h1.innerHTML=firstIntro[compteur];
        if (compteur>0){
            display.unshift(firstIntro[compteur-1]);
            if (display.length>12){
               display.pop();
            }
            for(var x=0;x<display.length;x++){ 
                var p=document.getElementById(x);
                p.innerHTML=display[x]; 
            }
        }
    }

    // SETUP LOOP
    else if(state=="setup"){
        console.log("SETUP");
        h1.innerHTML=setupText[compteur];
        if (compteur>0){
            display.unshift(setupText[compteur-1]);
            if (display.length>=12){
               display.pop();
            }
            for(var x=0;x<display.length;x++){ 
                var p=document.getElementById(x);
                p.innerHTML=display[x]; 
            }
        }
    }

    // INTRO LOOP
    else if(state=="intro"){
        protectTyping=false;
        console.log("INTRO");
    h1.innerHTML=intro[compteur];

    if (compteur>0){
        display.unshift(intro[compteur-1]);
        if (display.length>=12){
           display.pop();
        }
        for(var x=0;x<display.length;x++){ 
            var p=document.getElementById(x);
            p.innerHTML=display[x]; 
        }
    }
    console.log("COMPTEUR"+compteur)
    console.log("LENGTHINTRO"+lengthIntro);
    if (compteur==0){
        var textArt=document.getElementById("consoleBox");
        textArt.classList.add("art");
    }

    if (compteur==19){
        var textArt=document.getElementById("consoleBox");
        textArt.classList.remove("art");
        clear();
    }
   
    if (compteur==21){
        clear();
    }    div.classList.toggle("typewriter");
    void div.offsetWidth
    div.classList.toggle("coucou");
}

}

function loopIntro() {
    if(state=="boot" && compteur<firstIntro.length-1){
        console.log("loop "+state);
        div.classList.toggle("typewriter");
        div.classList.toggle("coucou");
        compteur++;
        introManager(); 
        if(compteur==firstIntro.length-1){
            console.log("GO TO CONFIG");
            var box=document.getElementById("skip");
            box.classList.add("hidden");
            div.classList.toggle("typewriter");
            div.classList.toggle("coucou");
            configuration();
        }
    }else if(state=="setup" && compteur<setupText.length-1){
        console.log("setup "+state);
        console.log("compteur"+compteur);
        console.log(setupText.length);
        div.classList.toggle("typewriter");
        div.classList.toggle("coucou");
        compteur++;
        introManager();
        if(compteur==setupText.length-1){
            createUser();
        }
    }else if(state=="intro" && compteur<lengthIntro){
        console.log("intro "+state);
        div.classList.toggle("typewriter");
        div.classList.toggle("coucou");
        compteur++;
        introManager(); 
        if(compteur==lengthIntro){
            document.addEventListener("keydown", keyboard);
            typing=user+dir;
            h1.innerHTML=user+dir;
        }
    }
}

function configuration(){
    document.addEventListener("keydown", go);
    function go(){
        if(event.keyCode==89){
            //run
            state="setup";
            document.removeEventListener("keydown", go);
            reboot();
           
        }else if(event.keyCode==88){
            //reboot
            state="demo";
            document.removeEventListener("keydown", go);
            demoSetup();

        }
    }
     
}

function demoSetup(){
    if(state=="demo"){
        typing="";
        h1.innerHTML=typing;
        clear();
        document.getElementById("name").classList.toggle("hidden");
        run("theDemo");
        document.getElementById("reboot").classList.remove("hidden");
        document.getElementById("skip").classList.add("hidden");
        return;
    }
}

function createUser(){
    document.addEventListener("keydown", keyboard);
    typing="USERNAME:"
    h1.innerHTML=typing;
}

function createPassword(){
    document.addEventListener("keydown", keyboard);
    typing="PASSWORD:"
    h1.innerHTML=typing;
}

function confirmPassword(){
    if(password==confirmedPassword){
        accountCreated=true;
        state="intro";
        typing="<br> <br> ROOT ACCOUNT CREATED <br>";
        updateDisplay();
        reboot();
    }else {
        password="";
        confirmedPassword="";
        typing="<br> ERROR PASSWORD DOES NOT MATCH <br> <span style='color:cornsilk;'>CREATE A PASSWORD </span><br>";
        updateDisplay();
        createPassword();
    }
}


function reboot(){
    typing="REBOOTING";
    updateDisplay();
    clear();
    compteur=0;
    introManager();
}

function send(){
    protectTyping=true;
    if(accountCreated==false){
    var sound=new Audio("etc/sound/blue8.mp3");
    sound.play();
    if(user==""){
        var getUsername=typing.split(':')[1];
        user=getUsername;
        if(user==""){
            createUser();
            return;
        }
        typing="USERNAME:"+user+"<br> <br> <span style='color:cornsilk;'>CREATE A PASSWORD</span>";
        updateDisplay();
        createPassword();
        return;
    }
    else if(user!="" && password==""){
        var getPassword=typing.split(':')[1];
        password=getPassword;
        if(password==""){
            createPassword();
            return;
        } 
        if (password==user){
            password="";
            typing="ERROR PASSWORD CAN'T == USERNAME <br> <br> <span style='color:cornsilk;'>CREATE A PASSWORD </span><br>";
            updateDisplay();
            createPassword();
            return;
        } else{ 
        typing="PASSWORD:"+password+"<br> <br> <span style='color:cornsilk;'>CONFIRM PASSWORD</span>";
        updateDisplay();
        createPassword();
        return;
        }
    }else if(user!="" && password!=""){
        var getConfirmedPassword=typing.split(':')[1];
        confirmedPassword=getConfirmedPassword;
        if(confirmedPassword==""){
            createPassword();
            return;
        }
        typing="PASSWORD:"+confirmedPassword;
        updateDisplay();
        confirmPassword();
        return;
        }
    }

    var sound=new Audio("etc/sound/blue8.mp3");
    sound.play();
    var command=typing;
    display.unshift(command);
    if (display.length>=12){
       display.pop();
    }
    for(var x=0;x<display.length;x++){ 
        var p=document.getElementById(x);
        p.innerHTML=display[x]; 
    }
    typing=user+dir;
    h1.innerHTML=typing;
    traitement(command);
}

//Fonction qui update l'affichage sans typewriter
function updateDisplay(){
    var command=typing.split("<br>");
    for(var y=0;y<command.length;y++){
        display.unshift(command[y]);
        if (display.length>=12){
            display.pop();
         }
    }


    for(var x=0;x<display.length;x++){ 
        var p=document.getElementById(x);
        p.innerHTML=display[x]; 
    }
    typing=user+dir;
    h1.innerHTML=typing;
}

function clear(space) {
    display=[];
    for(var x=0;x<=12;x++){ 
        var p=document.getElementById(x);
        p.innerHTML="";
    }
    if (space==true){ 
        typing=user+dir;
    }
}

function backspace(){
    if(typing.slice(-2)=="p;"){
        erasedTyping=typing.substring(0, typing.length -5);
        h1.innerHTML=erasedTyping;
        typing=erasedTyping;
        var sound=new Audio("etc/sound/blue9.mp3");
        sound.play();
    }
    if(typing.slice(-2)!="0;" && typing.slice(-2)!="E:" && typing.slice(-2)!="D:"){
        erasedTyping=typing.substring(0, typing.length -1);
        h1.innerHTML=erasedTyping;
        typing=erasedTyping;
        var sound=new Audio("etc/sound/blue9.mp3");
        sound.play();
    }
}

function typeKey(k){
    typing+=k
    playThe++
    switch(playThe){
        case 1:var sound=new Audio("etc/sound/blue1.mp3");break;
        case 2:var sound=new Audio("etc/sound/blue2.mp3");break;
        case 3:var sound=new Audio("etc/sound/blue3.mp3");break;
        case 4:var sound=new Audio("etc/sound/blue4.mp3");break;
        case 5:var sound=new Audio("etc/sound/blue5.mp3");break;
        case 6:var sound=new Audio("etc/sound/blue6.mp3");break;
        case 7:var sound=new Audio("etc/sound/blue7.mp3");playThe=0;break;
    }
    switch(k){
        case "&nbsp;":var sound=new Audio("etc/sound/blue8.mp3");break;
    }
    sound.play();
    h1.innerHTML=typing;
}

function traitement(info){
    if(info==user+dir+"h" || info==user+dir+"help"){
        typing="<br> <b><span style='color:cornsilk;'>help</span></b> <br> &thinsp; ls <br> &thinsp; cd<br> &thinsp; run"
        updateDisplay();
    }else if(info==user+dir+"ls"){
        typing=liveLS;
        updateDisplay();
    }
    // Redirection de directory cd ..
    else if(info==user+dir+"cd&nbsp;.."){
        if(dir=="@unix:-$ &#160;"){
        }else if(dir=="@unix:-/web $ &#160;" || dir=="@unix:-/visual-art $ &#160;" || dir=="@unix:-/games $ &#160;"){
            dir="@unix:-$ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=rootLS;
        }else if(dir=="@unix:-/games/unity $ &#160;" || dir=="@unix:-/games/flash $ &#160;" || dir=="@unix:-/games/conception $ &#160;"){
            dir="@unix:-/games $ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=gamesLS;
        }
    }
    //Tutorial de cd
    else if(info==user+dir+"cd"){
        typing="Please specify destination path.. <br> <br>"
        updateDisplay();
    }
    // Redirection de directory cd desktop
    else if(info==user+dir+"cd&nbsp;web"){ 
            if(liveLS==rootLS){
            dir="@unix:-/web $ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=webLS;
        }else{ typing="Uknown command. type 'h' or 'help' for assistance."; updateDisplay();}
    }else if(info==user+dir+"cd&nbsp;visual-art"){ 
        if(liveLS==rootLS){
            dir="@unix:-/visual-art $ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=vArtLS;
        }else{ typing="Uknown command. type 'h' or 'help' for assistance."; updateDisplay();}
    }else if(info==user+dir+"cd&nbsp;games"){ 
        if(liveLS==rootLS){
            dir="@unix:-/games $ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=gamesLS;
        }else{ typing="Uknown command. type 'h' or 'help' for assistance."; updateDisplay();}
    }else if(info==user+dir+"cd&nbsp;unity"){
        if(liveLS==gamesLS){
            dir="@unix:-/games/unity $ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=unityLS;
        }else{ typing="Uknown command. type 'h' or 'help' for assistance."; updateDisplay();}
    }else if(info==user+dir+"cd&nbsp;flash"){
        if(liveLS==gamesLS){
            dir="@unix:-/games/flash $ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=flashLS;
        }else{ typing="Uknown command. type 'h' or 'help' for assistance."; updateDisplay();}
    }else if(info==user+dir+"cd&nbsp;conception"){
        if(liveLS==gamesLS){
            dir="@unix:-/games/conception $ &#160;";
            h1.innerHTML=user+dir;
            typing=user+dir;
            liveLS=conceptionLS;
        }else{ typing="Uknown command. type 'h' or 'help' for assistance."; updateDisplay();}
    }else if(info==user+dir+"run&nbsp;mycat.png"){ 
        if(liveLS==rootLS){run("theCat");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;cv.pdf"){ 
        if(liveLS==rootLS){run("theCV");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;maquette.html"){ 
        if(liveLS==webLS){window.open("http://etudiant-tim.cstj.qc.ca/1375687/agrotourisme/#g=1&p=accueil");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;guidetv.html"){ 
        if(liveLS==webLS){window.open("http://etudiant-tim.cstj.qc.ca/1375687/GuideTV/");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;myroom.jpg"){ 
        if(liveLS==vArtLS){run("theRoom");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;peep.png"){ 
        if(liveLS==vArtLS){run("thePeep");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;unity.play"){ 
        if(liveLS==unityLS){run("theUnity");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;demo.mp4"){
        if(liveLS==unityLS){
            run("theVideoUnity");
        }else if(liveLS==flashLS){
            run("theVideoFlash");
        }else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;flash.fla"){ 
        if(liveLS==flashLS){window.open("http://etudiant-tim.cstj.qc.ca/1375687/Christmas/");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"run&nbsp;video.mp4"){ 
        if(liveLS==conceptionLS){run("theVideo");}else{
            typing="Uknown command. type 'h' or 'help' for assistance.";
            updateDisplay();
        }
    }else if(info==user+dir+"reboot"){ 
        state="intro";
        var boxes=document.getElementsByClassName("demoreel")
        for(var i=0;i<boxes.length;i++){
            boxes[i].classList.add("hidden");
        }
        reboot();
    }
    else{
        typing="Unknown command. type 'h' or 'help' for assistance.";
        updateDisplay();
    }
}

function run(theClass){
    updatezdex(theClass);
    var box=document.getElementsByClassName(theClass);
    box[0].classList.remove("hidden");
}
