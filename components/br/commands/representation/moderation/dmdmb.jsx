import {
    DiscordCommand,
    DiscordMessage,
    DiscordMessages
} from "@skyra/discord-components-react";

export default function () {
    return (
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
    )
}