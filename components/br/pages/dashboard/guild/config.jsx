import { saveConfigGeneral } from "@/scripts/saves";
import { addChannelsUseCommands, addChannelInUseCommands } from "@/scripts/addChannelsSelect";
import ToogleOff from "@/components/globals/toogleOff";
import { ChangeEnabledNobackground } from "@/scripts/changes";
import { checkLanguageSelect } from "@/scripts/checks";
import TOPMENU from "@/components/br/TopMenu";
import Head from "next/head";
import { DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";
import myMD from "@/scripts/myMD";
import { useState } from "react";

function onLoadPageConfig() {
    addChannelsUseCommands()
    checkLanguageSelect()
}

export default function Config() {

    const [content, setContent] = useState("");

    return (
        <div onLoad={onLoadPageConfig()}>

            <Head>
                <title>RE=L Bot • Configuração Geral</title>
            </Head>

            <dialog id="savemodal" style={{ background: "none", color: "whitesmoke", border: "none" }}>
                <form method="dialog" style={{ textAlign: "center" }}>
                    <img src="/svgs/RELCHIBI.svg" alt="RELCHIBI" />
                    <p>Salvando</p>
                </form>
            </dialog>

            <audio src="/audios/sucessSave.mp3" id="audioSucessSave" />

            <div className="alignItens">

                <TOPMENU />

                <div style={{ padding: "20px" }}>

                    <h3 className="center">
                        Configurações
                    </h3>

                    <div className="BorderConfigDashBot">

                        <div className="selectlangbot">

                            <div>

                                <h3>
                                    Idioma
                                </h3>

                                <h6 className="descriptionOptions">
                                    Esse é o idioma que o bot falara no servidor
                                    (Não tem nada haver com o idioma do site)
                                </h6>

                            </div>

                            <select name="selectlang" id="selecidioma">
                                <option value="pt-BR">Português Brasileiro</option>
                                <option value="en-US">Inglês Americano</option>
                                <option value="es-ES">Espanhol</option>
                            </select>

                        </div>

                        <div className="selectChannelsUseCommandDiv">

                            <div>

                                <h3>
                                    Canais permitidos para comandos
                                </h3>

                                <h6 className="descriptionOptions">
                                    Esses canais serão os que eu poderei responder os comandos executados
                                    (É mais facil listar os que podem do que os que não podem)
                                </h6>

                            </div>

                            <div id="div2">

                                <div id="div3">

                                    <select name="selectChannelsUseCommand" id="selectChannelsUseCommand" />

                                    <button className="buttonSave" onClick={() => addChannelInUseCommands()}>Adicionar</button>

                                </div>

                                <div id="channelsAddUseCommand" />

                            </div>

                        </div>

                        <div id="defineMessageSend">

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                                <div>

                                    <h3>
                                        Mensagem ao usar um comando em um canal não permitido
                                    </h3>

                                    <h6 className="descriptionOptions">
                                        O bot mostrara esta mensagem quando o usuário executar um comando em um
                                        canal não permitido, caso os canais permitidos tenham sido definidos
                                    </h6>

                                </div>

                                <div>

                                    <label className="SelectTypeSender" style={{ background: "none", padding: "0px" }}>

                                        <div>

                                            <input type="checkbox" id="checkBox" className="checkMessageNoPerm" onChange={(e) => {
                                                ChangeEnabledNobackground(e, 1)

                                                const divMessage = document.getElementById("messageNoPermChannel")

                                                if (divMessage.className == "Disabled") {
                                                    return divMessage.className = ""
                                                }

                                                divMessage.className = "Disabled"

                                            }} />

                                            <ToogleOff qnt={1} />

                                        </div>

                                    </label>

                                </div>

                            </div>

                            <div id="messageNoPermChannel" className="Disabled">

                                <div>

                                    <h5>Mensagem ao usar um comando em um canal não permitido</h5>

                                    <textarea
                                        id="messageSendNoPerm"
                                        name="TextChannelMessage"
                                        maxLength={2000}
                                        style={{
                                            fontSize: "15px",
                                            width: "100%",
                                            height: "40px",
                                            resize: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer"
                                        }}
                                        onInput={(e) => {
                                            setContent(e.target.value.toString())
                                        }}></textarea>

                                </div>

                                <DiscordMessages>

                                    <DiscordMessage profile="RELBOT">
                                        {myMD(content)}
                                    </DiscordMessage>

                                </DiscordMessages>

                            </div>

                        </div>

                        <div style={{ display: "flex", justifyContent: "end", padding: "5px" }}>
                            <button className="buttonSave" onClick={saveConfigGeneral}>Salvar</button>
                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}