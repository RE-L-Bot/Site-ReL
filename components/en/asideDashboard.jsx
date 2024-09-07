import { ChangeTipeCommand } from "@/scripts/changes"
import { CheckTipeCommand } from "@/scripts/checks"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

function showBack() {

    let langP = usePathname()

    useEffect(() => {

        langP = langP.split("/")

        if (langP[langP.length - 1] == "dashboard") {

            const d = document.getElementById("outhers")

            d.style.display = "none"

        }

    })

}

export default function AsideDashboard() {

    showBack()

    let langP = usePathname()

    langP = langP.split("/")[1]

    CheckTipeCommand()

    return (

        <div className="AsideSelectCommands">

            <div>

                <Link
                    href={`/${langP}/dashboard`}
                    style={{ textDecoration: "none", color: "inherit" }}>

                    <p className="SelectTipeCommand backGroundBlue" style={{ display: "flex", alignItems: "center", gap: "5px" }} id="dashboard" onClick={ChangeTipeCommand}>
                        <i className="material-symbols-outlined">
                            smb_share
                        </i>
                        Your Guilds
                    </p>

                </Link>

                <hr />

                <h3 style={{ padding: "10px" }}>User</h3>

                <Link
                    // href={`/${langP}/dashboard/user/daily`}
                    href={"#"}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <p className="SelectTipeCommand" style={{ display: "flex", alignItems: "center", gap: "5px" }} id="daily" onClick={ChangeTipeCommand}>
                        <i className="material-symbols-outlined">
                            paid
                        </i>
                        daily (Soon)
                    </p>
                </Link>

                <div id="outhers">

                    <hr />

                    <Link
                        href={`/${langP}/dashboard`}
                        style={{ textDecoration: "none", color: "inherit", display: "block" }}>

                        <p className="SelectTipeCommand" id="voltar" style={{ display: "flex", alignItems: "center", gap: "5px" }} onClick={ChangeTipeCommand}>
                            <i className="material-symbols-outlined">
                                arrow_back
                            </i>
                            Come back
                        </p>

                    </Link>

                </div>

            </div>

        </div>

    )

}