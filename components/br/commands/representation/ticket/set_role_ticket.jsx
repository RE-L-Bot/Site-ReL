import {
    DiscordActionRow,
    DiscordAttachments,
    DiscordButton,
    DiscordCommand,
    DiscordMention,
    DiscordMessage,
    DiscordMessages,
    DiscordReply
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="definir_cargos_ticket"
                ></DiscordCommand>

                <span>Qual tipo você ira adicionar</span>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            type="primary"
                            onClick={() => { document.getElementById("next-step-ticket").style.display = "block" }}
                        >
                            Atendente
                        </DiscordButton>

                        <DiscordButton
                            type="primary"
                            onClick={() => { document.getElementById("next-step-ticket").style.display = "block" }}
                        >
                            Mencionado
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

            <div id="next-step-ticket" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                >

                    <DiscordReply
                        style={{ marginLeft: "56px" }}
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        Qual tipo ira adicionar
                    </DiscordReply>

                    <span>
                        Envie os ids dos cargos um embaixo do outro<br />
                        os antigos existentes serão substituidos
                    </span>

                </DiscordMessage>

                <DiscordMessage
                    profile="marciel404"
                    timestamp="30/08/2024 13:00"
                >

                    <span>930883757148364851</span> <br />
                    <span><DiscordMention role>Admin</DiscordMention></span> <br />
                    <span>123</span>

                </DiscordMessage>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                >

                    <DiscordReply
                        style={{ marginLeft: "56px" }}
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        Qual tipo ira adicionar
                    </DiscordReply>

                    <span>123 não é um cargo</span>

                </DiscordMessage>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                >

                    <DiscordReply
                        style={{ marginLeft: "56px" }}
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        Qual tipo ira adicionar
                    </DiscordReply>

                    <span>
                        Cargos setados com sucesso
                    </span>

                </DiscordMessage>

            </div>

        </DiscordMessages>
    )
}