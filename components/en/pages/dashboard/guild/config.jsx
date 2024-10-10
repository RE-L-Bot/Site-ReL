import { saveConfigGeneral } from "@/scripts/saves";
import { addChannelsUseCommands, addChannelInUseCommands } from "@/scripts/addChannelsSelect";
import ToogleOff from "@/components/globals/toogleOff";
import { ChangeEnabledNobackground } from "@/scripts/changes";
import { checkLanguageSelect } from "@/scripts/checks";
import TOPMENU from "@/components/en/TopMenu";
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
                <title>RE=L Bot • General Configuration</title>
            </Head>

            <dialog id="savemodal" style={{ background: "none", color: "whitesmoke", border: "none" }}>
                <form method="dialog" style={{ textAlign: "center" }}>
                    <img src="/svgs/RELCHIBI.svg" alt="RELCHIBI" />
                    <p>Saved</p>
                </form>
            </dialog>

            <div className="alignItens">

                <TOPMENU />

                <div style={{ padding: "20px" }}>

                    <h3 className="center">
                        Settings
                    </h3>

                    <div className="BorderConfigDashBot">

                        <div className="selectlangbot">

                            <div>

                                <h3>
                                    Language
                                </h3>

                                <h6 className="descriptionOptions">
                                    This is the language that the bot will speak on the server
                                    (It has nothing to do with the language of the site)
                                </h6>

                            </div>

                            <select name="selectlang" id="selecidioma">
                                <option value="pt-BR">Portuguese Brazilian</option>
                                <option value="en-US">English Americano</option>
                                <option value="es-ES">Espanish</option>
                            </select>

                        </div>

                        <div className="selectChannelsUseCommandDiv">

                            <div>

                                <h3>
                                    Allowed Channels for Commands
                                </h3>

                                <h6 className="descriptionOptions">
                                    These channels will be the ones where I can respond to the commands executed
                                    (It's easier to list those who can than those who can't)
                                </h6>

                            </div>

                            <div id="div2">

                                <div id="div3">

                                    <select name="selectChannelsUseCommand" id="selectChannelsUseCommand" />

                                    <button className="buttonSave" onClick={() => addChannelInUseCommands()}>Add</button>

                                    <audio src="/audios/sucessSave.mp3" id="audioSucessSave" />

                                </div>

                                <div id="channelsAddUseCommand" />

                            </div>

                        </div>

                        <div id="defineMessageSend">

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                                <div>

                                    <h3>
                                        Message when using a command on an unallowed channel
                                    </h3>

                                    <h6 className="descriptionOptions">
                                        The bot will show this message when the user runs a command on a
                                        channel not allowed, if allowed channels have been set
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

                                    <h5>Message when using a command on an unallowed channel</h5>

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