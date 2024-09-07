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
                    command="delete_member_messages"
                ></DiscordCommand>

                <span>Starting</span>

            </DiscordMessage>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>
                    Done, 200 messages from marciel404 have been deleted
                </span>

            </DiscordMessage>

        </DiscordMessages>

    )
}