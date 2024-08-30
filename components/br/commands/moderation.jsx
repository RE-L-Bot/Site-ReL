import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import {
    DiscordMessage,
    DiscordAttachments,
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordActionRow,
    DiscordButton,
    DiscordEmbedFields,
    DiscordEmbedField,
    DiscordMention,
    DiscordMessages
} from "@skyra/discord-components-react";

export default function ModerationCommands() {
    return (

        <main className="CommandsList">

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentbanir" onClick={(event) => changeDisplayNoneToAndResetAll(event, "banir", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandbanir">
                                expand_more
                            </i>

                            <div>

                                <h3>
                                    banir
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Bane varios membros do seu servidor ao mesmo tempo <br />
                                ° sendo mass ban nativamente
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° A Re ira informar membro por membro caso ela não consiga banir <br />
                                ° antes de iniciar todo o processo de ban para evitar dor de cabeça <br />
                                ° e problemas
                                <br />
                                <br />
                                ° Bane membros mesmo o usuario estando fora do servidor
                                <br />
                                <br />
                                ° Identifica quando o id enviado não é id de um usuario
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Motivo: Motivo de banir os membros (Opcional)
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                >
                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="banir"
                                    ></DiscordCommand>

                                    <span>Envie os ids dos membros um em baixo do outro</span>

                                </DiscordMessage>

                                <DiscordMessage
                                    profile="marciel404"
                                    highlight
                                    timestamp="30/08/2024 13:00"
                                >

                                    <span><DiscordMention>RE=L</DiscordMention></span> <br />

                                    <span><DiscordMention>marciel404</DiscordMention></span> <br />

                                    <span>1044742053252313199</span> <br />

                                    <span>1044742053252313855</span> <br />

                                    <span><DiscordMention>Bagre Samurai</DiscordMention></span> <br />

                                    <span>536586433595441163</span>

                                </DiscordMessage>

                                <h4>
                                    Caso 1
                                </h4>

                                <hr />

                                <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:00">

                                    <span>Não consigo banir o membro <DiscordMention>RE=L</DiscordMention></span> <br />

                                </DiscordMessage>

                                <DiscordMessage profile="RELBOT" messageBodyOnly highlight timestamp="13:01">

                                    <span>Não consigo banir o membro <DiscordMention>marciel404</DiscordMention></span>

                                </DiscordMessage>

                                <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                                    <span>1044742053252313199 não é um usuario</span>

                                </DiscordMessage>

                                <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                                    <span>1044742053252313855 não é um usuario</span>

                                </DiscordMessage>

                                <h4>
                                    Caso 2
                                </h4>

                                <hr />

                                <div id="message-ban-confirm">

                                    <DiscordMessage profile="RELBOT" edited timestamp="30/08/2024 13:00">

                                        <DiscordCommand
                                            style={{ marginLeft: "56px" }}
                                            slot="reply"
                                            profile="marciel404"
                                            command="banir"
                                        ></DiscordCommand>

                                        <DiscordEmbed slot="embeds" embedTitle="Banimento">

                                            <DiscordEmbedDescription slot="description">

                                                <DiscordMention>Bagre Samurai</DiscordMention><br />

                                                <span>durateston_e_trembolona 536586433595441163</span>

                                            </DiscordEmbedDescription>

                                            <DiscordEmbedFields slot="fields">

                                                <DiscordEmbedField fieldTitle="Motivo">
                                                    Links maliciosos
                                                </DiscordEmbedField>

                                            </DiscordEmbedFields>

                                        </DiscordEmbed>

                                        <DiscordAttachments slot="components">

                                            <DiscordActionRow>

                                                <DiscordButton type="destructive" onClick={
                                                    () => {
                                                        document.getElementById("message-ban-confirm").style.display = "none"
                                                        document.getElementById("message-sucess-ban").style.display = "block"
                                                    }
                                                }>
                                                    ✔
                                                </DiscordButton>

                                                <DiscordButton type="destructive">
                                                    ✖
                                                </DiscordButton>

                                            </DiscordActionRow>

                                        </DiscordAttachments>

                                    </DiscordMessage>

                                </div>

                                <div id="message-sucess-ban" style={{ display: "none" }} >

                                    <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:03">
                                        <DiscordMention>marciel404</DiscordMention><br />
                                        <span>Membros Banidos com Sucesso</span>
                                    </DiscordMessage>

                                </div>

                            </DiscordMessages>

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

                                <h3>
                                    clear
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Limpa uma certa quantia de mensagens de um canal no seu <br />
                                ° servidor
                            </h5>

                            <br />

                            <h4>
                                Observações:
                            </h4>

                            <h5>
                                ° Por limitações do discord a Re só é capaz de apagar 100 em 100 <br />
                                ° mensagens e mensagens com menos de 14 dias <br />
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° qnt: Quantidade de mensagens a limpar (Necessário) <br />
                                ° canal: Canal para apagar as mensagens (Opcional)
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                    ephemeral
                                >
                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="clear"
                                    ></DiscordCommand>

                                    <span>Começando</span>

                                </DiscordMessage>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                >

                                    <span>
                                        Foram limpas 100 mensagens no canal <DiscordMention type="channel">geral</DiscordMention>,
                                        não consigo limpar mensagens mais velhas que 14 dias
                                    </span>

                                </DiscordMessage>

                            </DiscordMessages>

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

                                <h3>
                                    force_disconect
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Desconecta um membro de uma call que ele esteja <br />
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro a desconectar da call (Necessário)
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <h4>
                                    Caso 1
                                </h4>

                                <hr />

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                    highlight
                                >

                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="force_disconect"
                                    ></DiscordCommand>

                                    <span>
                                        O membro <DiscordMention>marciel404</DiscordMention> não está em uma call
                                    </span>

                                </DiscordMessage>

                                <h4>
                                    Caso 2
                                </h4>

                                <hr />

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                    highlight
                                >

                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="force_disconect"
                                    ></DiscordCommand>

                                    <span>
                                        <DiscordMention>marciel404</DiscordMention> desconectado com sucesso
                                    </span>

                                </DiscordMessage>

                            </DiscordMessages>

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

                                <h3>
                                    force_move
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Move um membro de call para outra caso a call não esteja <br />
                                ° lotada
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro a desconectar da call (Necessário) <br />
                                ° Canal: Canal para mover o membro (Necessário)
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <h4>
                                    Caso 1
                                </h4>

                                <hr />

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                    highlight
                                >

                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="force_disconect"
                                    ></DiscordCommand>

                                    <span>
                                        O membro <DiscordMention>marciel404</DiscordMention> não está em uma call
                                    </span>

                                </DiscordMessage>

                                <h4>
                                    Caso 2
                                </h4>

                                <hr />

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                    highlight
                                >

                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="force_disconect"
                                    ></DiscordCommand>

                                    <span>
                                        <DiscordMention>marciel404</DiscordMention> desconectado com sucesso para a call <DiscordMention type="voice">⭐ Reunião</DiscordMention>
                                    </span>

                                </DiscordMessage>

                            </DiscordMessages>

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

                                <h3>
                                    expulsar
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Expulsa varios membros do seu servidor ao mesmo tempo <br />
                                ° sendo mass kick nativamente
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Motivo: Motivo de expulsa os membros (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                >
                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="expulsar"
                                    ></DiscordCommand>

                                    <span>Envie os ids dos membros um em baixo do outro</span>

                                </DiscordMessage>

                                <DiscordMessage
                                    profile="marciel404"
                                    highlight
                                    timestamp="30/08/2024 13:00"
                                >

                                    <span><DiscordMention>RE=L</DiscordMention></span> <br />

                                    <span><DiscordMention>marciel404</DiscordMention></span> <br />

                                    <span>1044742053252313199</span> <br />

                                    <span>1044742053252313855</span> <br />

                                    <span><DiscordMention>Bagre Samurai</DiscordMention></span> <br />

                                    <span>536586433595441163</span>

                                </DiscordMessage>

                                <h4>
                                    Caso 1
                                </h4>

                                <hr />

                                <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:00">

                                    <span>Não consigo expulsar o membro <DiscordMention>RE=L</DiscordMention></span> <br />

                                </DiscordMessage>

                                <DiscordMessage profile="RELBOT" messageBodyOnly highlight timestamp="13:01">

                                    <span>Não consigo expulsar o membro <DiscordMention>marciel404</DiscordMention></span>

                                </DiscordMessage>

                                <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                                    <span>1044742053252313199 não é um usuario</span>

                                </DiscordMessage>

                                <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                                    <span>1044742053252313855 não é um usuario</span>

                                </DiscordMessage>

                                <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                                    <span>536586433595441163 não está no servidor</span>

                                </DiscordMessage>

                                <h4>
                                    Caso 2
                                </h4>

                                <hr />

                                <div id="message-kick-confirm">

                                    <DiscordMessage profile="RELBOT" edited timestamp="30/08/2024 13:00">

                                        <DiscordCommand
                                            style={{ marginLeft: "56px" }}
                                            slot="reply"
                                            profile="marciel404"
                                            command="expulsar"
                                        ></DiscordCommand>

                                        <DiscordEmbed slot="embeds" embedTitle="Expulsar">

                                            <DiscordEmbedDescription slot="description">

                                                <DiscordMention>Bagre Samurai</DiscordMention><br />

                                            </DiscordEmbedDescription>

                                            <DiscordEmbedFields slot="fields">

                                                <DiscordEmbedField fieldTitle="Motivo">
                                                    Para deixar de ser bobo
                                                </DiscordEmbedField>

                                            </DiscordEmbedFields>

                                        </DiscordEmbed>

                                        <DiscordAttachments slot="components">

                                            <DiscordActionRow>

                                                <DiscordButton type="destructive" onClick={
                                                    () => {
                                                        document.getElementById("message-kick-confirm").style.display = "none"
                                                        document.getElementById("message-sucess-kick").style.display = "block"
                                                    }
                                                }>
                                                    ✔
                                                </DiscordButton>

                                                <DiscordButton type="destructive">
                                                    ✖
                                                </DiscordButton>

                                            </DiscordActionRow>

                                        </DiscordAttachments>

                                    </DiscordMessage>

                                </div>

                                <div id="message-sucess-kick" style={{ display: "none" }} >

                                    <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:03">
                                        <DiscordMention>marciel404</DiscordMention><br />
                                        <span>Membros expulsos com Sucesso</span>
                                    </DiscordMessage>

                                </div>

                            </DiscordMessages>

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

                                <h3>
                                    deletar_mensagens_de_membro
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Deletas mensagens de um membro expecifico em 1 ou <br />
                                ° todos os canais do servidor
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro para apagar as mensagens (Necessário) <br />
                                ° Canal: Canal a apagar as mensagens (Se vazio apaga em todos) (Opcional)
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                    ephemeral
                                >
                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="deletar_mensagens_de_membro"
                                    ></DiscordCommand>

                                    <span>Começando</span>

                                </DiscordMessage>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                >

                                    <span>
                                        Pronto, foram apagadas 200 de marciel404
                                    </span>

                                </DiscordMessage>

                            </DiscordMessages>

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

                                <h3>
                                    definir_idioma
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Define em qual idioma ser enviadas as mensagens da RE <br />
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Idiomas: Idioma a definir (Necessário) <br />
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                >
                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="set_lang"
                                    ></DiscordCommand>

                                    <span>Okay, agora falarei português</span>

                                </DiscordMessage>

                            </DiscordMessages>

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

                                <h3>
                                    set_logs
                                </h3>

                                <p>
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

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Define os chats das logs da RE <br />
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Log: Log a ser definida (Necessário) <br />
                                ° Channel: Canal para definir as logs (Se vazio remove a log) - (Opcional)
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <DiscordMessages style={{ borderRadius: "5px" }}>

                                <DiscordMessage
                                    profile="RELBOT"
                                    timestamp="30/08/2024 13:00"
                                >
                                    <DiscordCommand
                                        style={{ marginLeft: "56px" }}
                                        slot="reply"
                                        profile="marciel404"
                                        command="set_log"
                                    ></DiscordCommand>

                                    <span>
                                        Log definida com sucesso
                                    </span>

                                </DiscordMessage>

                            </DiscordMessages>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    )
}