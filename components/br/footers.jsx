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

                    <h3>
                        Re=L
                    </h3>

                    <Link href="/br">
                        <p className="PFooter">Pagina inicial</p>
                    </Link>

                    <Link href="/br/dashboard">
                        <p className="PFooter">Dashboard</p>
                    </Link>

                    <Link href="/serversupportinvite">
                        <p className="PFooter">suporte</p>
                    </Link>

                    <Link href="/br/commands/all">
                        <p className="PFooter">Comandos</p>
                    </Link>

                    <Link href="/br/store">
                        <p className="PFooter">Premium</p>
                    </Link>

                    <Link 
                    // href="/br/dashboard/user/daily"
                    href={"#"}
                    >
                        <p className="PFooter">Daily (Em Breve)</p>
                    </Link>

                </div>

                <div>

                    <h3>
                        Importante
                    </h3>

                    <Link href="/br/terms">
                        <p className="PFooter">Termos de uso & privacidade</p>
                    </Link>

                    <Link href="https://discord.com/invite/mmwUHd4Yzf" target="_blank">
                        <p className="PFooter">Servidor de suporte</p>
                    </Link>

                </div>

                <div>

                    <h3>
                        Outros links da RE=L
                    </h3>

                </div>

            </nav>

            <h4 className="Reserved">
                © Marciel404 2023 - {new Date().getFullYear()} Todos os direitos reservados
            </h4>

        </footer>

    )
}