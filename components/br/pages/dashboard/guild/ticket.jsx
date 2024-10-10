import InfosTicket from "@/components/br/InfosTicket";
import SENDMESSAGE from "@/components/br/sendMessageButton";
import SelectMenus from "@/components/br/embed/selectMenus";
import TopMenu from "@/components/br/TopMenu";
import { redirectStore } from "@/scripts/redirects";
import Head from "next/head";
import EmbedBuilder from "@/components/br/embed/EmbedBuilder";
import EmbedEditor from "@/components/br/embed/EmbedEditor";
import { useState } from "react";
import { DiscordMessages, DiscordMessage, DiscordReply, DiscordAttachments, DiscordActionRow, DiscordButton } from "@skyra/discord-components-react";

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

                        <h2>Função Premium</h2>

                        <div style={{
                            display: "flex",
                            alignItems: "revert",
                            flexWrap: "wrap-reverse",
                            justifyContent: "center"
                        }}>

                            <div style={{ maxWidth: "40%" }}>

                                <h4>Bep Bop, Parece que você encontrou uma função premium</h4>
                                <h5>Adquira premium e desbloqueie essa função e muito mais</h5>

                                <br />

                                <p>
                                    Assinando o premim você desbloqueia funcionalidades unicas, melhores
                                    e mais informações, sem contar tambem que você ajuda a me manter on-line
                                </p>

                                <br />

                                <h3>Algumas funções premium</h3>

                                <ul>
                                    <li>Ticket com WebHook</li>
                                    <li>Poder abrir mais categorias de ticket</li>
                                    <li>Mais cargos de registro</li>
                                    <li>Cargo de usuario premium no servidor de suporte</li>
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

                                <h4>Fechar</h4>

                            </div>

                        </button>

                        <button className="cursorPointerAll backgroundcColorReSite" style={{ borderRadius: "5px" }} onClick={redirectStore} >

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4>Comprar</h4>

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

                        <div className="embedBuilderDiv">

                            <EmbedEditor onEmbedChange={handleEmbedChange} />

                            <div id="embed">

                                <div>

                                    <DiscordMessages style={{ borderRadius: "5px" }}>

                                        <DiscordMessage id="AuthorMessage" profile="RELBOT">

                                            <EmbedBuilder embed={embed} />

                                            <SelectMenus selectmenus={selectMenu} />

                                        </DiscordMessage>

                                        <div id="div-opening-ticket" style={{ display: "none" }}>

                                            <DiscordMessage
                                                timestamp="30/08/2024 13:00"
                                                profile="RELBOT"
                                                ephemeral
                                            >

                                                <DiscordReply
                                                    style={{ marginLeft: "56px" }}
                                                    author="IVM (Ticket Express)"
                                                    avatar="https://images-ext-1.discordapp.net/external/nNVuKLahkkEPMoXf9_lDrbEyiSWImKzczdDsqsBnUwM/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9.webp?format=webp"
                                                    bot
                                                    slot="reply"
                                                    attachment
                                                >
                                                    Clique para ver anexo
                                                </DiscordReply>

                                                <span>Criando Ticket</span>

                                            </DiscordMessage>

                                            <DiscordMessage
                                                timestamp="30/08/2024 13:00"
                                                profile="RELBOT"
                                                ephemeral
                                            >

                                                <DiscordReply
                                                    style={{ marginLeft: "56px" }}
                                                    author="IVM (Ticket Express)"
                                                    avatar="https://images-ext-1.discordapp.net/external/nNVuKLahkkEPMoXf9_lDrbEyiSWImKzczdDsqsBnUwM/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9.webp?format=webp"
                                                    bot
                                                    slot="reply"
                                                    attachment
                                                >
                                                    Clique para ver anexo
                                                </DiscordReply>

                                                <span>Ticket criado com sucesso</span>

                                                <DiscordAttachments slot="components">

                                                    <DiscordActionRow>

                                                        <DiscordButton
                                                            type="secondary"
                                                        >

                                                            <div style={{ display: "flex", gap: "5px" }}>

                                                                <span>Atalho para o ticket</span>

                                                                <span>

                                                                    <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">

                                                                        <path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path>

                                                                        <path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path>

                                                                    </svg>

                                                                </span>

                                                            </div>

                                                        </DiscordButton>

                                                    </DiscordActionRow>

                                                </DiscordAttachments>

                                            </DiscordMessage>

                                        </div>

                                    </DiscordMessages>

                                    <SENDMESSAGE opt={{ qnt: "1" }} embedOption={embed} selectMenuOption={selectMenu} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <br />

            </div>

        </div>
    )

}
