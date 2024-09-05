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

const nameCatCommand = "roleplay"

export default function RolePlayCommands() {
    return (
        <div className="CommandsList">

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentabraçar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "abraçar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandabraçar">
                                expand_more
                            </i>

                            <div>

                                <h3>
                                    abraçar
                                </h3>

                                <p>
                                    Abraça um membro
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

                    <div className="InformationsCommand" id="InformationsCommandabraçar">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Abraça um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para abraçar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
                            </h4>

                            <Hug />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentacenar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "acenar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandacenar">
                                expand_more
                            </i>

                            <div>

                                <h3>
                                    acenar
                                </h3>

                                <p>
                                    Acena para um membro
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

                    <div className="InformationsCommand" id="InformationsCommandacenar">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Acena para um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para acenar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
                            </h4>

                            <Wave />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentaplaudir" onClick={(event) => changeDisplayNoneToAndResetAll(event, "aplaudir", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandaplaudir">
                                expand_more
                            </i>

                            <div>

                                <h3>
                                    aplaudir
                                </h3>

                                <p>
                                    Apalude um membro
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

                    <div className="InformationsCommand" id="InformationsCommandaplaudir">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Aplaude um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para aplaudir (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    atirar
                                </h3>

                                <p>
                                    Atira em um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Atira em um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para atirar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    beijar
                                </h3>

                                <p>
                                    Beija um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Beija um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para beijar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    brindar
                                </h3>

                                <p>
                                    Brinda com um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Brinda com um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para brindar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    cafuné
                                </h3>

                                <p>
                                    Faz um cafuné em um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Faz um cafuné em um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para fazer um cafuné (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    cutucar
                                </h3>

                                <p>
                                    Cutuca um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Cutuca um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para cutucar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    dançar
                                </h3>

                                <p>
                                    Dança com um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Manda uma embed de anime dançando e falando que você está dançando <br />
                                ° com um memnbro
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para dançar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    estapear
                                </h3>

                                <p>
                                    Estapeia um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Estapeia um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para estapear (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    gritar
                                </h3>

                                <p>
                                    Grita com um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Grita com um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para gritar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    lamber
                                </h3>

                                <p>
                                    Lambe um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Lambe um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para lamber (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    mandar_beijo
                                </h3>

                                <p>
                                    Manda um beijo
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Manda um beijo para um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para mandar um beijo (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    morder
                                </h3>

                                <p>
                                    Morde um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Morder um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para estapear (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    piscar
                                </h3>

                                <p>
                                    Pisca para um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Da uma piscadinha para um membro <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para dar uma piscadinha (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    rir
                                </h3>

                                <p>
                                    Ri de um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Ri da cara de um membro <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para dar rir (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    segurar_mão
                                </h3>

                                <p>
                                    Segura a mão de um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Segura a mão de um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para segurar a mão (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    socar
                                </h3>

                                <p>
                                    Soca um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Faz um highfive em com um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para socar (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    sorrir
                                </h3>

                                <p>
                                    Sorri para um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Sorri para um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para segurar a sorrir (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
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

                                <h3>
                                    toca_aqui
                                </h3>

                                <p>
                                    Faz um highfive com um membro
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Faz um highfive em com um membro desejado <br />
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Dependendo do membro mencionado a RE mandara uma mensagem diferente<br />
                                ° e tera uma resposta
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para bater (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando
                            </h4>

                            <Highfive />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}