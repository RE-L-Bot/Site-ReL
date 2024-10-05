import FOOTER from "@/components/br/footers"
import HEADER from "@/components/br/headers"
import Registrar from "@/components/br/commands/representation/registry/registrar"
import Ticket from "@/components/br/ticketRepresentation"
import {
    redirectInfos,
    redirectInvite,
    redirectLogDash,
    redirectTerms
} from "@/scripts/redirects"

export default function HomeBr() {

    return (
        <div>

            <HEADER />

            <div className="FirstDivIndex">

                <div id="imgCIRE">

                    <img src="/images/RELINTEIRA.webp" alt="RE=L Magica" />

                </div>

                <div>

                    <div>

                        <h1>Re=L Bot</h1>

                        <h3>Um bot de discord para auxiliar seu servidor</h3>

                        <p>Transformando o difícil no fácil</p>

                    </div>

                    <div className="DivButtons">

                        <div style={{ margin: "5px" }}>

                            <button className="ButtonAddBot" onClick={redirectInvite}>+Me Adicione</button>

                            <button className="ButtonDashBoard" onClick={redirectLogDash}>Painel de controle</button>

                        </div>

                        <div>

                            <button className="ButtonTerms" onClick={redirectTerms}>Termos de uso</button>

                            <button className="ButtonInformation" onClick={redirectInfos}>🌟Informações</button>

                        </div>

                    </div>

                </div>

            </div>

            <div id="about" />

            <div className="SecondDivIndex">

                <div>

                    <h1>Eleve seu servidor a outro nivel</h1>

                    <br />

                    <p>
                        Servidores focados em interação com membros estão cada vez mais <br />
                        passando pelas mesmas coisas e os mesmos problemas. <br />
                        <br />

                        Novos membros gostam de interação e gostam de cargos <br />
                        representativos, e por membros quererem cargos é ai que a RE=L <br />
                        entra, a RE=L conta com uma ótima função para esses tipos de servidor <br />
                        uma função de "registrar" os membros, a RE automatiza o processo <br />
                        de ter que atribuir vários cargos de uma vez e melhor e cargos padrões <br />
                        E com funções de moderação e ticket

                        <br />
                        <br />

                    </p>

                    <h5>Tudo a baixo é personalizável, só esta assim para ilustrar</h5>

                </div>

                <img src="/svgs/RELCHIBI.svg" alt="RE=L Chibi" id="RELChibi" className="images" />

            </div>

            <div className="SecondDivIndex">

                <Registrar />

            </div>

            <div className="FourDivIndex">

                <img src="/svgs/RELINTEIRA2.svg" alt="RE=L Espada" style={{ height: "500px" }} id="reLInteira" />

                <div>

                    <h2>
                        Transforme seus tickets melhores do que nunca e mais bonito
                    </h2>

                    <br />

                    <p>
                        Com uma otima funcionalidade de poder estar usando webhooks <br />
                        seu ticket de atendimento ficara muito mais bonito e atrativo aos membros
                    </p>

                    <div>

                        <Ticket />

                    </div>

                </div>

            </div>

            <FOOTER />

        </div>
    )

}