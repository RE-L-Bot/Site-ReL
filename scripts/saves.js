import { showDialogueBox } from "./changes"

export async function saveConfigGeneral() {

    const modal = showDialogueBox("", "savemodal")

    const idGuild = window.location.pathname.split("/")[4]

    const divChannels = document.getElementById("channelsAddUseCommand")

    const channels = []

    for (const c of divChannels.children) {
        channels.push(c.children[0].id.split("-")[1])
    }

    let channels2 = 0

    if (localStorage.getItem("channelsAddUseCommand") && localStorage.getItem("channelsAddUseCommand") != "false") {

        for (const c of JSON.parse(localStorage.getItem("channelsAddUseCommand"))) {

            if (channels.includes(c)) {
                channels2++
            } else {
                channels2--
            }

        }

    }

    if (document.getElementById("selecidioma").value !== localStorage.getItem("GuildLang"))
        fetch("/api/updatelang", {
            method: "PATCH",
            headers: {
                guild_id: idGuild,
                lang: document.getElementById("selecidioma").value
            }
        })
            .then(response => response.json())
            .then(async (data) => {
                if (data.status == 200)
                    localStorage.setItem("GuildLang", document.getElementById("selecidioma").value)
            })


    if (channels.length !== channels2)
        fetch("/api/updateChannelsPermUse", {
            method: "PATCH",
            headers: {
                guild_id: idGuild,
                channels: (channels.length == 0) ? "false" : JSON.stringify(channels)
            }
        })
            .then(response => response.json())
            .then(async (data) => {
                if (data.status == 200)
                    localStorage.setItem("channelsAddUseCommand", (channels.length == 0) ? "false" : JSON.stringify(channels))
            })

    if (document.getElementsByClassName("checkMessageNoPerm")[0].checked && document.getElementById("messageSendNoPerm").value !== localStorage.getItem("messageSendNoPerm")) {

        fetch("/api/updateMessageSendChannelNoPerm", {
            method: "PATCH",
            headers: {
                guild_id: idGuild,
                message: document.getElementById("messageSendNoPerm").value
            }
        })
            .then(response => response.json())
            .then(async (data) => {
                if (data.status == 200)
                    localStorage.setItem("messageSendNoPerm", document.getElementById("messageSendNoPerm").value)
            });

    }

    if (document.getElementsByClassName("checkMessageNoPerm")[0].checked && document.getElementById("messageSendNoPerm").value == "" || !document.getElementsByClassName("checkMessageNoPerm")[0].checked) {

        fetch("/api/updateMessageSendChannelNoPerm", {
            method: "PATCH",
            headers: {
                guild_id: idGuild,
                message: ""
            }
        })
            .then(response => response.json())
            .then(async (data) => {
                if (data.status == 200)
                    localStorage.setItem("messageSendNoPerm", "")
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