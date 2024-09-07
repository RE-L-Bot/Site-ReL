import sendMessageAPI from "@/scripts/sendMessageAPI"

export default function SendMessage({ opt, embedOption, selectMenuOption }) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <button style={{ height: "50px", borderRadius: "10px" }} onClick={(e) => sendMessageAPI(e, opt, embedOption, selectMenuOption)}>Send Message</button>
            </div>
        </div>
    )
}