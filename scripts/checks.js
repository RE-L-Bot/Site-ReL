import { useEffect } from "react"
import { getCookie } from "@/scripts/getters"
import { useRouter } from "next/router"
import bitfieldCalculator from 'discord-bitfield-calculator';
import { range } from "./outhers";
import { enableDisableMessageSendInChannelNoPerm, showDialogueBox } from "./changes";

export function checkColor() {

    useEffect(() => {

        const validate = getCookie("ligthMode")

        if (validate == "true") {

            for (const m of document.getElementsByClassName("iconChangeMode")) {

                m.innerHTML = "dark_mode"

            }

            document.body.style.backgroundColor = "white"

            document.body.style.color = "black"

        } else {

            for (const m of document.getElementsByClassName("iconChangeMode")) {

                m.innerHTML = "light_mode"

            }

            document.body.style.backgroundColor = "#212121"

            document.body.style.color = "white"

        }

    })

}

export function CheckTipeCommand() {

    useEffect(() => {

        const oldBlue = document.getElementsByClassName("backGroundBlue")[0]

        oldBlue.className = oldBlue.className.split(" ")[0]

        oldBlue.style.color = "inherit"

        const pathname = window.location.pathname.split("/")

        const elementClick = document.getElementById(pathname[pathname.length - 1])

        elementClick.className = elementClick.className += " backGroundBlue"

        elementClick.style.color = "white"

    })

}

export function checkPremiumTicket(guild_id) {

    useEffect(() => {

        fetch("/api/checkPremium", {
            method: "GET",
            headers: {
                guild_id: guild_id
            }
        })
            .then(x => x.json())
            .then((response) => {

                if (response.response.active) {

                    if (["master"].includes(response.response.type)) {

                        document.getElementsByClassName("checkWebhookSender")[0].disabled = false

                        document.getElementById("EMOJIPREMUIMSENDERMSG").style.display = "none"

                        document.getElementById("noDropAllSENDERMSG").className = "none"

                    }

                    if (["master", "medium"].includes(response.response.type)) {

                        document.getElementById("EMOJIPREMUIMTOPIC").style.display = "none"

                        document.getElementById("noDropAllTOPIC").className = "none"

                        document.getElementsByClassName("checkTypeTicket")[0].disabled = false

                    }

                }

                if (!response.response.active) {
                    for (const label of document.querySelectorAll("label.SelectTypeSender")) {
                        label.onclick = () => showDialogueBox("", "premiumModal")
                    }
                }

                const selectQnt = document.getElementById("SelectQnt")

                if (selectQnt.length < 2) {

                    for (const i of range(0, 20)) {

                        const option = document.createElement("option")

                        if (i > 2 && !response.response.active) {

                            option.value = `${i + 1}`

                            option.textContent = `${i + 1} 🌟 Premium basic`

                            if (i > 4) {

                                option.value = `${i + 1}`

                                option.textContent = `${i + 1} 🌟 Premium medium`

                            }

                            if (i > 9) {

                                option.value = `${i + 1}`

                                option.textContent = `${i + 1} 🌟 Premium master`

                            }

                            option.disabled = true

                            selectQnt?.appendChild(option)


                        } else {

                            option.value = `${i + 1}`

                            option.textContent = `${i + 1}`

                            if (i > 4 && i < 10 && response.response.active && response.response.type == "basic") {

                                option.value = `${i + 1}`

                                option.textContent += ` 🌟 Premium medium`

                                option.disabled = true

                            }

                            if (i > 9 && response.response.active && ["basic", "medium"].includes(response.response.type)) {

                                option.value = `${i + 1}`

                                option.textContent += `🌟 Premium master`

                                option.disabled = true

                            }

                            selectQnt?.appendChild(option)

                        }

                    }

                }

            })
            .catch((e) => console.error(e))

    })

}

export function checkGuildPermissions() {

    try {

        const user = useRouter().query.id

        useEffect(() => {

            const val1 = getCookie("RELOG")

            const obj = JSON.parse(localStorage.getItem(`GUILDS`))

            if (user !== undefined) {

                const info = Object.values(obj).filter((x) => x.id === user[0])

                const langP = window.location.pathname.split("/")[1]

                if (info.length == 0 || !bitfieldCalculator.permissions(info[0]["permissions"]).includes("MANAGE_GUILD")) {

                    location.href = `/${langP}/dashboard`

                    window.alert("Sem permissão")

                }

            };

        })

    } catch (e) {
    }

}

export function checkLanguageSelect() {

    useEffect(() => {

        let user = window.location.pathname
        user = user.split("/")

        if (user !== undefined) {

            if (user[user.length - 1] !== "configure")
                return

            fetch("/api/getlanguage", {
                method: "GET",
                headers: {
                    guild_id: user[user.length - 2]
                }
            })
                .then(response => response.json())
                .then(async (data) => {
                    document.getElementById("selecidioma").value = data.response
                    localStorage.setItem("GuildLang", data.response)
                })

            fetch("/api/getMessageSendChannelNoPerm", {
                method: "GET",
                headers: {
                    guild_id: user[user.length - 2]
                }
            })
                .then(response => response.json())
                .then(async (data) => {

                    if (data.response) {

                        const textarea = document.getElementById("messageSendNoPerm")

                        const blockMessage = document.getElementById("contentMessageBlock")

                        document.getElementsByClassName("checkMessageNoPerm")[0].checked = true

                        const backGround = document.getElementById(`toogleOff-1`)

                        const boll = document.getElementById(`bollToogleOff-1`)

                        backGround.className = "toogleOn transitionToogle";

                        boll.className = "bollToogleOn transitionToogle";

                        textarea.innerHTML = data.response

                        blockMessage.innerText = data.response

                        localStorage.setItem("messageSendNoPerm", data.response)

                        enableDisableMessageSendInChannelNoPerm()

                    }

                })
                .catch(console.log)

        }

    })

}
