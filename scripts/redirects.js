import { configData } from "@/scripts/login"
import { generateRandomString } from "./enc"
import RequestApi from "./ManagerRequest"

export function redirectTerms() {
    const langP = window.location.pathname.split("/")[1]
    window.location.href = `/${langP}/terms`
}

export function redirectInfos() {
    window.location.href = "#about"
}

export function redirectInvite(guildID) {

    const langP = window.location.pathname.split("/")[1]

    window.location.href = `${configData[`linkRedirectAddBot`]
        .replace("{lang}", langP)}`
}

export function redirectStore() {
    const langP = window.location.pathname.split("/")[1]
    window.open(`/${langP}/store`, "_blanck")
}

export async function dashGuildClick(c) {

    try {

        await new RequestApi()
            .setApiEndPoint("thisAPI")
            .setEndPoint("vInGuild")
            .setHeaders({
                guild_id: c.target.id
            })
            .request()
            .then(response => {

                if (response.response.code == 10004) 
                    return redirectInvite(c.target.id)

                const langP = window.location.pathname.split("/")[1]

                location.href = `/${langP}/dashboard/guild/${c.target.id}/configure`

            })

    } catch (e) {
        console.log(e)
    }
}

export function redirectLogDash() {

    const doclogin = document.getElementsByClassName("login");

    const langP = window.location.pathname.split("/")[1]

    if (doclogin[0].textContent.toLowerCase() != "login")
        return window.location.href = `${window.location.protocol}//${window.location.host}/${langP}/dashboard`

    const randomString = generateRandomString();

    sessionStorage.setItem('oauth-state', randomString);

    window.location.href = `${configData["linkRedirectDiscord"].replace("{lang}", langP)}&state=${randomString}`

}