import { getChannelsGuild } from "./getters"
import { range } from "./outhers"

export function ChangeTipeCommand(e) {

    const oldBlue = document.getElementsByClassName("backGroundBlue")[0]

    oldBlue.className = oldBlue.className.split(" ")[0]

    oldBlue.style.color = "inherit"

    const elementClick = e.target

    elementClick.className = elementClick.className += " backGroundBlue"

    elementClick.style.color = "white"

}

export function changeDisplayNoneToAndResetAll(event, id, displayType) {

    const objInformations = document.getElementById(`InformationsCommand${id}`)
    const objExpand = document.getElementById(`expand${id}`)
    const objContent = document.getElementById(`content${id}`)

    for (const o1 of document.getElementsByClassName(`InformationsCommand`)) {
        if (o1 && o1.id != `InformationsCommand${id}`) {
            o1.style.display = ""
        }
    }

    for (const o1 of document.getElementsByClassName(`transitionShowCommands`)) {
        if (o1 && o1.id != `expand${id}`) {
            o1.className = "material-symbols-outlined transitionShowCommands expand"
        }
    }

    for (const o1 of document.getElementsByClassName(`contentCommands`)) {
        if (o1 && o1.id != `expand${id}`) {
            o1.style.borderBottomLeftRadius = "10px"
            o1.style.borderBottomRightRadius = "10px"
        }
    }

    if (objInformations.style.display == "") {
        objExpand.className = "material-symbols-outlined transitionShowCommands expand_more"
        objInformations.style.display = displayType
        objContent.style.borderBottomLeftRadius = "0px"
        objContent.style.borderBottomRightRadius = "0px"
    } else {
        objExpand.className = "material-symbols-outlined transitionShowCommands expand"
        objInformations.style.display = ""
        objContent.style.borderBottomLeftRadius = "10px"
        objContent.style.borderBottomRightRadius = "10px"
    }

}

export function changeDisplay(event, id, displayType) {

    const objInformations = document.getElementById(`expandEmbed${id}`)
    const objExpand = document.getElementById(`expand${id}`)
    const expandDiv = document.getElementById(`expandDiv${id}`)

    if (["", "none"].includes(objInformations.style.display)) {
        objExpand.className = "material-symbols-outlined transitionShowCommands expand_down"
        objInformations.style.display = displayType
        expandDiv.style.borderBottomLeftRadius = "0px"
        expandDiv.style.borderBottomRightRadius = "0px"
        return
    }

    objExpand.className = "material-symbols-outlined transitionShowCommands expand"
    objInformations.style.display = "none"
    expandDiv.style.borderBottomLeftRadius = "10px"
    expandDiv.style.borderBottomRightRadius = "10px"

}

export function changeDisplayField(event, id, displayType) {

    const objInformations = document.getElementById(`expandCampoInto${id}`)
    const objExpand = document.getElementById(`expandCampo${id}`)
    const expandDiv = document.getElementById(`expandDivCampo${id}`)

    if (["", "none"].includes(objInformations.style.display)) {
        objExpand.className = "material-symbols-outlined transitionShowCommands expand_down"
        objInformations.style.display = displayType
        expandDiv.style.borderBottomLeftRadius = "0px"
        expandDiv.style.borderBottomRightRadius = "0px"
        return
    }

    objExpand.className = "material-symbols-outlined transitionShowCommands expand"
    objInformations.style.display = "none"
    expandDiv.style.borderBottomLeftRadius = "10px"
    expandDiv.style.borderBottomRightRadius = "10px"

}

export function changeMode() {

    if (window.getComputedStyle(document.body).backgroundColor == "rgb(33, 33, 33)") {

        document.cookie = "ligthMode=true; path=/"

        for (const m of document.getElementsByClassName("iconChangeMode")) {

            m.innerHTML = "dark_mode"

        }

        document.body.style.backgroundColor = "white"

        document.body.style.color = "black"

    } else {

        document.cookie = "ligthMode=false; path=/"

        for (const m of document.getElementsByClassName("iconChangeMode")) {

            m.innerHTML = "light_mode"

        }

        document.body.style.backgroundColor = "#212121"

        document.body.style.color = "white"

    }

}

export function changeLang(i) {
    const langP = i.target.id
    const path = window.location.pathname.slice(4)
    window.location = `${window.location.origin}/${langP}/${path}`
}

export function ChangeV(e) {

    document.getElementById("selectNameCategories").style.display = "block"
    document.getElementById("selectDescriptionCategories").style.display = "block"
    document.getElementById("selectMenuEmoji").style.display = "block"
    document.getElementById("divCategories").style.display = "block"

    if (e.target.checked) {
        return document.getElementById("selectCategories").style.display = "none"
    }

    document.getElementById("selectCategories").style.display = "block"

}

