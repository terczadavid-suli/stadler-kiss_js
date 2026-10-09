async function txtBeolvasas(fajl, elem) {
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;
    elem.style.whitespace = "pre-line";
};

function show_image(src, width, height, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

img_select.addEventListener("change", function() {
        const img = this.value;
        if (img = "img1") {
            show_image("./src/imgs/kiss_obb-cityjet.png", 500, 300, "KISS");
        }
        else if (img = "img2") {
            show_image("./src/imgs/kiss_obb-cityjet.png", 500, 300, "KISS");
        }
        else if (img = "img3") {
            show_image("./src/imgs/kiss_obb-cityjet.png", 500, 300, "KISS");
        }
        else if (img = "img4") {
            show_image("./src/imgs/kiss_obb-cityjet.png", 500, 300, "KISS");
        }
        else if (img = "img5") {
            show_image("./src/imgs/kiss_obb-cityjet.png", 500, 300, "KISS");
        }
    });     
    
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
        show_image("./src/imgs/kiss_obb-cityjet.png", 500, 300, "KISS");
        show_image("./src/imgs/kiss3.png", 500, 300, "KISS");
        show_image("./src/imgs/obb_railjet_kiss.png", 500, 300, "KISS");
        // document.body.appendChild(img_select);
    }
});