async function txtBeolvasas(fajl, elem) {
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;
    elem.style.whitespace = "pre-line";
};

fejvalaszt.addEventListener("change", function() {
    const fejezet = this.value;
    if (fejezet === "alaphelyzet_v") {
        szovegtartalom.textContent = "Kérem válasszon a fenti menüből!!!";
    }
    else if (fejezet === "section1_v") {
        txtBeolvasas("./src/contents/bev.txt", szovegtartalom)
    }
    else if (fejezet === "section2_v") {
        txtBeolvasas("./src/contents/neve.txt", szovegtartalom)
    }
    else if (fejezet === "section3_v") {
        txtBeolvasas("./src/contents/tortenete.txt", szovegtartalom)
    }
    else if (fejezet === "section4_v") {
        txtBeolvasas("./src/contents/bev.txt", szovegtartalom)
    }
    else if (fejezet === "section5_v") {
        
    }
});