import dayjs from "dayjs";
import { usePathname } from "next/navigation";

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

        if (!selectMenuOption[r].label || !selectMenuOption[r].label == "\u200B") {

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

export function contructorTimestamp(timestamp) {
    const time = dayjs(timestamp)
    let langP = usePathname()
    if (langP) {
        langP = langP.split("/")[1]
        if (langP === "br") {
            return `${time.date()}/${time.month()}/${time.year()} ${time.hour()}:${time.minute()}`
        } else if (langP === "en") {
            return `${time.month()}/${time.date()}/${time.year()} ${time.hour()}:${time.minute()}`
        }
    }
}

function bytesToMb(bytes) {

    if (String(bytes).length >= 10) {
        return [((bytes / 1024 / 1000) / 1024).toPrecision(1), "Gb"]
    } else if (String(bytes).length >= 7) {
        return [(bytes / 1024 / 1000).toPrecision(3), "Mb"]
    } else if (String(bytes).length <= 6) {
        return [(bytes / 1024).toPrecision(5), "kb"]
    }


}

export function contructAttachments(attachments) {

    const attachmentsArray = []

    for (const a of attachments) {
        if (a.filename) {
            if (a.filename.includes(".png") || a.filename.includes(".jpeg") || a.filename.includes(".jpg") || a.filename.includes(".jpeg") || a.filename.includes(".gif")) {
                attachmentsArray.push(`<img style="border-radius:5px" height=250 width=500 src=${a.url} alt=${a.filename} />`)
            } else if (a.filename.includes(".mp3") || a.filename.includes(".ogg") || a.filename.includes(".flac") || a.filename.includes(".wav") || a.filename.includes(".m4a")) {
                attachmentsArray.push(`<discord-audio-attachment bytes="${Number(bytesToMb(a.size)[0])}" bytes-unit="${bytesToMb(a.size)[1]}" style="border-radius:5px" rel=${a.url} href=${a.url} name=${a.filename}></discord-audio-attachment>`)
            } else if (a.filename.includes(".mp4") || a.filename.includes(".webm") || a.filename.includes(".mov")) {
                attachmentsArray.push(`
                    <div class="discord-media-attachment-non-visual-media-item-container" style="width: 100%;height: 100%;max-height: 350px; max-width:350px; border-radius:5px;position:relative;">
                        <video style="width: 100%;height: 100%;max-height: 350px; max-width:350px; border-radius:5px;position:relative;" controls>
                            <source src=${a.url} type="video/mp4" />
                        </video>
                        <div class="discord-button-download-attachment-custom">
                            <a
                                class="discord-link-download-attachment"
                                aria-label="Download"
                                href="${a.url}"
                                rel="noreferrer noopener"
                                target="_blank"
                                role="button"
                                tabindex="0"
                            >
                                <svg
                                    class="discord-icon-download"
                                    aria-hidden="true"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    `)
            } else {
                attachmentsArray.push(`<discord-file-attachment bytes="${Number(bytesToMb(a.size)[0])}" bytes-unit="${bytesToMb(a.size)[1]}" name=${a.filename} rel=${a.url} href=${a.url}></discord-file-attachment>`)
            }
        }
    }

    return attachmentsArray.join(" ")
}

const typebuttons = {
    1: "primary",
    2: "secondary",
    3: "success",
    4: "destructive"
}

export function contructComponents(componentsArray) {

    const actionRows = []

    let buttonCount = 0

    let optionCount = 0

    let stringButton = '<discord-action-row>{last}</discord-action-row>'

    let stringSelectMenu = '<discord-string-select-menu placeholder="{placeholder}">{last}</discord-string-select-menu>'

    for (const index2 in componentsArray) {

        for (const index in componentsArray[Number(index2)]["components"]) {

            if (componentsArray[Number(index2)]["components"][Number(index)].type === 2) {

                stringButton = stringButton.replace("{last}", `<discord-button type="${typebuttons[componentsArray[Number(index2)]["components"][Number(index)].style]}">${componentsArray[Number(index2)]["components"][Number(index)].label}</discord-button>${(buttonCount + 1 < 5 ? "{last}" : "")}`)

                buttonCount++

                if (buttonCount == 5) {
                    actionRows.push(stringButton)
                    stringButton = '<discord-action-row>{last}</discord-action-row>'
                    buttonCount = 0
                }

            } else if (componentsArray[Number(index2)]["components"][Number(index)].type === 3) {

                stringSelectMenu = stringSelectMenu.replace("{placeholder}", componentsArray[Number(index2)]["components"][Number(index)].placeholder)

                for (const value of componentsArray[Number(index2)]["components"][Number(index)].options) {

                    optionCount++

                    stringSelectMenu = stringSelectMenu.replace("{last}", `<discord-string-select-menu-option label="${value.label}" description="${value.description}"></discord-string-select-menu-option>{last}`)

                }

                stringSelectMenu = stringSelectMenu.replace("{last}", "")

                actionRows.push(stringSelectMenu)

                stringSelectMenu = '<discord-string-select-menu placeholder="{placeholder}">{last}</discord-string-select-menu>'

            }

        }

    }

    if (buttonCount > 0) {
        stringButton = stringButton.replace("{last}", "")
        actionRows.push(stringButton)
    }

    return actionRows.join(" ")

}