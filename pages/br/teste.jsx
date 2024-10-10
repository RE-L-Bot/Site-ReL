import Link from "next/link";
import { changeLang, changeMode } from "@/scripts/changes";

export default function Teste() {

    return (
        <div>

            <header style={{
                backgroundColor: "blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>

                <Link href={"/"}>

                    <h4 style={{ margin: 0 }}>
                        RE=L
                    </h4>

                </Link>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>

                    <div id="LangP">

                        <div
                            className="headerChangeColor LangS"
                            style={{
                                paddingLeft: "15px",
                                paddingRight: "15px"
                            }}
                        >

                            <i className="material-symbols-outlined">public</i>

                            <h4 id="PT-BR">PT-BR</h4>

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

                    <h4 className="headerChangeColor">
                        <Link href="/br/commands/all">Comandos</Link>
                    </h4>

                </div>

            </header>

        </div>
    )
}