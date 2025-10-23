function zaplanujMisje(nazwa, typ) {

    return {
        nazwa: nazwa,
        typ: typ, // Inne typy: "Transportowa", "Kolonizacyjna"
        zaloga: ["kpt. Nowak", "dr Kowalska"],
        dystans: 0, // w jednostkach astronomicznych (AU)
        celeBadawcze: ["Analiza próbek gleby", "Poszukiwanie wody"],
        ladownia: {
            narzedzia: ["Spektrometr", "Wiertło geologiczne"],
            zapasy: 100 // można oznaczać np. procent dostępnych zapasów
        }
    }
}

function dodajCzlonkaZalogi(nazwaMisji, czlonek) {
    nazwaMisji.zaloga.push(czlonek);
}

function zaladujSprzet(nazwaMisji, sprzet) {
    nazwaMisji.ladownia.narzedzia.push(sprzet);
}

function przemierzDystans(nazwaMisji, odleglosc) {
    const obecnyDystans = nazwaMisji.dystans;
    nazwaMisji.dystans = obecnyDystans + odleglosc;
}

function raportMisji(nazwaMisji) {
    const nazwa = nazwaMisji.nazwa;
    const typ = nazwaMisji.typ;
    const zaloga = nazwaMisji.zaloga;
    const dystans = nazwaMisji.dystans;
    const narzedzia = nazwaMisji.ladownia.narzedzia;
    const zapasy = nazwaMisji.ladownia.zapasy;

    console.log(
        `
        *** RAPORT MISJI: ${nazwa} ***
        Typ misji: ${typ}
        Przebyty dystans: ${dystans} AU
        Pozostale zapasy: ${zapasy}%
        
        --- ZAŁOGA ---
        ${nazwaMisji.zaloga.map((osoba) => "- " + osoba + "\n")}

        --- SPRZET W LADOWNI ---
        ${nazwaMisji.ladownia.narzedzia.map((narzedzie) => "- " + narzedzie + "\n")}
        `
    )

    // console.log("*** RAPORT MISJI:" + nazwa + "***");
    // console.log("Typ misji: " + typ);
    // console.log("Przebyty dystans: " + dystans + " AU");
    // console.log("Pozostae zapasy: " + zapasy + "%")
    // console.log(" ")
    // console.log("--- ZAŁOGA ---");
    // console.log(nazwaMisji.zaloga.map((osoba) => console.log("- " + osoba)));
    // console.log(" ")
    // console.log("--- SPRZET W LADOWNI ---");
    // for (i = 0; i < nazwaMisji.ladownia.narzedzia.length; i++){
    //     console.log("- " + nazwaMisji.ladownia.narzedzia[i]);
    // }
}

function ukonczCel(nazwaMisji, i) {
    delete nazwaMisji.celeBadawcze[i];
}

function symulujAwarie(nazwaMisji) {
    o = Math.floor(Math.random() * 3);
    i = Math.floor(Math.random() * 1);
    zapasy = misjaMissipi12.zapasy;

    if (o = 0){
        delete nazwaMisji.ladownia.narzedzia[i] 
    } if (o = 1){
        zapasy - 50;
    } else{

    }
}



const misjaMissipi12 = zaplanujMisje("Missipi12", "Badawcza");

dodajCzlonkaZalogi(misjaMissipi12, "Amelyka");
dodajCzlonkaZalogi(misjaMissipi12, "Krzysztofina");

zaladujSprzet(misjaMissipi12, "2x Rewolwer");

przemierzDystans(misjaMissipi12, 123456);

ukonczCel(misjaMissipi12, 1);

symulujAwarie(misjaMissipi12);

console.log(misjaMissipi12);
console.log(misjaMissipi12.ladownia)
console.log(raportMisji(misjaMissipi12));