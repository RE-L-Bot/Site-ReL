import { range } from "./outhers";

export function constructMessageComponent(opt) {

    const langP = window.location.pathname.slice(1, 3)

    const messages = {
        br: {
            nameToAllSelectMenus: "Por favor, insira um nome para todos os selectMenus"
        },
        es: {
            nameToAllSelectMenus: "Por favor, ingrese un nombre para todos los selectMenus"
        },
        us: {
            nameToAllSelectMenus: "pls insert a name to all selectmenus"
        }
    }

    const component = JSON.parse(localStorage.getItem("componentObject"))

    for (const r of range(0, component.components[0].options.length)) {

        if (!component.components[0].options[r].label) {

            window.alert(messages[langP]["nameToAllSelectMenus"])

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

    embed["footer"]["text"] = "Powered by RE=L"

    if (
        !embed.title &&
        !embed.description &&
        !embed.author.name &&
        !embed.image.url &&
        !embed.thumbnail.url
    ) {

        const langP = window.location.pathname.slice(1, 3)

        const messages = {
            br: {
                emptyEmbed: "Eu não posso enviar uma embed Vazia"
            },
            es: {
                emptyEmbed: "No puedo enviar una embed vacía"
            },
            us: {
                emptyEmbed: "I can't send a empty embed"
            }
        }

        window.alert(messages[langP]["emptyEmbed"])

        return undefined

    }

    return embed

};