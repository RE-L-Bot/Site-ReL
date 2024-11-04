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
            >
                <DiscordCommand
                    
                    slot="reply"
                    profile="marciel404"
                    command="set_log"
                ></DiscordCommand>

                <span>
                    Log definida com sucesso
                </span>

            </DiscordMessage>

        </DiscordMessages>
    )
}