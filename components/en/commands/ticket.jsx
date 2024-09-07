import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import Set_role_ticket from "./representation/ticket/set_role_ticket";
import Setup_ticket from "./representation/ticket/setup_ticket";

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
                                <h3>
                                    set_role_ticket
                                </h3>

                                <p>
                                    Adds roles to ticket overwrites
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

                            <h4>
                                Long Description:
                            </h4>

                            <h5>
                                ° Adds multiple roles to the overwrites of the opened ticket channel
                            </h5>

                            <br />

                            <h4>
                                Command Representation:
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
                                <h3>
                                    setupticket
                                </h3>

                                <p>
                                    Redirects you to the dashboard
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

                            <h4>
                                Long Description:
                            </h4>

                            <h5>
                                ° Sends a message stating that the command has been moved to <br />
                                ° the dashboard along with a button to redirect you to the dashboard
                            </h5>

                            <br />

                            <h4>
                                Command Representation:
                            </h4>

                            <Setup_ticket />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}