import TopMenu from "@/components/en/TopMenu";
import ToogleOff from "@/components/globals/toogleOff";
import { addChannelsLogs } from "@/scripts/addChannelsSelect";
import { ChangeEnabledNobackground } from "@/scripts/changes";
import { saveLogs } from "@/scripts/saves";
import Head from "next/head";

export default function Logs() {

    addChannelsLogs()

    return (

        <div>

            <Head>
                <title>RE=L Bot • Logs</title>
            </Head>

            <dialog id="savemodal" style={{ background: "none", color: "whitesmoke", border: "none" }}>
                <form method="dialog" style={{ textAlign: "center" }}>
                    <img src="/svgs/RELCHIBI.svg" alt="RELCHIBI" />
                    <p>Salvando</p>
                </form>
            </dialog>

            <audio src="/audios/sucessSave.mp3" id="audioSucessSave" />

            <div className="alignItens">

                <TopMenu />

                <div style={{ padding: "20px" }}>

                    <h2 className="center">Logs</h2>
                    <h4 style={{ margin: 0 }}>
                        Configure a chat for each log to help you and your <br />
                        team manage your community
                    </h4>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    Deleted Message Logs
                                </h3>

                                <h6 style={{ margin: 0 }} className="descriptionOptions">
                                    Whenever there is an update on messages, the bot will send <br />
                                    an embed in this channel informing about the message and the <br />
                                    message details
                                </h6>

                            </div>

                            <div>

                                <label className="SelectTypeSender" style={{ background: "none", padding: "0px" }}>

                                    <div>

                                        <input type="checkbox" id="checkBox" className="inputlogmsgsLog" onChange={(e) => {
                                            ChangeEnabledNobackground(e, "msgsLog")

                                            const divMessage = document.getElementById("divSelectMenuLogmsgsLog")

                                            if (divMessage.className == "Disabled") {
                                                return divMessage.className = ""
                                            }

                                            divMessage.className = "Disabled"

                                        }} />

                                        <ToogleOff qnt={"msgsLog"} />

                                    </div>

                                </label>

                            </div>

                        </div>

                        <div id="divSelectMenuLogmsgsLog" className="Disabled">

                            <select name="selectlogmsg" defaultValue="false" className="selectChannelsLog" id="msgsLog">
                                <option value="false">Select a channel</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    Microphone/Audio Logs
                                </h3>

                                <h6 style={{ margin: 0 }} className="descriptionOptions">
                                    When someone makes any changes to their voice state, <br />
                                    whether it’s deafening, undeafening, muting, or unmuting, <br />
                                    the bot will notify in this channel
                                </h6>

                            </div>

                            <div>

                                <label className="SelectTypeSender" style={{ background: "none", padding: "0px" }}>

                                    <div>

                                        <input type="checkbox" id="checkBox" className="inputlogmicLog" onChange={(e) => {
                                            ChangeEnabledNobackground(e, "micLog")

                                            const divMessage = document.getElementById("divSelectMenuLogmicLog")

                                            if (divMessage.className == "Disabled") {
                                                return divMessage.className = ""
                                            }

                                            divMessage.className = "Disabled"

                                        }} />

                                        <ToogleOff qnt={"micLog"} />

                                    </div>

                                </label>

                            </div>

                        </div>

                        <div id="divSelectMenuLogmicLog" className="Disabled">

                            <select name="selectlog" defaultValue="false" className="selectChannelsLog" id="micLog">
                                <option value="false">Select a channel</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    Video Logs
                                </h3>

                                <h6 style={{ margin: 0 }} className="descriptionOptions">
                                    Whenever the user turns on or off the camera, <br />
                                    starts streaming, or stops streaming, the bot will <br />
                                    send a message in this channel
                                </h6>

                            </div>

                            <div>

                                <label className="SelectTypeSender" style={{ background: "none", padding: "0px" }}>

                                    <div>

                                        <input type="checkbox" id="checkBox" className="inputlogvideoLog" onChange={(e) => {
                                            ChangeEnabledNobackground(e, "videoLog")

                                            const divMessage = document.getElementById("divSelectMenuLogvideoLog")

                                            if (divMessage.className == "Disabled") {
                                                return divMessage.className = ""
                                            }

                                            divMessage.className = "Disabled"

                                        }} />

                                        <ToogleOff qnt={"videoLog"} />

                                    </div>

                                </label>

                            </div>

                        </div>

                        <div id="divSelectMenuLogvideoLog" className="Disabled">

                            <select name="selectlog" defaultValue="false" className="selectChannelsLog" id="videoLog">
                                <option value="false">Select a channel</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    Call Logs
                                </h3>

                                <h6 style={{ margin: 0 }} className="descriptionOptions">
                                    Whenever a user joins, leaves, or changes calls, <br />
                                    the bot will send a message in this channel
                                </h6>

                            </div>

                            <div>

                                <label className="SelectTypeSender" style={{ background: "none", padding: "0px" }}>

                                    <div>

                                        <input type="checkbox" id="checkBox" className="inputlogvcLog" onChange={(e) => {
                                            ChangeEnabledNobackground(e, "vcLog")

                                            const divMessage = document.getElementById("divSelectMenuLogvcLog")

                                            if (divMessage.className == "Disabled") {
                                                return divMessage.className = ""
                                            }

                                            divMessage.className = "Disabled"

                                        }} />

                                        <ToogleOff qnt={"vcLog"} />

                                    </div>

                                </label>

                            </div>

                        </div>

                        <div id="divSelectMenuLogvcLog" className="Disabled">

                            <select name="selectlog" defaultValue="false" className="selectChannelsLog" id="vcLog">
                                <option value="false">Select a channel</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    Ticket Log
                                </h3>

                                <h6 style={{ margin: 0 }} className="descriptionOptions">
                                    Once a ticket is closed, the bot will send the <br />
                                    transcript to this channel
                                </h6>

                            </div>

                            <div>

                                <label className="SelectTypeSender" style={{ background: "none", padding: "0px" }}>

                                    <div>

                                        <input type="checkbox" id="checkBox" className="inputlogtckLog" onChange={(e) => {
                                            ChangeEnabledNobackground(e, "tckLog")

                                            const divMessage = document.getElementById("divSelectMenuLogtckLog")

                                            if (divMessage.className == "Disabled") {
                                                return divMessage.className = ""
                                            }

                                            divMessage.className = "Disabled"

                                        }} />

                                        <ToogleOff qnt={"tckLog"} />

                                    </div>

                                </label>

                            </div>

                        </div>

                        <div id="divSelectMenuLogtckLog" className="Disabled">

                            <select name="selectlog" defaultValue="false" className="selectChannelsLog" id="tckLog">
                                <option value="false">Select a channel</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    Registration Logs
                                </h3>

                                <h6 style={{ margin: 0 }} className="descriptionOptions">
                                    Whenever a member is registered, the bot will send an embed <br />
                                    in this channel stating that the member was registered, <br />
                                    who registered and when it was registered
                                </h6>

                            </div>

                            <div>

                                <label className="SelectTypeSender" style={{ background: "none", padding: "0px" }}>

                                    <div>

                                        <input type="checkbox" id="checkBox" className="inputlogregLog" onChange={(e) => {
                                            ChangeEnabledNobackground(e, "regLog")

                                            const divMessage = document.getElementById("divSelectMenuLogregLog")

                                            if (divMessage.className == "Disabled") {
                                                return divMessage.className = ""
                                            }

                                            divMessage.className = "Disabled"

                                        }} />

                                        <ToogleOff qnt={"regLog"} />

                                    </div>

                                </label>

                            </div>

                        </div>

                        <div id="divSelectMenuLogregLog" className="Disabled">

                            <select name="selectlog" defaultValue="false" className="selectChannelsLog" id="regLog">
                                <option value="false">Select a channel</option>
                            </select>

                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "end", padding: "5px", marginTop: "10px" }}>
                        <button className="buttonSave" onClick={saveLogs}>Save</button>
                    </div>

                </div>

            </div>

        </div>
    )
}