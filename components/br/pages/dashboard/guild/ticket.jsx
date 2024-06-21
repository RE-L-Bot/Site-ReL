import EmbedContructor from "@/components/br/embedContructor";
import InfosTicket from "@/components/br/InfosTicket";
import SENDMESSAGE from "@/components/br/sendMessageButton";
import SenderMessage from "@/components/br/senderMessage";
import FormEmbed from "@/components/br/formEmbed";
import SelectMenus from "@/components/br/selectMenus";
import TopMenu from "@/components/br/TopMenu";
import { redirectStore } from "@/scripts/redirects";

export default function Ticket() {
    return (
        <div>

            <dialog id="premiumModal" style={{ backgroundColor: "#212121", color: "whitesmoke", width: "90%" }}>

                <form method="dialog">

                    <div style={{ padding: "20px" }}>

                        <h2>Função Premium</h2>

                        <div style={{ display: "flex", alignItems: "revert", flexWrap: "wrap-reverse", justifyContent: "center" }}>

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

                        <InfosTicket />

                        <div className="bodySendTicket">

                            <FormEmbed qnt="1" />

                            <div id="embed">

                                <div>

                                    <SenderMessage />

                                    <EmbedContructor qnt="1" />

                                    <SelectMenus />

                                    <SENDMESSAGE qnt="1" />

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

