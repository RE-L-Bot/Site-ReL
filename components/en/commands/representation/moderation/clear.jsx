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

                <span>Starting</span>

            </DiscordMessage>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>
                    100 messages have been cleared in the <DiscordMention type="channel">general</DiscordMention> channel,
                    I cannot clear messages older than 14 days
                </span>

            </DiscordMessage>

        </DiscordMessages>
    )
}