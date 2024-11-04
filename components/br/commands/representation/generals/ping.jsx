import {
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
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
                    
                    slot="reply"
                    command="gerais ping"
                    profile="marciel404"
                >
                    Clique aqui para ver o comando
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Minha latencia"
                    color="#00008b"
                >

                    <DiscordEmbedDescription
                        style={{ marginTop: "8px" }}
                        slot="description"
                    >

                        <span>Minha latencia é de 73ms</span>

                        <br />

                        <span>A latencia da api é 24ms</span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>
    )
}