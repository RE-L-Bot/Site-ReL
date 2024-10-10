import EmbedContructor from "./embed/embedContructor";

export default function senderMessage() {
    return (
        <div>

            <div id="webhookMessage" style={{ display: "none" }}>

                <div className="perfilAlign">

                    <img id="imageWebTicket" src="/images/NOICONGUILD.jpeg" className="imageHW" alt="webhookImage" />

                    <p id="nameWebTicket">NameWebhook</p>

                    <div style={{ gap: "5px", height: "0.9375rem", padding: "0.275rem", marginTop: "0.075em", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#7289da", borderRadius: "5px" }}>

                        <h6 style={{ margin: 0 }}>
                            APP
                        </h6>

                    </div>

                </div>

            </div>

            <div id="reMessage">

                <div className="perfilAlign">

                    <img src="/svgs/RELCHIBI.svg" className="imageHW" alt="" />

                    <p>Re=L</p>

                    <div style={{ gap: "5px", height: "0.9375rem", padding: "0.275rem", marginTop: "0.075em", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#7289da", borderRadius: "5px" }}>

                        <h6 style={{ margin: 0 }}>
                            APP
                        </h6>

                        <i className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                            check_small
                        </i>

                    </div>

                </div>

            </div>

        </div>

    )

}