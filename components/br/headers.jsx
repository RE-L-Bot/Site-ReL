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
        <div>

            <div id="headerPcDiv" />
            <div className="headerPC">

                <Link href="/" style={{color: "white", textDecoration: "none"}}>
                    <h3 className="RedirectToIndex headerChangeColor padding3">
                        RE=L
                    </h3>
                </Link>

                <div className="DivHeaderPc">

                    <div id="LangP">

                        <div className="headerChangeColor LangS padding3">

                            <i className="material-symbols-outlined">public</i>

                            <h3 id="PT-BR">PT-BR</h3>

                            <i className="material-symbols-outlined">stat_minus_1</i>

                        </div>

                        <ul className="SelectLang">

                            <li id="es" onClick={changeLang}>
                                <p id="es">ES-ES</p>
                            </li>

                            <li id="en" onClick={changeLang} >
                                <p id="en">EN-US</p>
                            </li>

                        </ul>

                    </div>

                    <Link href="/br/commands/all">
                        <h3 className="headerChangeColor padding3">
                            Comandos
                        </h3>
                    </Link>

                    <Link href="/br/terms">
                        <h3 className="headerChangeColor padding3">
                            Termos
                        </h3>
                    </Link>

                    <div className="LoginDiv headerChangeColor padding3" onClick={redirectLogDash}>

                        <img className="imageUser" src="" alt="imageUser" />
                        <h3 style={{ margin: 0 }}>
                            <p className="login">Login</p>
                        </h3>

                    </div>

                    <i className="iconChangeMode material-symbols-outlined headerChangeColor padding3" onClick={changeMode}>
                        light_mode
                    </i>

                </div>

            </div>

            <div id="headerMobileDiv" />
            <div className="headerMobile">

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                    <Link href="/br">
                        <h3 style={{ cursor: "pointer" }}>RE=L</h3>
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
                            <Link href="/br/commands/all">Comandos</Link>
                        </li>

                        <li>

                            <Link href="/br/terms">Termos</Link>

                        </li>

                        <li className="LoginDiv" style={{ justifyContent: "center" }}>
                            <img className="imageUser" src="" alt="" />
                            <p className="login" onClick={redirectLogDash}>LOGIN</p>
                        </li>

                    </ul>

                </menu>

            </div>

        </ div>
    )
}