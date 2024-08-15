import { useEffect } from "react";
import { encrypt4x, decrypt4x } from "@/scripts/enc";
import { getCookie } from "./getters";
import { usePathname } from "next/navigation";
import { redirectLogDash } from "./redirects";
import RequestApi from "./ManagerRequest";
import dayjs from "dayjs";
/** @type {import('@/configDev.js')} */
export const configData = await import(`../config${process.env.NEXT_PUBLIC_TYPE}`)

export default async function Login() {

    const langP = usePathname().slice(1, 3)

    useEffect(() => {

        (async () => {

            if (location.search) {

                const urlParams = new URLSearchParams(location.search);

                const [code, state, guild] = [urlParams.get('code'), urlParams.get('state'), urlParams.get('guild_id')];

                if (
                    state && !sessionStorage.getItem('oauth-state') ||
                    state && state != sessionStorage.getItem('oauth-state')
                ) {

                    redirectLogDash()

                }

                await new RequestApi()
                    .setBody({
                        code: code,
                        redirect_uri: configData["REDIRECT_URI"]
                            .replace("{lang}", langP)
                    })
                    .setEndPoint("login")
                    .request()
                    .then(async (data) => {

                        if (data.response.access_token) {

                            document.cookie = `RELOG=${encrypt4x(data.response.access_token)}; path=/`

                            await new RequestApi()
                                .setApiEndPoint("thisAPI")
                                .setEndPoint("gGuildsDash")
                                .setHeaders({
                                    token_type: "Bearer",
                                    access_token: data.response.access_token
                                })
                                .request()
                                .then(response => {
                                    sessionStorage.setItem("REFRESHGETGILDDASH", new Date())
                                    sessionStorage.setItem(`GUILDS`, JSON.stringify(response.response))

                                    if (guild)
                                        return window.location = `/${langP}/dashboard/guild/${guild}/configure`

                                    return window.location = `/${langP}/dashboard`
                                })

                        }

                    })

            }

            const cookieToken = getCookie("RELOG")

            if (cookieToken) {

                const doclogin = document.getElementsByClassName("login");

                const docimage = document.getElementsByClassName("imageUser");

                if (
                    !sessionStorage.getItem("USERINFO") ||
                    sessionStorage.getItem("REFRESHGETUSERINFO") &&
                    dayjs(new Date()).diff(sessionStorage.getItem("REFRESHGETUSERINFO"), "seconds") > 20) {

                    await new RequestApi()
                        .setApiEndPoint("thisAPI")
                        .setEndPoint("getuserinfo")
                        .setHeaders({
                            authorization: `Bearer ${decrypt4x(cookieToken)}`
                        })
                        .request()
                        .then(response => {

                            sessionStorage.setItem(`USERINFO`, JSON.stringify(response))
                            sessionStorage.setItem("REFRESHGETUSERINFO", new Date())
                            sessionStorage.setItem("idUser", response.id)

                        })
                        .catch(e => {

                            if (window.location.href.indexOf("dashboard") >= 0) {
                                redirectLogDash()
                            }

                        })

                }

                const userInfo = JSON.parse(sessionStorage.getItem(`USERINFO`))

                for (const l of doclogin) {

                    l.innerHTML = userInfo.username;

                }

                for (const img of docimage) {

                    img.src = `https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}`

                    img.style.display = "block"

                }

            } else {

                if (window.location.href.indexOf("dashboard") >= 0) {

                    redirectLogDash()

                }

            }

        })()

    })

}
