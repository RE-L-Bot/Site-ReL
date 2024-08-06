export function constructMessageComponent(selectMenuOption) {

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

    for (const r in selectMenuOption) {

        if (!selectMenuOption[r]["value"]) {
            selectMenuOption[r]["value"] = `c${r}-thread`
        }

        if (!selectMenuOption[r].label) {

            window.alert(messages[langP]["nameToAllSelectMenus"])

            return undefined

        }

    };

    return {
        type: 1,
        components: [
            {
                type: 3,
                placeholder: "",
                min_values: 1,
                custom_id: "ticket_select",
                options: selectMenuOption
            }
        ]
    };

};

export function constructMessageEmbed(embedOption) {

    const embed = {
        title: embedOption.title,
        description: (embedOption.description[0]) ? embedOption.description[0] : "",
        author: {
            name: embedOption.authorName,
            icon_url: embedOption.authorImage,
            url: embedOption.authorUrl
        },
        thumbnail: {
            url: embedOption.thumbnailUrl
        },
        image: {
            url: embedOption.imageUrl
        },
        color: Number(embedOption.color.replace("#", "0x")),
        fields: embedOption.fields,
        url: embedOption.url,
        footer: {
            text: "Powered by RE=L",
            icon_url: "https://images-ext-1.discordapp.net/external/3LBc_lYPIjZbMNBSYtx0t-Tch2fMtZLoIcvzIfAVTM0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1018958083764002919/72e160dd9dc0d2952529c3388c81715d.webp?format=webp&width=473&height=473"
        }
    }

    if (
        embed.title.length < 1 &&
        embed.description.length < 1 &&
        embed.author.name.length < 1 &&
        embed.image.url.length < 1 &&
        embed.thumbnail.url.length < 1 &&
        embed.fields.length < 1
    ) {

        const langP = window.location.pathname.slice(1, 3)

        const messages = {
            br: {
                emptyEmbed: "Eu não posso enviar uma embed vazia"
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