async function txtBeolvasas(fajl, elem) {
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;
    elem.style.whitespace = "pre-line";
};

fejvalaszt.addEventListener("change", function() {
    const fejezet = this.value;
    if (fejezet == "alaphelyzet") {
        szovegtartalom.textContent = "Kérem válasszon a fenti menüből!!!";
    }
    else if (fejezet == "section1") {
        txtBeolvasas("./src/contents/bev.txt", szovegtartalom)
    }
});