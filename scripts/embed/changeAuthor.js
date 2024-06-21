export function changehrefAuthorEmbed(c, opt){

    const authorHref = document.getElementById(`nameAuthorEmbed${opt.qnt}`);

    authorHref.href = c.target.value.toString();

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["author"]["url"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))
}

export function changeImageAuthorEmbed(c, opt){

    const image = document.getElementById(`imageAuthorEmbed${opt.qnt}`)

    if (c.target.value.length == 0){

        image.style.display = "none"

    } else {

        image.style.display = "block"

    }

    image.src = c.target.value.toString()

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["author"]["icon_url"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))
}

export function changeNameAuthorEmbed(c, opt){

    const nameAuthor = document.getElementById(`nameAuthorEmbed${opt.qnt}`)

    if (c.target.value.length < 1){
        nameAuthor.style.display = "none";
    } else {
        nameAuthor.style.display = "flex";
    }
    
    nameAuthor.innerText = c.target.value.toString()

    let embedObject = JSON.parse(localStorage.getItem("embedObject"))

    embedObject["author"]["name"] = c.target.value.toString()

    localStorage.setItem("embedObject", JSON.stringify(embedObject))

}