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
                Case 1
            </h4>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
                highlight
            >

                <DiscordCommand
                    
                    slot="reply"
                    profile="marciel404"
                    command="force_disconnect"
                ></DiscordCommand>

                <span>
                    The member <DiscordMention>marciel404</DiscordMention> is not in a call
                </span>

            </DiscordMessage>

            <h4 style={{ margin: 0 }}>
                Case 2
            </h4>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
                highlight
            >

                <DiscordCommand
                    
                    slot="reply"
                    profile="marciel404"
                    command="force_disconnect"
                ></DiscordCommand>

                <span>
                    <DiscordMention>marciel404</DiscordMention> disconnected successfully
                </span>

            </DiscordMessage>

        </DiscordMessages>

    )
}