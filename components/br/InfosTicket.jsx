import {
    ChangeV,
    SeeTypeSend,
    changeWebImg,
    changeWebName,
    SelectCategoriasChange,
    ChangeEnabled,
    SeeTypeTicket,
    ChangeEnabledNobackground,
} from "@/scripts/changes";
import { addChannels } from "@/scripts/addChannelsSelect";
import {
    checkPremiumTicket
} from "@/scripts/checks";
import ToogleOff from "../globals/toogleOff";

function onLoad() {
    checkPremiumTicket(window.location.pathname.split("/")[4])
    addChannels()
}

export default function InfosTicket() {

    return (

        <div onLoad={onLoad()}>

            <h2 style={{ textAlign: "center" }}>Informações Ticket</h2>

            <div id="Selects">

                <div id="noDropAllSENDERMSG" className="noDropAll" style={{ margin: "30px" }}>

                    <label className="SelectTypeSender" id="labelSelectSender">

                        <div>

                            <div id="EMOJIPREMUIMSENDERMSG">
                                🌟
                            </div>

                            <h4>
                                Quem enviara:
                            </h4>

                            <h4 className="SenderName" id="SenderName">
                                Bot
                            </h4>

                        </div>

                        <div>

                            <input type="checkbox" id="checkBox" disabled className="checkWebhookSender noDrop" onChange={(e) => { SeeTypeSend(e), ChangeEnabled(e, 1) }} />

                            <div>
                                <ToogleOff qnt={1} />
                            </div>

                        </div>

                    </label>

                    <div className="infosWebHook" id="divInfosWeb">

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h4>
                                Nome do WebHook
                            </h4>
                            <input className="textNameWebhook" type="text" id="nameWebhook" maxLength={32} minLength={1} onChange={(e) => { changeWebName(e) }} />
                        </div>

                        <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
                            <h4>
                                Link da imagem do webhook
                            </h4>
                            <input className="textNameWebhook" type="text" id="imageWebhook" onChange={(e) => { changeWebImg(e) }} />
                        </div>

                    </div>

                </div>

                <div id="noDropAllTOPIC" className="noDropAll" style={{ margin: "30px" }}>

                    <label className="SelectTypeSender" id="labelSelectTypeTicket">

                        <div>

                            <div id="EMOJIPREMUIMTOPIC">
                                🌟
                            </div>

                            <h4>
                                Tipo do ticket:
                            </h4>

                            <h4 className="SenderName" id="TypeTicket">
                                Categoria
                            </h4>

                        </div>

                        <div>

                            <input type="checkbox" id="checkBox" disabled className="checkTypeTicket" onChange={(e) => { SeeTypeTicket(e), ChangeEnabledNobackground(e, 2), ChangeV(e) }} />

                            <div>
                                <ToogleOff qnt={2} />
                            </div>

                        </div>

                    </label>

                    <div className="infosWebHook" id="divInfosWeb">

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h4>
                                Nome do WebHook
                            </h4>
                            <input className="textNameWebhook" type="text" id="nameWebhook" maxLength={32} minLength={1} onChange={(e) => { changeWebName(e) }} />
                        </div>

                        <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
                            <h4>
                                Link da imagem do webhook
                            </h4>
                            <input className="textNameWebhook" type="text" id="imageWebhook" onChange={(e) => { changeWebImg(e) }} />
                        </div>

                    </div>

                </div>

                <div style={{ margin: "30px", justifyContent: "space-around", cursor: "default", flexWrap: "wrap" }} className="SelectTypeSender">

                    <div style={{ display: "block", alignText: "center" }}>

                        <h4>
                            Quantidade de topicos
                        </h4>

                        <select name="tipo" id="SelectQnt" style={{ height: "42px", borderRadius: "5px" }} defaultValue={""} onChange={(e) => { SelectCategoriasChange(e) }}>
                            <option value="" disabled></option>
                        </select>

                    </div>

                    <div style={{ display: "block", alignText: "center" }}>

                        <h4>
                            Qual canal enviara a mensagem
                        </h4>

                        <select name="tipo" id="formsInfoTicketChannel" style={{ height: "42px", borderRadius: "5px" }} defaultValue={""}>
                            <option value="" disabled></option>
                        </select>

                    </div>

                    <div id="divCategories" style={{ gap: "5px" }} >

                        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "center" }}>

                            <div id="selectNameCategories" />

                            <div id="selectDescriptionCategories" />

                            <div id="selectMenuEmoji" />

                            <div id="selectCategories" />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}