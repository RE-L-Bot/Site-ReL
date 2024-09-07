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
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    command="generals ping"
                    profile="marciel404"
                >
                    Click here to see the command
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="My Latency"
                    color="#00008b"
                >

                    <DiscordEmbedDescription
                        style={{ marginTop: "8px" }}
                        slot="description"
                    >

                        <span>My latency is 73ms</span>

                        <br />

                        <span>The API latency is 24ms</span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>

    )
}