import { useEffect } from "react";
import { getChannelsGuild } from "./getters";
import RequestApi from "./ManagerRequest";

var count = 0

export function addChannels() {

    useEffect(() => {

        (async () => {

            let user = window.location.pathname
            user = user.split("/")
            user = user[user.length - 2]

            if (count == 0) {

                const form = document.getElementById("formsInfoTicketChannel")

                const channels = await getChannelsGuild(user)

                if (channels)
                    sessionStorage.setItem("channelsGuild", JSON.stringify([user, channels]))

                if (form.length < 2) {

                    for (const c of JSON.parse(sessionStorage.getItem("channelsGuild"))[1]) {

                        if (c.type == 0) {

                            const option = document.createElement("option")

                            option.value = c.id
                            option.textContent = c.name.substring(0, 19)

                            form?.appendChild(option)

                        }

                    }
                }

                count++

            }

            count--

        })();

    })

}

var countUseCommands = 0

export function addChannelsUseCommands() {

    useEffect(() => {

        (async () => {

            let user = window.location.pathname
            user = user.split("/")
            user = user[user.length - 2]

            if (countUseCommands == 0) {

                const form = document.getElementById("selectChannelsUseCommand")

                if (form) {

                    const channels = await getChannelsGuild(user)

                    if (channels)
                        sessionStorage.setItem("channelsGuild", JSON.stringify([user, channels]))

                    if (form.length < 2) {

                        for (const c of JSON.parse(sessionStorage.getItem("channelsGuild"))[1]) {

                            if (c.type == 0) {

                                const option = document.createElement("option")

                                option.value = c.id
                                option.textContent = c.name.substring(0, 19)

                                form?.appendChild(option)

                            }

                        }
                    }

                    await new RequestApi()
                        .setApiEndPoint("thisAPI")
                        .setEndPoint("gChannelsPermUse")
                        .setHeaders({
                            guild_id: user
                        })
                        .request()
                        .then(async (data) => {

                            if (data.response) {

                                const divP = document.getElementById("channelsAddUseCommand")

                                for (const c of JSON.parse(sessionStorage.getItem("channelsGuild"))[1]) {

                                    for (const i of data.response) {

                                        if (i == c.id) {

                                            const label = document.createElement("label")

                                            const p = document.createElement("p")

                                            const i = document.createElement("i")

                                            const checkbox = document.createElement("input")

                                            label.style.display = "flex"

                                            label.style.alignItems = "center"

                                            label.className = "hoverPointer"

                                            checkbox.type = "checkbox"

                                            checkbox.style.display = "none"

                                            checkbox.id = "channelAddUseCommand-" + c.id

                                            checkbox.onclick = removeChannelDiv

                                            p.innerText = c.name.substring(0, 20)

                                            i.className = "material-symbols-outlined"

                                            i.innerText = "close"

                                            label?.appendChild(checkbox)

                                            label?.appendChild(p)

                                            label?.appendChild(i)

                                            divP?.appendChild(label)

                                        }

                                    }

                                }

                                sessionStorage.setItem("channelsAddUseCommand", JSON.stringify(data.response))

                            }

                        })

                    countUseCommands++

                }

            }

            countUseCommands--

        })();

    })

}

var countLogsUse = 0

export function addChannelsLogs() {

    useEffect(() => {

        (async () => {

            let user = window.location.pathname
            user = user.split("/")
            user = user[user.length - 2]

            let logs;

            await new RequestApi()
                .setApiEndPoint("thisAPI")
                .setEndPoint("gLog")
                .setHeaders({
                    guild_id: user,
                    log: "all"
                })
                .request()
                .then(async (response) => {
                    logs = response.response
                })

            if (countLogsUse == 0) {

                const form = document.getElementsByClassName("selectChannelsLog")

                if (form) {

                    const channels = await getChannelsGuild(user)

                    const optionsArray = []

                    if (channels)
                        sessionStorage.setItem("channelsGuild", JSON.stringify([user, channels]))

                    if (form[0].length < 2) {

                        for (const c of JSON.parse(sessionStorage.getItem("channelsGuild"))[1]) {

                            if (c.type == 0) {

                                for (const select of form) {

                                    const option = document.createElement("option")

                                    option.value = `${select.id}-${c.id}`

                                    option.textContent = c.name.substring(0, 19)

                                    optionsArray.push(option)

                                    select?.appendChild(option)

                                    if (logs[select.id] && logs[select.id] != "false") {

                                        select.value = `${select.id}-${logs[select.id]}`

                                        const divMessageP = document.getElementById(`divSelectMenuLog${select.id}`)

                                        divMessageP.className = ""

                                        document.getElementsByClassName(`inputlog${select.id}`)[0].checked = true

                                        const backGround = document.getElementById(`toogleOff-${select.id}`)

                                        const boll = document.getElementById(`bollToogleOff-${select.id}`)

                                        backGround.className = "toogleOn transitionToogle";

                                        boll.className = "bollToogleOn transitionToogle";

                                    }

                                }

                            }

                        }

                    }

                    countLogsUse++

                }

            }

            countLogsUse--

        })();

    })

}

export function addChannelInUseCommands() {

    const form = document.getElementById("selectChannelsUseCommand")

    const divP = document.getElementById("channelsAddUseCommand")

    for (const c of form.children) {

        if (form.value == c.value) {

            if (document.getElementById("channelAddUseCommand-" + form.value))
                return

            const label = document.createElement("label")

            const p = document.createElement("p")

            const i = document.createElement("i")

            const checkbox = document.createElement("input")

            label.style.display = "flex"

            label.style.alignItems = "center"

            label.className = "hoverPointer"

            checkbox.type = "checkbox"

            checkbox.style.display = "none"

            checkbox.id = "channelAddUseCommand-" + form.value

            checkbox.onclick = removeChannelDiv

            p.innerText = c.innerText

            i.className = "material-symbols-outlined"

            i.innerText = "close"

            label?.appendChild(checkbox)

            label?.appendChild(p)

            label?.appendChild(i)

            divP?.appendChild(label)

            return

        }

    }

}

export function removeChannelDiv(e) {

    const div = document.getElementById("channelsAddUseCommand")

    for (const d of div.children) {

        if (d.children[0].id == e.target.id) {

            return div.removeChild(d)

        }

    }

}
