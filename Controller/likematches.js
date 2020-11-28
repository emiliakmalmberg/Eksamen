//Jeg går ind og bruger min Local Storage, forklaret i detaljer fra første eksempel med Dwight.
//Nuværende er der en funktionalitet der ikke fungerer optimalt her. Dette er evnen til at dislike fra mymatches siden, kan man kun fra matches siden..
//Dwight
    //Starter med at oprette min funktion, der bliver kaldt inde i matches.HTML
function set(){
    //Opretter en variabel da jeg skal hente brugeres information, så det senere kan gemmes i LS, gøres på linje 7.
var page_content = document.getElementById("match1").innerHTML;
localStorage.setItem("page_content", page_content );} 
    //Præcis det samme gøres her, hvor at man bare skal kunne slette brugeren igen fra MyMatches siden
function delte(){
var page_content = document.getElementById("match1").innerHTML;
localStorage.removeItem("page_content", page_content);}

//Creed  kode gentaget, men har omskrevet variablen, så den ikke henter Dwights informationer, men creeds
function settwo(){
var creed_content = document.getElementById("match3").innerHTML;
localStorage.setItem("creed_content", creed_content );} 
function deltetwo(){
var creed_content = document.getElementById("match3").innerHTML;
localStorage.removeItem("creed_content", creed_content);}