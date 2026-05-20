let somma = 0;
let risposte_date =0;
function controlla1() {
    let valore = document.getElementById("risposta_1").value;
    let output = document.getElementById("output1");
    let btn = document.getElementById("btn1");
    if (valore == "1") {
       somma= somma+1;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "2") {
        somma= somma+2;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "3") {
      somma= somma+3;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "4") {
      somma= somma+4;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else {
        output.innerHTML = "Scrivi solo 1, 2, 3 o 4!";
    }
}
  function controlla2() {
    let valore = document.getElementById("risposta_2").value;
    let output = document.getElementById("output2");
    let btn = document.getElementById("btn2");
    if (valore == "1") {
       somma= somma+1;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "2") {
        somma= somma+2;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "3") {
      somma= somma+3;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "4") {
      somma= somma+4;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else {
        output.innerHTML = "Scrivi solo 1, 2, 3 o 4!";
    }
  }
  function controlla3() {
    let valore = document.getElementById("risposta_3").value;
    let output = document.getElementById("output3");
    let btn = document.getElementById("btn3");
    if (valore == "1") {
       somma= somma+1;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "2") {
        somma= somma+2;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "3") {
      somma= somma+3;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "4") {
      somma= somma+4;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else {
        output.innerHTML = "Scrivi solo 1, 2, 3 o 4!";
    }
  }
  function controlla4() {
    let valore = document.getElementById("risposta_4").value;
    let output = document.getElementById("output4");
    let btn = document.getElementById("btn4");
    if (valore == "1") {
       somma= somma+1;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "2") {
        somma= somma+2;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "3") {
      somma= somma+3;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else if (valore == "4") {
      somma= somma+4;
      output.innerHTML = "Risposta valida";
      btn.disabled = true;
      risposte_date = risposte_date+1;
    } 
    else {
        output.innerHTML = "Scrivi solo 1, 2, 3 o 4!";
    }
}
if(risposte_date==4){
  if(somma>=13){
    window.location.href = "cartella-risultato1/index.html";
  }
  else if(9<=somma<13){
    window.location.href = "cartella-risultato2/index.html";
  }
  else if(5<=somma<9){
    window.location.href = "cartella-risultato3/index.html";
  }
  else{
    window.location.href = "cartella-risultato4/index.html";
  }
}