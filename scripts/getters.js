import { useEffect } from "react"
import { permissions } from "discord-bitfield-calculator";
import { dashGuildClick } from "./redirects";
import { decrypt4x } from "./enc";
import dayjs from "dayjs";
import RequestApi from "./ManagerRequest";

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

                if (
                    !sessionStorage.getItem("REFRESHGETGILDDASH") ||
                    sessionStorage.getItem("REFRESHGETGILDDASH") &&
                    dayjs(new Date()).diff(sessionStorage.getItem("REFRESHGETGILDDASH"), "seconds") > 20) {

                    new RequestApi()
                        .setApiEndPoint("thisAPI")
                        .setEndPoint("gGuildsDash")
                        .setHeaders({
                            token_type: "Bearer",
                            access_token: decrypt4x(getCookie("RELOG"))
                        })
                        .request()
                        .then(response => {
                            sessionStorage.setItem("REFRESHGETGILDDASH", new Date())
                            sessionStorage.setItem(`GUILDS`, JSON.stringify(response.response))
                            addGuilds(response.response)
                        })
                        .catch((err) => {
                            console.log(err)
                        });

                }

            }

            if (sessionStorage.getItem(`GUILDS`)) {
                addGuilds(JSON.parse(sessionStorage.getItem(`GUILDS`)))
            }

        })

    } catch (e) {
        console.log(e)
    }

}

export async function getChannelsGuild(guild_id) {

    if (
        !sessionStorage.getItem("channelsGuild") ||
        sessionStorage.getItem("channelsGuild") &&
        dayjs(new Date()).diff(sessionStorage.getItem("REFRESHGETGILDCHANNELS"), "seconds") > 20
    ) {

        let response;

        new RequestApi()
            .setApiEndPoint("thisAPI")
            .setEndPoint("gChannelsGuild")
            .setHeaders({
                guild_id: guild_id
            })
            .request()
            .then((data) => {
                response = data.response.response
                sessionStorage.setItem("REFRESHGETGILDCHANNELS", new Date())
            })

        return response

    }

    return JSON.parse(sessionStorage.getItem("channelsGuild"))

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