import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import Ban from "./representation/moderation/ban";
import Clear from "./representation/moderation/clear";
import Fsdc from "./representation/moderation/fsdc";
import Fsmv from "./representation/moderation/fsmv";
import Kick from "./representation/moderation/kick";
import Dmdmb from "./representation/moderation/dmdmb";
import SetLanguage from "./representation/moderation/setLanguage";
import SetLogs from "./representation/moderation/setLogs";

export default function ModerationCommands() {
    return (
        <div className="CommandsList">

            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentbanir" onClick={(event) => changeDisplayNoneToAndResetAll(event, "banir", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandbanir">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    ban
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Bans members from your server
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommandbanir">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Bans multiple members from your server at once <br />
                                ° performing mass bans natively
                            </h5>
                            <h4>
                                Notes:
                            </h4>
                            <h5>
                                ° Re will notify you member by member if she can't ban them <br />
                                ° before starting the whole banning process to avoid headaches and issues <br />
                                ° Bans members even if they are no longer in the server <br />
                                ° Detects when the ID provided is not a user ID
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° Reason: The reason for banning the members (Optional)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <Ban />
                        </div>
                    </div>
                </div>
            </div>
            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentclear" onClick={(event) => changeDisplayNoneToAndResetAll(event, "clear", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandclear">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    clear
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Clears messages from a chat
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommandclear">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Clears a certain amount of messages from a channel on your server
                            </h5>
                            <h4>
                                Notes:
                            </h4>
                            <h5>
                                ° Due to Discord limitations, Re can only delete 100 messages at a time <br />
                                ° and messages that are less than 14 days old
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° qnt: Number of messages to delete (Required) <br />
                                ° channel: Channel to delete messages from (Optional)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <Clear />
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentforce_disconect" onClick={(event) => changeDisplayNoneToAndResetAll(event, "force_disconect", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandforce_disconect">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    force_disconect
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Disconnects a member from a voice call
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommandforce_disconect">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Disconnects a member from a call they are in
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° Member: Member to disconnect from the call (Required)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <Fsdc />
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentforce_move" onClick={(event) => changeDisplayNoneToAndResetAll(event, "force_move", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandforce_move">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    force_move
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Moves a member to another call
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommandforce_move">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Moves a member from one call to another, provided the destination call is not full
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° Member: Member to move from the call (Required) <br />
                                ° Channel: Channel to move the member to (Required)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <Fsmv />
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentkick" onClick={(event) => changeDisplayNoneToAndResetAll(event, "kick", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandkick">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    kick
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Kicks members from the server
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommandkick">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Kicks multiple members from your server at once <br />
                                ° performing mass kick natively
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° Reason: The reason for kicking the members (Required)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <Kick />
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentset_language" onClick={(event) => changeDisplayNoneToAndResetAll(event, "set_language", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandset_language">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    set_language
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Sets Re's language
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommandset_language">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Sets Re's language for moderation commands
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° Language: The language to set for moderation commands (Required)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <SetLanguage />
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentset_logs" onClick={(event) => changeDisplayNoneToAndResetAll(event, "set_logs", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandset_logs">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    set_logs
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Sets the log channel
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommandset_logs">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Sets the channel where Re will send all moderation logs
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° Channel: The channel to set for logging moderation actions (Required)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <SetLogs />
                        </div>
                    </div>
                </div>
            </div>

            <div className="conjuntCommand">
                <div className="BodyCommand">
                    <div className="contentCommand" id="contentdm_dm_ban" onClick={(event) => changeDisplayNoneToAndResetAll(event, "dm_dm_ban", "flex")}>
                        <div className="NameAndDescriptionCommand">
                            <i className="material-symbols-outlined transitionShowCommands expand" id="expanddm_dm_ban">
                                expand_more
                            </i>
                            <div>
                                <h3 style={{ margin: 0 }}>
                                    dm_dm_ban
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Bans members from multiple servers
                                </p>
                            </div>
                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="BodyInformationCommand">
                    <div className="InformationsCommand" id="InformationsCommanddm_dm_ban">
                        <div>
                            <h4>
                                Long description:
                            </h4>
                            <h5>
                                ° Bans members from multiple servers simultaneously
                            </h5>
                            <h4>
                                Arguments:
                            </h4>
                            <h5>
                                ° Reason: The reason for banning the members (Required)
                            </h5>
                            <h4>
                                Command representation:
                            </h4>
                            <Dmdmb />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
