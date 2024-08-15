import { useEffect } from "react";
import { getChannelsGuild } from "./getters";
import RequestApi from "./ManagerRequest";

var count = 0

export function addChannels() {

    useEffect(() => {

        (async () => {

            if (count == 0) {

                const form = document.getElementById("formsInfoTicketChannel")

                const channels = await getChannelsGuild(window.location.pathname.split("/")[4])

                if (channels)
                    sessionStorage.setItem("channelsGuild", JSON.stringify(channels))

                if (form.length < 2) {

                    for (const c of JSON.parse(sessionStorage.getItem("channelsGuild"))) {

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

                    const channels = await getChannelsGuild(window.location.pathname.split("/")[4])

                    console.log(channels)

                    if (channels)
                        sessionStorage.setItem("channelsGuild", JSON.stringify(channels))

                    if (form.length < 2) {

                        for (const c of JSON.parse(sessionStorage.getItem("channelsGuild"))) {

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

                                for (const c of JSON.parse(sessionStorage.getItem("channelsGuild"))) {

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
