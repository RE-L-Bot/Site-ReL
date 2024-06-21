import { changeLang, changeMode } from "@/scripts/changes";
import { checkColor } from "@/scripts/checks";
import { clickMenuHeader } from "@/scripts/clickMenu";
import Login from "@/scripts/login";
import { redirectLogDash } from "@/scripts/redirects";
import Link from "next/link";

export default function Header() {
    Login()
    checkColor()
    return (
        <>

            <div id="headerPcDiv" />
            <div className="headerPC">

                <h1 className="RedirectToIndex headerChangeColor padding3">
                    <Link href="/">RE=L</Link>
                </h1>

                <div className="DivHeaderPc">

                    <div>

                        <div id="LangP">

                            <div className="headerChangeColor LangS padding3">

                                <i className="material-symbols-outlined">public</i>

                                <h1 id="PT-BR">PT-BR</h1>

                                <i className="material-symbols-outlined">stat_minus_1</i>

                            </div>

                            <ul className="SelectLang">

                                <li onClick={changeLang}>
                                    <p id="es">ES-ES</p>
                                </li>

                                <li onClick={changeLang} >
                                    <p id="en">EN-US</p>
                                </li>

                            </ul>

                        </div>

                    </div>

                    <h1 className="headerChangeColor padding3">
                        <Link href="/br/commands/all">Comandos</Link>
                    </h1>

                    <h1 className="headerChangeColor padding3">
                        <Link href="/br/terms">Termos</Link>
                    </h1>

                    <div className="LoginDiv headerChangeColor padding3">

                        <img className="imageUser" src="" alt="imageUser" />
                        <h1>
                            <p className="login" onClick={redirectLogDash}>Login</p>
                        </h1>

                    </div>

                    <i className="iconChangeMode material-symbols-outlined padding3 headerChangeColor" onClick={changeMode}>
                        light_mode
                    </i>

                </div>

            </div>

            <div id="headerMobileDiv" />
            <div className="headerMobile">

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                    <Link href="/br">
                        <h3 style={{cursor: "pointer"}}>RE=L</h3>
                    </Link>

                    <div id="LangP">

                        <div className="LangS">

                            <i className="material-symbols-outlined">public</i>

                            <h3 id="PT-BR">PT-BR</h3>

                            <i className="material-symbols-outlined">stat_minus_1</i>

                        </div>

                        <ul className="SelectLang">

                            <li onClick={changeLang}>
                                <p id="es">ES-ES</p>
                            </li>

                            <li onClick={changeLang} >
                                <p id="en">EN-US</p>
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="IconsHeader">

                    <i className="material-symbols-outlined" onClick={clickMenuHeader}>
                        menu
                    </i>

                    <i className="iconChangeMode material-symbols-outlined" onClick={changeMode}>
                        light_mode
                    </i>

                </div>

                <menu id="MenuBurguerHederMobile">

                    <ul>

                        <li>
                            <Link href="/br">Inicio</Link>
                        </li>

                        <li>
                            <Link href="/br/comandos/todos">Comandos</Link>
                        </li>

                        <li>

                            <Link href="/br/contatos">Contato</Link>

                        </li>

                        <li className="LoginDiv" style={{ justifyContent: "center" }}>
                            <img className="imageUser" src="" alt="" />
                            <p className="login" onClick={redirectLogDash}>LOGIN</p>
                        </li>

                    </ul>

                </menu>

            </div>

        </>
    )
}