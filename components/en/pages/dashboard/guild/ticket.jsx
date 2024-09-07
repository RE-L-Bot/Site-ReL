import InfosTicket from "@/components/en/InfosTicket";
import SENDMESSAGE from "@/components/en/sendMessageButton";
import SelectMenus from "@/components/en/embed/selectMenus";
import TopMenu from "@/components/en/TopMenu";
import { redirectStore } from "@/scripts/redirects";
import Head from "next/head";
import EmbedBuilder from "@/components/en/embed/EmbedBuilder";
import EmbedEditor from "@/components/en/embed/EmbedEditor";
import { useState } from "react";
import { DiscordMessages, DiscordMessage } from "@skyra/discord-components-react";

export default function Ticket() {

    const [embed, setEmbed] = useState({
        title: '',
        description: [""],
        authorName: "",
        authorUrl: "",
        authorImage: "",
        imageUrl: "",
        thumbnailUrl: "",
        color: '#0000ff',
        fields: [],
        url: ""
    });

    const [selectMenu, setSelectMenu] = useState({
        options: []
    })

    const handleOptionChange = (newOption) => {
        setSelectMenu(newOption)
    }

    const handleEmbedChange = (newEmbed) => {
        setEmbed(newEmbed);
    };

    return (
        <div>

            <Head>
                <title>RE=L Bot • Ticket Setup</title>
            </Head>

            <dialog id="premiumModal" style={{ backgroundColor: "#212121", color: "whitesmoke", width: "90%" }}>

                <form method="dialog">

                    <div style={{ padding: "20px" }}>

                        <h2>Premium Function</h2>

                        <div style={{
                            display: "flex",
                            alignItems: "revert",
                            flexWrap: "wrap-reverse",
                            justifyContent: "center"
                        }}>

                            <div style={{ maxWidth: "40%" }}>

                                <h4>Bep Bop, Looks like you've found a premium function</h4>
                                <h5>Purchase premium and unlock this function and more</h5>

                                <br />

                                <p>
                                    By subscribing to premim you unlock unique, better features
                                    and more information, not to mention that you help keep me online
                                </p>

                                <br />

                                <h3>Some premium features</h3>

                                <ul>
                                    <li>Ticket with WebHook</li>
                                    <li>Being able to open more ticket categories</li>
                                    <li>More Registration Positions</li>
                                    <li>Premium user role on the support server</li>
                                </ul>

                            </div>

                            <img src="/gifs/error404.gif" alt="" style={{ height: "225px", width: "225px", borderRadius: "30px" }} />

                        </div>

                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "5px", padding: "20px" }}>

                        <button className="cursorPointerAll" style={{ borderRadius: "5px" }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px" }}>

                                <i className="material-symbols-outlined">
                                    close
                                </i>

                                <h4>Close</h4>

                            </div>

                        </button>

                        <button className="cursorPointerAll backgroundcColorReSite" style={{ borderRadius: "5px" }} onClick={redirectStore} >

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4>Buy</h4>

                            </div>

                        </button>

                    </div>

                </form>

            </dialog>

            <div className="alignItens">

                <TopMenu />

                <div>

                    <div>

                        <InfosTicket selectmenusetter={handleOptionChange} />

                        <div>

                            <EmbedEditor onEmbedChange={handleEmbedChange} />

                            <div id="embed">

                                <div>

                                    <DiscordMessages noBackground>

                                        <DiscordMessage id="AuthorMessage" profile="RELBOT">

                                            <EmbedBuilder embed={embed} />

                                            <SelectMenus selectmenus={selectMenu} />

                                        </DiscordMessage>

                                    </DiscordMessages>

                                    <SENDMESSAGE opt={{ qnt: "1" }} embedOption={embed} selectMenuOption={selectMenu} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <br />

                <br />

            </div>

        </div>
    )
}

