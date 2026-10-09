// HEADER
const cimcontainer = document.createElement("div");
cimcontainer.className = "container-fluid text-center p-5";
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
const main_container = document.createElement("div");
main_container.className = "container p-2";
const main_row = document.createElement("div");
main_row.className = "row";
const main_col = document.createElement("div");
main_col.className = "col-sm-12";

const section1 = document.createElement("option");
section1.id = "section1";
section1.value = "section1_v";
section1.textContent = "Bevezetés";

const section2 = document.createElement("option");
section2.id = "section2";
section2.value = "section2_v";
section2.textContent = "Neve";

const section3 = document.createElement("option");
section3.id = "section3";
section3.value = "section3_v";
section3.textContent = "Története";

const section4 = document.createElement("option");
section4.id = "section4";
section4.value = "section4_v";
section4.textContent = "Magyarországi története";

const section5 = document.createElement("option");
section5.id = "section5";
section5.value = "section5_v";
section5.textContent = "Képek";

// fejezet választósdi
const alaphelyzet = document.createElement("option");
alaphelyzet.id = "alaphelyzet";
alaphelyzet.value = "alaphelyzet_v";
alaphelyzet.textContent = "Válasszon...";

const fejvalaszt = document.createElement("select");
fejvalaszt.id = "fejvalaszt";

// end
const szovegtartalom = document.createElement("p");
szovegtartalom.id = "szovegtartalom";
szovegtartalom.textContent = "Kérem válasszon a fenti menüből!!!"

cimcontainer.append(cimsor, cimoszlopok, focim);
fejvalaszt.append(alaphelyzet, section1, section2, section3, section4, section5)
main_container.append(main_row, main_col, fejvalaszt, szovegtartalom)
document.body.append(cimcontainer, main_container)