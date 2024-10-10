import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import Hug from "./representation/roleplay/hug";
import Wave from "./representation/roleplay/wave";
import Applaud from "./representation/roleplay/applaud";
import Shoot from "./representation/roleplay/shoot";
import Kiss from "./representation/roleplay/kiss";
import Toast from "./representation/roleplay/toast";
import Headpat from "./representation/roleplay/headpat";
import Poke from "./representation/roleplay/poke";
import Dance from "./representation/roleplay/dance";
import Slap from "./representation/roleplay/slap";
import Shout from "./representation/roleplay/shout";
import Lick from "./representation/roleplay/lick";
import Airkiss from "./representation/roleplay/airkiss";
import Bite from "./representation/roleplay/bite";
import Blink from "./representation/roleplay/blink";
import Laugh from "./representation/roleplay/laugh";
import Hold_hand from "./representation/roleplay/hold_hand";
import Punch from "./representation/roleplay/punch";
import Smile from "./representation/roleplay/smile";
import Highfive from "./representation/roleplay/highfive";

export default function RolePlayCommands() {
    return (
        <div className="CommandsList">

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contenthug" onClick={(event) => changeDisplayNoneToAndResetAll(event, "hug", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandhug">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    hug
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Hugs a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandhug">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Detailed Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Hugs a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the bot will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to hug (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation:
                            </h4>

                            <Hug />

                        </div>

                    </div>

                </div>

            </div>


            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentwave" onClick={(event) => changeDisplayNoneToAndResetAll(event, "wave", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandwave">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    wave
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Waves at a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandwave">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Detailed Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Waves at a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the bot will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to wave at (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation:
                            </h4>

                            <Wave />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentapplaud" onClick={(event) => changeDisplayNoneToAndResetAll(event, "applaud", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandapplaud">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    applaud
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Applauds a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandapplaud">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Detailed Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Applauds a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the bot will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to applaud (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation:
                            </h4>

                            <Applaud />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentatirar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "atirar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandatirar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    shoot
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Shoots at a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandatirar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Shoots at a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to shoot at (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Shoot />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentbeijar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "beijar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandbeijar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    kiss
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Kisses a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandbeijar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Kisses a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to kiss (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Kiss />

                        </div>

                    </div>

                </div>

            </div>


            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentbrindar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "brindar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandbrindar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    toast
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Toasts with a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandbrindar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Toasts with a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to toast with (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Toast />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentcafuné" onClick={(event) => changeDisplayNoneToAndResetAll(event, "cafuné", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandcafuné">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    headpat
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Gives a headpat to a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandcafuné">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Gives a headpat to a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to headpat (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Headpat />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentcutucar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "cutucar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandcutucar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    poke
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Pokes a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandcutucar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Pokes a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to poke (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Poke />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentdançar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "dançar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expanddançar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    dance
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Dances with a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommanddançar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Sends an anime embed dancing and saying you are dancing <br />
                                ° with a member
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to dance with (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Dance />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentestapear" onClick={(event) => changeDisplayNoneToAndResetAll(event, "estapear", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandestapear">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    slap
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Slaps a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandestapear">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Slaps a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to slap (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Slap />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentgritar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "gritar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandgritar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    shout
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Shouts at a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandgritar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Shouts at a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to shout at (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Shout />

                        </div>

                    </div>

                </div>

            </div>


            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentlamber" onClick={(event) => changeDisplayNoneToAndResetAll(event, "lamber", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandlamber">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    lick
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Licks a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandlamber">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Licks a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to lick (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Lick />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentmandar_beijo" onClick={(event) => changeDisplayNoneToAndResetAll(event, "mandar_beijo", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandmandar_beijo">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    send_kiss
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Sends a kiss
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandmandar_beijo">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Sends a kiss to a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to send a kiss to (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Airkiss />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentmorder" onClick={(event) => changeDisplayNoneToAndResetAll(event, "morder", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandmorder">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    bite
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Bites a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandmorder">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Bites a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to bite (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Bite />

                        </div>

                    </div>

                </div>

            </div>


            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentpiscar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "piscar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandpiscar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    wink
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Winks at a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandpiscar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Gives a wink to a member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to wink at (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Blink />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentrir" onClick={(event) => changeDisplayNoneToAndResetAll(event, "rir", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandrir">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    laugh
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Laughs at a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandrir">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Laughs at a member's face <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to laugh at (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Laugh />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentsegurar_mão" onClick={(event) => changeDisplayNoneToAndResetAll(event, "segurar_mão", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandsegurar_mão">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    hold_hand
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Holds a member's hand
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandsegurar_mão">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Holds the hand of a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to hold hands with (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Hold_hand />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentsocar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "socar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandsocar">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    punch
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Punches a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandsocar">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Throws a punch at a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to punch (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Punch />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentsorrir" onClick={(event) => changeDisplayNoneToAndResetAll(event, "sorrir", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandsorrir">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    smile
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Smiles at a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandsorrir">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Smiles at a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to smile at (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Smile />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contenttoca_aqui" onClick={(event) => changeDisplayNoneToAndResetAll(event, "toca_aqui", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandtoca_aqui">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    highfive
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Does a highfive with a member
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">

                            <p className="CategoryCommandRoleplay sobDiv">
                                Roleplay
                            </p>

                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandtoca_aqui">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Long Description:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Does a highfive with a desired member <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Notes:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Depending on the mentioned member, the RE will send a different message<br />
                                ° and will have a response
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Arguments:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Member: Member to highfive with (Required) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Command Representation
                            </h4>

                            <Highfive />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}