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
                                    banir
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Bane membros do seu servidor
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandbanir">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Bane varios membros do seu servidor ao mesmo tempo <br />
                                ° sendo mass ban nativamente
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Observações:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° A Re ira informar membro por membro caso ela não consiga banir <br />
                                ° antes de iniciar todo o processo de ban para evitar dor de cabeça <br />
                                ° e problemas
                                ° Bane membros mesmo o usuario estando fora do servidor
                                ° Identifica quando o id enviado não é id de um usuario
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Motivo: Motivo de banir os membros (Opcional)
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
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
                                    Limpa as mensagens de um chat
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandclear">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Limpa uma certa quantia de mensagens de um canal no seu <br />
                                ° servidor
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Observações:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Por limitações do discord a Re só é capaz de apagar 100 em 100 <br />
                                ° mensagens e mensagens com menos de 14 dias <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° qnt: Quantidade de mensagens a limpar (Necessário) <br />
                                ° canal: Canal para apagar as mensagens (Opcional)
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
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
                                    Disconecta um membro de uma call
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandforce_disconect">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Desconecta um membro de uma call que ele esteja <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Membro: Membro a desconectar da call (Necessário)
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
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
                                    Move um membro para outra call
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandforce_move">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Move um membro de call para outra caso a call não esteja <br />
                                ° lotada
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Membro: Membro a desconectar da call (Necessário) <br />
                                ° Canal: Canal para mover o membro (Necessário)
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
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
                                    expulsar
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Expulsa membros do servidor
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandkick">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Expulsa varios membros do seu servidor ao mesmo tempo <br />
                                ° sendo mass kick nativamente
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Motivo: Motivo de expulsa os membros (Necessário) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
                            </h4>

                            <Kick />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentmmd" onClick={(event) => changeDisplayNoneToAndResetAll(event, "mmd", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandmmd">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    deletar_mensagens_de_membro
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Deleta as mensagens de um membro
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandmmd">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Deletas mensagens de um membro expecifico em 1 ou <br />
                                ° todos os canais do servidor
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Membro: Membro para apagar as mensagens (Necessário) <br />
                                ° Canal: Canal a apagar as mensagens (Se vazio apaga em todos) (Opcional)
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
                            </h4>

                            <Dmdmb />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentsetLang" onClick={(event) => changeDisplayNoneToAndResetAll(event, "setLang", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandsetLang">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    definir_idioma
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Define qual idioma sera enviado as mensagens do bot
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandsetLang">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Define em qual idioma ser enviadas as mensagens da RE <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Idiomas: Idioma a definir (Necessário) <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
                            </h4>

                            <SetLanguage />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentsetsetLogs" onClick={(event) => changeDisplayNoneToAndResetAll(event, "setsetLogs", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandsetsetLogs">
                                expand_more
                            </i>

                            <div>

                                <h3 style={{ margin: 0 }}>
                                    set_logs
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Define as logs do bot
                                </p>

                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandModeration sobDiv">
                                Moderação
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandsetsetLogs">

                        <div>

                            <h4 style={{ margin: 0 }}>
                                Descrição longa:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Define os chats das logs da RE <br />
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Argumentos:
                            </h4>

                            <h5 style={{ margin: 0 }}>
                                ° Log: Log a ser definida (Necessário) <br />
                                ° Channel: Canal para definir as logs (Se vazio remove a log) - (Opcional)
                            </h5>

                            <h4 style={{ margin: 0 }}>
                                Representação do comando:
                            </h4>

                            <SetLogs />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}