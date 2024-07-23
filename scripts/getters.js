import { useEffect } from "react"
import axios from "axios"
import { permissions } from "discord-bitfield-calculator";
import { dashGuildClick } from "./redirects";
import { decrypt4x } from "./enc";
import dayjs from "dayjs";

export function getCookie(cookieName) {

    const ck = document.cookie.split(";")

    let val1 = []

    for (var i = 0; i <= ck.length; i++) {

        if (ck[i]) {

            if (ck[i].split("=")[0].replace(" ", "") == cookieName) {

                val1 = ck[i].split(`${cookieName}=`)

            }

        }

    }

    return val1[1]
}

export function GetGuildsDash() {

    try {

        useEffect(() => {

            if (getCookie("RELOG")) {

                if (!localStorage.getItem("REFRESHGETGILDDASH") || localStorage.getItem("REFRESHGETGILDDASH") && dayjs(new Date()).diff(localStorage.getItem("REFRESHGETGILDDASH"), "seconds") > 10) {

                    fetch(
                        "/api/getguildsdash",
                        {
                            method: "GET",
                            headers: {
                                token_type: "Bearer",
                                access_token: decrypt4x(getCookie("RELOG"))
                            }
                        }
                    )
                        .then(request => request.json())
                        .then(response => {
                            localStorage.setItem("REFRESHGETGILDDASH", new Date())
                            localStorage.setItem(`GUILDS`, JSON.stringify(response.response))
                            addGuilds(response.response)
                        })
                        .catch((err) => {
                            console.log(err)
                        });

                }

            }

            if (localStorage.getItem(`GUILDS`)) {
                addGuilds(JSON.parse(localStorage.getItem(`GUILDS`)))
            }

        })

    } catch (e) {
        console.log(e)
    }

}

export async function getChannelsGuild(guild_id) {

    console.log(localStorage)

    if (!localStorage.getItem("channelsGuild") || localStorage.getItem("channelsGuild") && dayjs(new Date()).diff(localStorage.getItem("REFRESHGETGILDCHANNELS"), "seconds") > 10){

        const fetchedChannels = await fetch(
            "/api/getChannelsGuild",
            {
                method: "GET",
                headers: {
                    guild_id: guild_id
                }
            }
        )

        const reponse = (await fetchedChannels.json())["response"]

        localStorage.setItem("REFRESHGETGILDCHANNELS", new Date())

        return reponse["response"]

    }

    return JSON.parse(localStorage.getItem("channelsGuild"))

}

function addGuilds(obj) {

    const guildDIV = document.getElementById("guildsDIV")

    for (const g of obj) {

        if (!document.getElementById(`${g.id}`)) {

            if (
                permissions(g.permissions).includes("ADMINISTRATOR") ||
                permissions(g.permissions).includes("MANAGE_GUILD")) {

                const
                    [
                        div,
                        div2,
                        button,
                        imgElement,
                        paragraphElement
                    ] = [
                            document.createElement("div"),
                            document.createElement("div"),
                            document.createElement("button"),
                            document.createElement("img"),
                            document.createElement("p")
                        ]

                let img = "/images/NOICONGUILD.jpeg"

                if (g.icon != null) {

                    img = `https://cdn.discordapp.com/icons/${g.id}/${g.icon}`

                }

                let perms = "";

                if (g.owner) {
                    perms = "Dono";
                } else if (permissions(g.permissions).includes("ADMINISTRATOR")) {
                    perms = "Administrador";
                } else if (permissions(g.permissions).includes("MANAGE_GUILD")) {
                    perms = "Gerenciador";
                };

                paragraphElement.setAttribute("style", "white-space: pre;");
                paragraphElement.textContent = `${g.name}\r\n${perms}`;
                paragraphElement.className = "pGuilds";

                div.style.fontSize = "15px";

                button.className = "buttonConfig";
                button.onclick = dashGuildClick;
                button.id = `${g.id}`;
                button.textContent = "Configurar";

                imgElement.className = "imgGuild";
                imgElement.src = img

                div.className = "divGuilds";

                div2.appendChild(imgElement)
                div2.appendChild(paragraphElement)

                div.appendChild(div2)
                div.appendChild(button)

                guildDIV.appendChild(div)

            }

        }

    }
}