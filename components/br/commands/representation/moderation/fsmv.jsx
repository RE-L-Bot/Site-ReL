import {
    DiscordCommand,
    DiscordMention,
    DiscordMessage,
    DiscordMessages
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <h4 style={{ margin: 0 }}>
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
                    command="force_move"
                ></DiscordCommand>

                <span>
                    O membro <DiscordMention>marciel404</DiscordMention> não está em uma call
                </span>

            </DiscordMessage>

            <h4 style={{ margin: 0 }}>
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
                    <DiscordMention>marciel404</DiscordMention> movido com sucesso para a call <DiscordMention type="voice">⭐ Reunião</DiscordMention>
                </span>

            </DiscordMessage>

        </DiscordMessages>
    )
}