export function SelectCategoriasNameChange(e) {

    const divp = document.getElementById("selectNameCategories")

    while (divp.firstChild) {

        divp.removeChild(divp.firstChild);

    }

    for (const r of range(0, parseInt(e.target.value))) {

        const div = document.createElement("div")

        const opt = document.createElement("textarea")

        opt.style.borderRadius = "5px"

        opt.style.width = "100px"

        opt.value = ""

        opt.placeholder = `Nome do selectmenu ${r + 1}`

        opt.maxLength = 100

        opt.className = `noresize`

        opt.id = `nameCategoria-${r}`

        opt.oninput = (c) => { SelectMenuTitleChange(c, r) }

        div.appendChild(opt)

        divp?.appendChild(div)

    }

}

export function SelectCategoriasDesctiptionChange(e) {

    const divp = document.getElementById("selectDescriptionCategories")

    while (divp.firstChild) {
        divp.removeChild(divp.firstChild);
    }

    for (const r of range(0, parseInt(e.target.value))) {

        const div = document.createElement("div")

        const opt = document.createElement("textarea")

        opt.style.borderRadius = "5px"

        opt.style.width = "100px"

        opt.maxLength = 100

        opt.value = ""

        opt.oninput = (c) => { SelectMenuDescriptionChange(c, r) }

        opt.placeholder = `Descrição do selectmenu ${r + 1} (Opcional)`

        opt.className = `noresize`

        opt.id = `descriptionCategoria-${r}`

        div.appendChild(opt)

        divp?.appendChild(div)

    }

}

export async function SelectMenuCategoriesEmojiChange(e) {

    const divp = document.getElementById("selectMenuEmoji")

    while (divp.firstChild) {
        divp.removeChild(divp.firstChild);
    }

    for (const r of range(0, parseInt(e.target.value))) {

        const div = document.createElement("div")

        const opt = document.createElement("textarea")

        opt.style.borderRadius = "5px"

        opt.style.width = "100px"

        opt.maxLength = 100

        opt.value = ""

        opt.placeholder = `Emoji do selectMenu ${r + 1} (Opcional)`

        opt.className = `noresize`

        opt.oninput = (c) => { SelectMenuEmojiChange(c, r) }

        opt.id = `selectMenuEmoji-${r}`

        div.appendChild(opt)

        divp?.appendChild(div)

    }

}

export async function SelectMenuAdd(e) {

    const divp = document.getElementById("selectMenuOptionsDc")

    while (divp.firstChild) {
        divp.removeChild(divp.firstChild);
    }

    for (const r of range(0, parseInt(e.target.value))) {

        const div = document.createElement("div")

        const div2 = document.createElement("div")

        const div3 = document.createElement("div")

        div.className = "selectMenuOptionDc"

        div2.className = `selectMenuOptionTitle`

        div2.id = `selectMenuTitle${r}`

        div3.className = `selectMenuOptionDescription`

        div3.id = `selectMenuDescription${r}`

        div.appendChild(div2)

        div.appendChild(div3)

        divp?.appendChild(div)

    }

}

let channels = null
let val = 0

export async function SelectCategoriasChange(e) {

    if (val < 1) {
        channels = await getChannelsGuild(window.location.pathname.split("/")[4])
        val++
    }

    SelectCategoriasNameChange(e)

    SelectCategoriasDesctiptionChange(e)

    SelectMenuCategoriesEmojiChange(e)

    SelectMenuAdd(e)

    const component = {
        type: 1,
        components: [{
            type: 3,
            custom_id: "ticket_select",
            options: [],
            placeholder: "",
            min_values: 1,
        }]
    }

    const divp = document.getElementById("selectCategories")

    const selectType = document.getElementsByClassName("checkTypeTicket")[0]

    while (divp.firstChild) {
        divp.removeChild(divp.firstChild);
    }

    for (const r of range(0, parseInt(e.target.value))) {

        const div = document.createElement("div")

        const form = document.createElement("form")

        const select = document.createElement("select")

        select.style.borderRadius = "5px"

        select.style.height = "46px"

        select.style.width = "100px"

        select.className = `selectChannelCategoria`

        const opt = document.createElement("option")

        component.components[0].options.push({})

        opt.disabled = true

        opt.value = ""

        opt.defaultSelected = true

        opt.textContent = `Selecione uma categoria ${r + 1}`

        select.appendChild(opt)

        for (const c of channels["response"]) {

            if (c.type == 4) {

                const option = document.createElement("option")

                option.value = c.id

                option.textContent = c.name.split(0, 19)

                select.appendChild(option)

            }

        }

        form.appendChild(select)

        div.appendChild(form)

        if (selectType.checked) divp.style.display == "none"
        else {

            divp.style.display = "block"

            document.getElementById("selectNameCategories").style.display = "block"

            document.getElementById("selectDescriptionCategories").style.display = "block"

            document.getElementById("selectMenuEmoji").style.display = "block"

            document.getElementById("divCategories").style.display = "block"

            document.getElementById("selectCategories").style.display = "block"

            document.getElementById("selectCategories").style.display = "block"

            if (parseInt(e.target.value) > 3) divp.style.display = "block"

        }

        divp?.appendChild(div)

    }

    localStorage.setItem("componentObject", JSON.stringify(component))

}

