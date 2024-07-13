import { useEffect } from "react";
import { encrypt4x, decrypt4x, generateRandomString } from "@/scripts/enc";
import { getCookie } from "./getters";
import axios from "axios";
import { usePathname } from "next/navigation";
import { redirectLogDash } from "./redirects";
import RequestApi from "./ManagerRequest";
/** @type {import('@/configDev.js')} */
export const configData = await import(`../config${process.env.NEXT_PUBLIC_TYPE}.js`)

export default async function Login() {

    const langP = usePathname().slice(1, 3)

    useEffect(() => {

        (async () => {

            if (location.search) {

                const urlParams = new URLSearchParams(location.search);

                const [code, state, guild] = [urlParams.get('code'), urlParams.get('state'), urlParams.get('guild_id')];

                if (
                    state && !localStorage.getItem('oauth-state') ||
                    state && state != localStorage.getItem('oauth-state')
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
                    .then((data) => {

                        if (data.response.access_token) {

                            document.cookie = `RELOG=${encrypt4x(data.response.access_token)}; path=/`

                            if (guild)
                                return window.location = `/${langP}/dashboard/guild/${guild}/configure`

                            return window.location = `/${langP}/dashboard`

                        }

                    })

            }

            const cookieToken = getCookie("RELOG")

            if (cookieToken) {

                const doclogin = document.getElementsByClassName("login");

                const docimage = document.getElementsByClassName("imageUser");

                await axios(
                    `${configData["API_ENDPOINT"]}/users/@me`,
                    {
                        headers: {
                            Authorization: `Bearer ${decrypt4x(cookieToken)}`
                        }
                    }
                )
                    .then(request => request.data)
                    .then(response => {

                        localStorage.setItem("idUser", response.id)

                        for (const l of doclogin) {

                            l.innerHTML = response.username;

                        }

                        for (const img of docimage) {

                            img.src = `https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}`

                            img.style.display = "block"

                        }

                    })
                    .catch(e => {

                        if (window.location.href.indexOf("dashboard") >= 0) {
                            redirectLogDash()
                        }

                    })

            } else {

                if (window.location.href.indexOf("dashboard") >= 0) {

                    redirectLogDash()

                }

            }

        })()

    })

}
