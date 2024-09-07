import {
    DiscordCommand,
    DiscordMention,
    DiscordMessage,
    DiscordMessages
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <h4>
                Case 1
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
                    The member <DiscordMention>marciel404</DiscordMention> is not in a call
                </span>

            </DiscordMessage>

            <h4>
                Case 2
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
                    command="force_disconnect"
                ></DiscordCommand>

                <span>
                    <DiscordMention>marciel404</DiscordMention> successfully moved to the call <DiscordMention type="voice">⭐ Meeting</DiscordMention>
                </span>

            </DiscordMessage>

        </DiscordMessages>

    )
}