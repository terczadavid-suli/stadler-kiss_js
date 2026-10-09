// HEADER
const fejlec = document.createElement("header");
fejlec.id = "fejlec";
fejlec.className = "bg-primary text-white text-center p-5";

const cimcontainer = document.createElement("div");
cimcontainer.className = "container-fluid";
cimcontainer.id = "cimcontainer";

const cimsor = document.createElement("div");
cimsor.className = "row";
cimsor.id = "cimsor"; 

const cimoszlopok = document.createElement("div");
cimoszlopok.className = "col-12";
cimoszlopok.id = "cimoszlopok";

const focim = document.createElement("h1");
focim.textContent = "STADLER KISS motorvonat";

// Tartalom
const main = document.createElement("main");
const main_container = document.createElement("div");
main_container.className = "container";
const main_row = document.createElement("div");
main_row.className = "row";
const section1_col = document.createElement("div");
section1_col.className = "col-sm-12 col-md-6";

const section1 = document.createElement("section");
section1.id = "section1";
section1.value = "section1";
section1.textContent = "Bevezetés"

const section2 = document.createElement("section");
section2.id = "section2";
section2.value = "section2";
section2.textContent = "2"

const section3 = document.createElement("section");
section3.id = "section3";
section3.value = "section3";
section3.textContent = "3"

const section4 = document.createElement("section");
section4.id = "section4";
section4.value = "section4";
section4.textContent = "4"

const section5 = document.createElement("section");
section5.id = "section5";
section5.value = "section5";
section5.textContent = "5"

// fejezet választósdi
const alaphelyzet = document.createElement("option");
alaphelyzet.id = "alaphelyzet";
alaphelyzet.value = "alaphelyzet";
alaphelyzet.textContent = "Válasszon...";

const fejvalaszt = document.createElement("select");
fejvalaszt.id = "fejvalaszt";

// end
const szovegtartalom = document.createElement("p");
szovegtartalom.id = "szovegtartalom";
szovegtartalom.textContent = "Kérem válasszon a fenti menüből!!!"


fejlec.append(cimcontainer, cimsor, cimoszlopok, focim)
main.append(main_container, main_row, szovegtartalom)
document.body.append(fejlec, main, fejvalaszt)