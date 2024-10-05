import TopMenu from "@/components/br/TopMenu";
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
                    <h4>
                        Configure um chat para cada log para ajudar você e sua <br />
                        equipe no gerenciamento da sua cominudade
                    </h4>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3>
                                    Logs de mensagem deletada
                                </h3>

                                <h6 className="descriptionOptions">
                                    Assim que tiver alguma atualização de mensagens, o bot enviara <br />
                                    uma embed neste canal informando sobre a mensagem e as <br />
                                    informações da mensagem
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
                                <option value="false">Selecione um canal</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3>
                                    Logs de Microfone/Audio
                                </h3>

                                <h6 className="descriptionOptions">
                                    Quando alguem fazer qualquer alteração no estado de voz <br />
                                    seja ele, ensurdecer, desensurdecer, mutar ou desmutar <br />
                                    o bot avisara neste canal
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
                                <option value="false">Selecione um canal</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3>
                                    Logs de Video
                                </h3>

                                <h6 className="descriptionOptions">
                                    Assim que o usuario ligar a camera, desligar a camera,<br />
                                    começar a streamar  ou parar de streamar o bot enviara <br />
                                    uma mensagem neste canal
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
                                <option value="false">Selecione um canal</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3>
                                    Logs de Call
                                </h3>

                                <h6 className="descriptionOptions">
                                    Assim que o usuario entrar, sair ou mudar de call,<br />
                                    o bot enviara uma mensagem neste canal
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
                                <option value="false">Selecione um canal</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3>
                                    Ticket Log
                                </h3>

                                <h6 className="descriptionOptions">
                                    Assim que um ticket for encerrado, o bot enviara o<br />
                                    transcript para este canal
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
                                <option value="false">Selecione um canal</option>
                            </select>

                        </div>

                    </div>

                    <div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>

                            <div>

                                <h3>
                                    Logs de Registro
                                </h3>

                                <h6 className="descriptionOptions">
                                    Assim que um membro for registrado, o bot enviara uma embed<br />
                                    neste canal dizendo que o membro foi registrado, quem registrou<br />
                                    e quando foi registrado
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
                                <option value="false">Selecione um canal</option>
                            </select>

                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "end", padding: "5px", marginTop: "10px" }}>
                        <button className="buttonSave" onClick={saveLogs}>Salvar</button>
                    </div>

                </div>

            </div>

        </div>
    )
}