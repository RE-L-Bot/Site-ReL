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

                <h1 className="RedirectToIndex headerChangeColor padding3">
                    <Link href="/en">RE=L</Link>
                </h1>

                <div className="DivHeaderPc">

                    <div>

                        <div id="LangP">

                            <div className="headerChangeColor LangS padding3">

                                <i className="material-symbols-outlined">public</i>

                                <h1 id="en">EN-US</h1>

                                <i className="material-symbols-outlined">stat_minus_1</i>

                            </div>

                            <ul className="SelectLang">

                                <li id="br" onClick={changeLang}>
                                    <p id="br">PT-BR</p>
                                </li>

                                <li id="es" onClick={changeLang} >
                                    <p id="es">ES-ES</p>
                                </li>

                            </ul>

                        </div>

                    </div>

                    <h1 className="headerChangeColor padding3">
                        <Link href="/en/commands/all">Commands</Link>
                    </h1>

                    <h1 className="headerChangeColor padding3">
                        <Link href="/en/terms">Terms</Link>
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

                    <Link href="/en">
                        <h3 style={{cursor: "pointer"}}>RE=L</h3>
                    </Link>

                    <div id="LangP">

                        <div className="LangS">

                            <i className="material-symbols-outlined">public</i>

                            <h3 id="en">EN-US</h3>

                            <i className="material-symbols-outlined">stat_minus_1</i>

                        </div>

                        <ul className="SelectLang">

                            <li onClick={changeLang}>
                                <p id="br">PT-BR</p>
                            </li>

                            <li onClick={changeLang} >
                                <p id="es">ES-ES</p>
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
                            <Link href="/en">Home page</Link>
                        </li>

                        <li>
                            <Link href="/en/commands/all">Commands</Link>
                        </li>

                        <li>

                            <Link href="/en/terms">Terms</Link>

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