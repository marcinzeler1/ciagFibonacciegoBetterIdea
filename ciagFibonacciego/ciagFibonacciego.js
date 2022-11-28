console.log("zaczynamy!");

//const a = 0;
//console.log(a);
// const b = 1;
//console.log(b);
const podajLiczbe = prompt("podaj liczbę");
 
 
 
function ciagFibonacciego() {
    let enty = 0;
    let b = 1;

    if (podajLiczbe == 0) {
        enty = 0;
        document.getElementById("enty").innerHTML = enty
        //console.log(enty);
    } else if (podajLiczbe == 1) {
        enty = 1;
        document.getElementById("enty").innerHTML = enty
        //console.log(enty);
    } else {
        for(let i=0; i<podajLiczbe; i++) {  
                    enty = b + enty; //1
                    //console.log(enty);
                    document.getElementById("enty").innerHTML = enty
                    b = enty - b;    //0
                    //console.log(b);
        }
    }
}
ciagFibonacciego();