import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";

const nameCatCommand = "ticket"

export default function TicketCommands() {
    return (
        <>

            <main className="CommandsList">

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentaddrticket" onClick={(event) => changeDisplayNoneToAndResetAll(event, "addrticket", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandaddrticket">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        definir_cargo_ticket
                                    </h3>

                                    <p>
                                        Adiciona cargos aos overwrites do ticket
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandTicket sobDiv">
                                    Ticket
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformarionsCommand" id="InformarionsCommandaddrticket">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Adiciona varios cargos aos overwrites do canal <br />
                                    ° do ticket aberto
                                </h5>

                                <br />

                                <h4>
                                    Imagens do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentsetupTicket" onClick={(event) => changeDisplayNoneToAndResetAll(event, "setupTicket", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandsetupTicket">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        setupticket
                                    </h3>

                                    <p>
                                        Te direciona para a dashboard
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandTicket sobDiv">
                                    Ticket
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformarionsCommand" id="InformarionsCommandsetupTicket">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Envia uma mensagem dizendo que o comando foi migrado para <br />
                                    ° a dashboard e um botão para te mandar para a dashboard
                                </h5>

                                <br />

                                <h4>
                                    Imagens do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </>
    )
}