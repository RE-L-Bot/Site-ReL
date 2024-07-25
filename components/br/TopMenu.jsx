import Link from "next/link";
import React from "react";
import { redirectInvite } from "../../scripts/redirects";
import { ChangeTipeCommand } from "@/scripts/changes"
import { CheckTipeCommand } from "@/scripts/checks"
import { usePathname } from "next/navigation";

var val = 0

const infosGuild = () => {

    try {

        React.useEffect(() => {

            const infos = JSON.parse(sessionStorage.getItem(`GUILDS`))
                .find((x) => x.id === window.location.pathname.split("/")[4])

            const imgTAG = document.getElementsByClassName("imgGuild")[0]
            const nameGuild = document.getElementsByClassName("nameGuild")[0]

            let img = "/images/NOICONGUILD.jpeg"

            if (infos.icon != null) {
                img = `https://cdn.discordapp.com/icons/${infos.id}/${infos.icon}`
            }

            nameGuild.innerHTML = infos.name

            imgTAG.src = img
            imgTAG.style.width = "120px"
            imgTAG.style.height = "120px"
            imgTAG.style.borderRadius = "120px"

        })

        val++

    } catch {
        redirectInvite()
    }

}

export default function TopMenu() {

    let langP = usePathname()

    langP = langP.split("/")[1]

    CheckTipeCommand()

    return (

        <div className="AsideSelectCommands" onLoad={infosGuild()}>

            <div>

                <div className="IMGGUILDTOPMENU" >

                    <img className="imgGuild" src="" alt="Guild_Icon" />

                </div>

                <div className="INFOSGUILDTOPMENU">

                    <h2 className="nameGuild"></h2>

                </div>

            </div>

            <div>

                <Link
                    href={`${window.location.pathname.split("/")[4]}/configure`}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <p className="SelectTipeCommand backGroundBlue" id="configure" onClick={ChangeTipeCommand}>
                        Configuração
                    </p>
                </Link>

                <Link
                    href={`${window.location.pathname.split("/")[4]}/ticket`}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <p className="SelectTipeCommand" id="ticket" onClick={ChangeTipeCommand}>
                        Ticket
                    </p>
                </Link>

                <Link
                    href={`${window.location.pathname.split("/")[4]}/keyspremium`}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <p className="SelectTipeCommand" id="keyspremium" onClick={ChangeTipeCommand}>
                        Premium
                    </p>
                </Link>

                <hr />

                <h3 style={{ padding: "10px" }}>Outros</h3>

                <Link
                    href={`/${langP}/dashboard`}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <p className="SelectTipeCommand" id="voltar" onClick={ChangeTipeCommand}>
                        Voltar
                    </p>
                </Link>

            </div>

        </div>

    )

}