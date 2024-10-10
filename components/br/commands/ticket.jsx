import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import Set_role_ticket from "./representation/ticket/set_role_ticket";
import Setup_ticket from "./representation/ticket/setup_ticket";

const nameCatCommand = "ticket"

export default function TicketCommands() {
    return (
        <div className="CommandsList">

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentaddrticket" onClick={(event) => changeDisplayNoneToAndResetAll(event, "addrticket", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandaddrticket">
                                expand_more
                            </i>

                            <div>
                                <h3 style={{ margin: 0 }}>
                                    definir_cargo_ticket
                                </h3>

                                <p style={{ margin: 0 }}>
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

                    <div className="InformationsCommand" id="InformationsCommandaddrticket">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Adiciona varios cargos aos overwrites do canal do ticket aberto
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
                            </h4>

                            <Set_role_ticket />

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
                                <h3 style={{ margin: 0 }}>
                                    setupticket
                                </h3>

                                <p style={{ margin: 0 }}>
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

                    <div className="InformationsCommand" id="InformationsCommandsetupTicket">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Envia uma mensagem dizendo que o comando foi migrado para <br />
                                ° a dashboard e um botão para te mandar para a dashboard
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
                            </h4>

                            <Setup_ticket />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}