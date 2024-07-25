import { showDialogueBox } from "./changes"
import RequestApi from "./ManagerRequest"

export async function saveConfigGeneral() {

    const modal = showDialogueBox("", "savemodal")

    const idGuild = window.location.pathname.split("/")[4]

    const divChannels = document.getElementById("channelsAddUseCommand")

    const channels = []

    for (const c of divChannels.children) {
        channels.push(c.children[0].id.split("-")[1])
    }

    let channels2 = 0

    if (sessionStorage.getItem("channelsAddUseCommand") && sessionStorage.getItem("channelsAddUseCommand") != "false") {

        for (const c of JSON.parse(sessionStorage.getItem("channelsAddUseCommand"))) {

            if (channels.includes(c)) {
                channels2++
            } else {
                channels2--
            }

        }

    }

    if (document.getElementById("selecidioma").value !== sessionStorage.getItem("GuildLang"))
        await new RequestApi()
            .setApiEndPoint("thisAPI")
            .setEndPoint("upLanguage")
            .setHeaders({
                guild_id: idGuild,
                lang: document.getElementById("selecidioma").value
            })
            .request()
            .then(async (data) => {
                if (data.status == 200)
                    sessionStorage.setItem("GuildLang", document.getElementById("selecidioma").value)
            })

    if (channels.length !== channels2)
        await new RequestApi()
            .setApiEndPoint("thisAPI")
            .setEndPoint("upChannelPermUse")
            .setHeaders({
                guild_id: idGuild,
                channels: (channels.length == 0) ? "false" : JSON.stringify(channels)
            })
            .request()
            .then(async (data) => {
                if (data.status == 200)
                    sessionStorage.setItem("channelsAddUseCommand", (channels.length == 0) ? "false" : JSON.stringify(channels))
            })

    if (document.getElementsByClassName("checkMessageNoPerm")[0].checked && document.getElementById("messageSendNoPerm").value !== sessionStorage.getItem("messageSendNoPerm")) {

        await new RequestApi()
            .setApiEndPoint("thisAPI")
            .setEndPoint("upMessageChannelNoPerm")
            .setHeaders({
                guild_id: idGuild,
                message: document.getElementById("messageSendNoPerm").value
            })
            .request()
            .then(async (data) => {
                if (data.status == 200)
                    sessionStorage.setItem("messageSendNoPerm", document.getElementById("messageSendNoPerm").value)
            });

    }

    if (document.getElementsByClassName("checkMessageNoPerm")[0].checked && document.getElementById("messageSendNoPerm").value == "" || !document.getElementsByClassName("checkMessageNoPerm")[0].checked) {
        await new RequestApi()
            .setApiEndPoint("thisAPI")
            .setEndPoint("upMessageChannelNoPerm")
            .setHeaders({
                guild_id: idGuild,
                message: ""
            })
            .request()
            .then(async (data) => {
                if (data.status == 200)
                    sessionStorage.setItem("messageSendNoPerm", "")
            });

    }

    setTimeout(() => {

        modal.close()

        const obj = document.getElementById("audioSucessSave")

        obj.currentTime = .6

        obj.volume = 0.2

        obj.play()

    }, 1000)

}