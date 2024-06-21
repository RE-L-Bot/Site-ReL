import { range } from "./outhers";

export function constructMessageComponent(opt) {

    const component = JSON.parse(localStorage.getItem("componentObject"))

    for (const r of range(0, component.components[0].options.length)) {

        if (!component.components[0].options[r].label) {

            window.alert("pls insert a name to all selectmenus")

            return undefined

        }

        const v1 = (document.getElementsByClassName("selectChannelCategoria")[r].value) ?
            document.getElementsByClassName("selectChannelCategoria")[r].value
            : "thread";

        component.components[0].options[r]["value"] = `c${r}-${v1}`

    };

    return component;
};

export function constructMessageEmbed(opt) {

    const embed = JSON.parse(localStorage.getItem("embedObject"))

    if (
        !embed.title &&
        !embed.description &&
        !embed.author.name &&
        !embed.image.url &&
        !embed.thumbnail.url &&
        !embed.footer.text
    ) {

        window.alert("I can't send a empty embed")

        return undefined
    } else {
        return embed
    }

};