import {
    DiscordCommand,
    DiscordMention,
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
    )
}