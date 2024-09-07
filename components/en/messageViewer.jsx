import { changeContentMessage } from "../../scripts/changes";

export default function MESSAGEVIEWER() {

    return (

        <div className="message-group w-full" style={{ backgroundColor: "#2c2f33" }}>

            <div>
                <h3 className="text-white">Message Content</h3>
                <textarea className="text-black resize-y w-72 h-8" id="contentHtml" maxLength={2054} onChange={(c) => changeContentMessage(c)} />
            </div>

        </div >
    )
}