export function changeImageFooterEmbed(c, opt) {

    const image = document.getElementById(`imageFooterEmbed${opt.qnt}`);

    if (c.target.value.length == 0) {

        image.style.display = "none";

    } else {

        image.style.display = "block";

    };

    image.src = c.target.value.toString();

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["footer"]["icon_url"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))

};

export function changeTextoFooterEmbed(c, opt) {

    const textFooter = document.getElementById(`textFooter${opt.qnt}`);

    const timestamp = document.getElementById(`timestamp${opt.qnt}`);

    const separador = document.getElementById(`separador${opt.qnt}`);

    if (c.target.value.length == 0) {

        separador.style.display = "none";

        return textFooter.innerText = "";

    };

    if (timestamp.textContent?.length != 0) {

        separador.style.display = "flex";

    };

    if (c.target.value.length < 1) {

        return textFooter.style.display = "none";

    };

    textFooter.style.display = "flex";

    textFooter.innerText = c.target.value.toString();
    
    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["footer"]["text"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))

};

export function changeDate(c, opt) {

    const textFooter = document.getElementById(`textFooter${opt.qnt}`);

    const timestamp = document.getElementById(`timestamp${opt.qnt}`);

    const separador = document.getElementById(`separador${opt.qnt}`);

    if (c.target.value.length == 0) {

        separador.style.display = "none";

        return textFooter.innerText = "";

    };

    if (timestamp.textContent?.length != 0) {

        separador.style.display = "flex";

    };

    if (c.target.value.length < 1) {

        return textFooter.style.display = "none";

    };

    timestamp.innerText = `${new Date(c.target.value).toLocaleString("pt-BR")}`;
    
    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["timestamp"] = new Date(c.target.value).toISOString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))

};
