import Link from "next/link"

export default function Footer() {

    return (

        <footer>

            <div className="Socials">

                <Link href="https://github.com/RE-L-Bot">
                    <img src="/svgs/githubicon.svg" alt="" />
                </Link>

                <Link href="https://discord.com/invite/mmwUHd4Yzf" target="_top">
                    <img src="/svgs/discordiconSVG.svg" alt="" />
                </Link>

            </div>

            <nav className="navigation-footer">

                <div>

                    <h3 style={{ margin: 0 }}>
                        Re=L
                    </h3>

                    <Link href="/en">
                        <p className="PFooter">Home page</p>
                    </Link>

                    <Link href="/en/dashboard">
                        <p className="PFooter">Dashboard</p>
                    </Link>

                    <Link href="/serversupportinvite">
                        <p className="PFooter">support</p>
                    </Link>

                    <Link href="/en/commands/all">
                        <p className="PFooter">Commands</p>
                    </Link>

                    <Link href="/en/store">
                        <p className="PFooter">Premium</p>
                    </Link>

                    <Link
                        // href="/en/dashboard/user/daily"
                        href={"#"}
                    >
                        <p className="PFooter">Daily (Coming Soon)</p>
                    </Link>

                </div>

                <div>

                    <h3 style={{ margin: 0 }}>
                        Important
                    </h3>

                    <Link href="/en/terms">
                        <p className="PFooter">Terms of Use & Privacy</p>
                    </Link>

                    <Link href="/serversupportinvite" target="_blank">
                        <p className="PFooter">Support Server</p>
                    </Link>

                </div>

                <div>

                    <h3 style={{ margin: 0 }}>
                        Outhers links of RE=L
                    </h3>

                </div>

            </nav>

            <h4 className="Reserved">
                © Marciel404 2023 - {new Date().getFullYear()} All rights reserved
            </h4>

        </footer>

    )
}