import {
    ChangeV,
    SeeTypeSend,
    changeWebImg,
    changeWebName,
    SelectCategoriasChange,
    ChangeEnabled,
    SeeTypeTicket,
    ChangeEnabledNobackground,
    resolvePartialEmoji,
} from "@/scripts/changes";
import { addChannels } from "@/scripts/addChannelsSelect";
import {
    checkPremiumTicket
} from "@/scripts/checks";
import ToogleOff from "../globals/toogleOff";
import { range } from "@/scripts/outhers";
import { useState } from "react";

function onLoad() {
    checkPremiumTicket(window.location.pathname.split("/")[4])
    addChannels()
}

const InfosTicket = ({ selectmenusetter }) => {

    let channels = JSON.parse(sessionStorage.getItem("channelsGuild"))[1]

    const [options, setOptions] = useState([])

    const handlerOptionsChange = (qnt) => {
        const option = []
        if (options.length < 21)
            for (const v in range(0, parseInt(qnt))) {
                option.push({})
            }
        setOptions(option.slice())
        selectmenusetter({ options: option });
    }

    const handleLabelChange = (index, label) => {
        const newFields = options.slice();
        newFields[index].label = label;
        setOptions(newFields);
        selectmenusetter({ options: newFields });
    };

    const handleDescriptionChange = (index, description) => {
        const newFields = options.slice();
        newFields[index].description = description;
        setOptions(newFields);
        selectmenusetter({ options: newFields });
    };

    const handleValueChange = (index, value) => {
        const newFields = options.slice();
        newFields[index].value = `c${index}-${value}`;
        setOptions(newFields);
        selectmenusetter({ options: newFields });
    };

    const handleEmojiChange = (index, emoji) => {
        const newFields = options.slice();
        newFields[index].emoji = resolvePartialEmoji(emoji);
        setOptions(newFields);
        selectmenusetter({ options: newFields });
    };

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

                            <h4 style={{ margin: 0 }}>
                                Who will send it:
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

                        <div style={{ opacity: "50%" }}>

                            <h5 style={{ margin: 0 }}>
                                If the name and the image there in the message representation changes, don't worry, what counts is what is here
                            </h5>

                        </div>

                        <div id="ValuesWebhook">

                            <div style={{ display: "flex", alignItems: "center" }}>

                                <h4 style={{ margin: 0 }}>
                                    WebHook Name
                                </h4>

                                <input style={{ borderRadius: "5px" }} className="textNameWebhook" type="text" id="nameWebhook" maxLength={32} minLength={1} onChange={(e) => { changeWebName(e) }} />

                            </div>

                            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>

                                <h4 style={{ margin: 0 }}>
                                    Webhook image link
                                </h4>

                                <input style={{ borderRadius: "5px" }} className="textNameWebhook" type="text" id="imageWebhook" onChange={(e) => { changeWebImg(e) }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div id="noDropAllTOPIC" className="noDropAll" style={{ margin: "30px" }}>

                    <label className="SelectTypeSender" id="labelSelectTypeTicket">

                        <div>

                            <div id="EMOJIPREMUIMTOPIC">
                                🌟
                            </div>

                            <h4 style={{ margin: 0 }}>
                                Ticket Type:
                            </h4>

                            <h4 className="SenderName" id="TypeTicket">
                                Category
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

                            <h4 style={{ margin: 0 }}>
                                WebHook Name
                            </h4>

                            <input className="textNameWebhook" type="text" id="nameWebhook" maxLength={32} minLength={1} onChange={(e) => { changeWebName(e) }} />

                        </div>

                        <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>

                            <h4 style={{ margin: 0 }}>
                                Webhook image link
                            </h4>

                            <input className="textNameWebhook" type="text" id="imageWebhook" onChange={(e) => { changeWebImg(e) }} />

                        </div>

                    </div>

                </div>

                <div style={{ margin: "30px", justifyContent: "space-around", cursor: "default", flexWrap: "wrap" }} className="SelectTypeSender">

                    <div style={{ display: "block", alignText: "center" }}>

                        <h4 style={{ margin: 0 }}>
                            Number of topics
                        </h4>

                        <select name="tipo" id="SelectQnt" style={{ height: "42px", borderRadius: "5px" }} defaultValue={""} onChange={(e) => { handlerOptionsChange(e.target.value); SelectCategoriasChange(e) }}>

                            <option value="" disabled></option>

                        </select>

                    </div>

                    <div style={{ display: "block", alignText: "center" }}>

                        <h4 style={{ margin: 0 }}>
                            Which channel to send the message
                        </h4>

                        <select name="tipo" id="formsInfoTicketChannel" style={{ height: "42px", borderRadius: "5px" }} defaultValue={""}>

                            <option value="" disabled></option>

                        </select>

                    </div>

                    <div id="divCategories" style={{ gap: "5px" }} >

                        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "center" }}>

                            <div id="selectNameCategories">

                                {options.map((value, index) => (

                                    <div key={index}>

                                        <textarea
                                            key={index}
                                            id={`nameCategoria-${index}`}
                                            placeholder={`Select menu name ${index + 1}`}
                                            maxLength={100}
                                            className="noresize"
                                            style={{ width: "100px", borderRadius: "5px" }}
                                            onInput={(e) => handleLabelChange(index, e.target.value)}
                                        />

                                    </div>

                                ))}

                            </div>

                            <div id="selectDescriptionCategories" >

                                {options.map((value, index) => (

                                    <div key={index}>

                                        <textarea
                                            key={index}
                                            id={`descriptionCategoria-${index}`}
                                            placeholder={`Select menu description ${index + 1}`}
                                            maxLength={100}
                                            className="noresize"
                                            style={{ width: "100px", borderRadius: "5px" }}
                                            onInput={(e) => handleDescriptionChange(index, e.target.value)}
                                        />

                                    </div>

                                ))}

                            </div>

                            <div id="selectMenuEmoji" >

                                {options.map((value, index) => (

                                    <div key={index}>

                                        <textarea
                                            key={index}
                                            id={`emojiCategoria-${index}`}
                                            placeholder={`Select menu emoji ${index + 1}`}
                                            maxLength={100}
                                            className="noresize"
                                            style={{ width: "100px", borderRadius: "5px" }}
                                            onInput={(e) => handleEmojiChange(index, e.target.value)}
                                        />

                                    </div>

                                ))}

                            </div>

                            <div id="selectCategories">

                                {options.map((value, index) => (

                                    <div key={`${index}-div`}>

                                        <select key={`${index}-select`} className="selectChannelCategoria" defaultValue={""} style={{ width: "100px", height: "50px", borderRadius: "5px" }} onChange={e => handleValueChange(index, e.target.value)}>

                                            <option content="" value="" disabled>Select a category</option>

                                            {channels.map((value, index) => (

                                                (value.type === 4) ? <option key={`${index}-option`} value={`${value.id}`}>{value.name.substring(0, 19)}</option> : ""

                                            ))}

                                        </select>

                                    </div>

                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default InfosTicket;