function SelectMenuTitleChange(c, r) {

    const titleSlectMenu = document.getElementById(`selectMenuTitle${r}`)

    titleSlectMenu.innerText = c.target.value.toString();

    let componentObject = JSON.parse(localStorage.getItem("componentObject"));

    componentObject["components"][0]["options"][r]["label"] = c.target.value.toString()

    localStorage.setItem("componentObject", JSON.stringify(componentObject))

}

function SelectMenuEmojiChange(c, r) {

    let componentObject = JSON.parse(localStorage.getItem("componentObject"))

    componentObject["components"][0]["options"][r]["emoji"] = resolvePartialEmoji(c.target.value.toString())

    localStorage.setItem("componentObject", JSON.stringify(componentObject))

}

function SelectMenuDescriptionChange(c, r) {

    const titleSlectMenu = document.getElementById(`selectMenuDescription${r}`)

    titleSlectMenu.innerText = c.target.value.toString();

    let componentObject = JSON.parse(localStorage.getItem("componentObject"))

    componentObject["components"][0]["options"][r]["description"] = c.target.value.toString()

    localStorage.setItem("componentObject", JSON.stringify(componentObject))

}

export function ChangeEnabled(e, r) {

    const backGround = document.getElementById(`toogleOff-${r}`)

    const boll = document.getElementById(`bollToogleOff-${r}`)

    const label = document.getElementById("labelSelectSender")

    if (e.target.checked) {

        try {

            label.style.borderBottomLeftRadius = "0px"
            label.style.borderBottomRightRadius = "0px"

        } catch { }

        backGround.className = "toogleOn transitionToogle";

        return boll.className = "bollToogleOn transitionToogle";
    }

    try {

        label.style.borderBottomLeftRadius = "20px"

        label.style.borderBottomRightRadius = "20px"

    } catch { }

    backGround.className = "toogleOff transitionToogle";

    boll.className = "bollToogleOff transitionToogle";

}

export function enableDisableMessageSendInChannelNoPerm() {

    const divMessage = document.getElementById("messageNoPermChannel")

    if (divMessage.className == "Disabled") {
        return divMessage.className = ""
    }

    divMessage.className = "Disabled"

}

export function ChangeEnabledNobackground(e, r) {

    const backGround = document.getElementById(`toogleOff-${r}`)

    const boll = document.getElementById(`bollToogleOff-${r}`)

    if (e.target.checked) {

        backGround.className = "toogleOn transitionToogle";

        return boll.className = "bollToogleOn transitionToogle";
    }

    backGround.className = "toogleOff transitionToogle";

    boll.className = "bollToogleOff transitionToogle";

}

export function SeeTypeSend(e) {

    const messageEmbed = document.getElementById("AuthorMessage")
    const senderName = document.getElementById("SenderName")
    const divInfosWeb = document.getElementById("divInfosWeb")

    if (e.target.checked) {

        messageEmbed.author = "webhook"

        messageEmbed.avatar = "https://cdn.discordapp.com/embed/avatars/0.png"

        messageEmbed.verified = false

        senderName.innerText = "WebHook"

        return divInfosWeb.style.display = "block"

    }

    messageEmbed.author = "RE=L"

    messageEmbed.avatar = "https://images-ext-1.discordapp.net/external/3LBc_lYPIjZbMNBSYtx0t-Tch2fMtZLoIcvzIfAVTM0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1018958083764002919/72e160dd9dc0d2952529c3388c81715d.webp?format=webp&width=473&height=473"

    messageEmbed.verified = true

    senderName.innerText = "Bot"

    divInfosWeb.style.display = "none"

}

export function SeeTypeTicket(e) {

    const typeTicketName = document.getElementById("TypeTicket")

    if (e.target.checked) {
        return typeTicketName.innerText = "Topico"
    }

    typeTicketName.innerText = "Categoria"

}

export function showDialogueBox(e, id) {

    const modal = document.getElementById(id)

    modal.style.position = "fixed"

    modal.style.top = "50%"

    modal.style.left = "50%"

    modal.style.borderRadius = "10px"

    modal.style.transform = "translate(-50%, -50%)"

    modal.showModal()

    return modal

}

export function changeWebName(c) {

    const messageEmbed = document.getElementById("AuthorMessage");

    messageEmbed.author = c.target.value.toString();

}

export function changeWebImg(c) {

    const messageEmbed = document.getElementById("AuthorMessage");

    messageEmbed.avatar = c.target.value.toString();

}

function resolvePartialEmoji(emoji) {
    if (!emoji) return null;
    if (typeof emoji === 'string') return /^\d{17,19}$/.test(emoji) ? { id: emoji } : parseEmoji(emoji);
    const { id, name, animated } = emoji;
    if (!id && !name) return null;
    return { id, name, animated: Boolean(animated) };
}

function parseEmoji(text) {
    if (text.includes('%')) text = decodeURIComponent(text);
    if (!text.includes(':')) return { animated: false, name: text, id: undefined };
    const match = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
    return match && { animated: Boolean(match[1]), name: match[2], id: match[3] };
}