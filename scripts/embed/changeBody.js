import myMD from "../myMD";

export function changeCorEmbed(c, opt) {

    const color = document.getElementById(`embedColor${opt.qnt}`)

    const colorPerson = document.getElementById("SelectColorPerson")

    color.style.backgroundColor = `${(c.target.value)}`

    colorPerson.style.backgroundColor = `${(c.target.value)}`

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["color"] = Number(c.target.value.replace("#","0x"))

    localStorage.setItem("embedObject", JSON.stringify(embedObject))

}

export function changeCorEmbedClick(cor, opt) {

    const color = document.getElementById(`embedColor${opt.qnt}`)

    const colorPerson = document.getElementById("SelectColorPerson")

    color.style.backgroundColor = `${cor}`

    colorPerson.style.background = "none"

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["color"] = Number(cor.replace("#","0x"))

    localStorage.setItem("embedObject", JSON.stringify(embedObject))
}

export function changeDescriptionEmbed(c, opt) {

    const description = document.getElementById(`descriptionEmbed${opt.qnt}`);

    const complete = myMD(c)

    if (c.target.value.length < 1) {
        description.style.display = "none";
    } else {
        description.style.display = "flex";
    };

    description.innerText = complete

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["description"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))

}

export function changeImageEmbed(c, opt) {

    const image = document.getElementById(`imageEmbed${opt.qnt}`)

    if (c.target.value.length == 0) {
        image.style.display = "none"
    } else {
        image.style.display = "block"
    }

    image.src = c.target.value.toString()

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["image"]["url"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))
}

export function changeImageThumbnailEmbed(c, opt) {

    const image = document.getElementById(`thumbnailEmbed${opt.qnt}`)

    if (c.target.value.length == 0) {

        image.style.display = "none"

    } else {

        image.style.display = "block"

    }

    image.src = c.target.value.toString()

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["thumbnail"]["url"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))
}

export function changeTitleEmbed(c, opt) {

    const titulo = document.getElementById(`titleEmbed${opt.qnt}`);

    if (c.target.value.length < 1) {

        titulo.style.display = "none";

    } else {

        titulo.style.display = "flex";

    }

    titulo.innerText = c.target.value.toString();

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["title"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))
}