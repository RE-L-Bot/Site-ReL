import {
    DiscordActionRow,
    DiscordAttachments,
    DiscordButton,
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordLink,
    DiscordMessage,
    DiscordMessages,
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="definir_cargos_ticket"
                ></DiscordCommand>

                <span>
                    Este comando foi migrado para a dashboard temporaria <br />
                    <DiscordLink>
                        https://resitedev.squareweb.app/br/dashboard
                    </DiscordLink>
                </span>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="RE=L Bot • Dashboard"
                    url="https://resitedev.squareweb.app/br/dashboard"
                >

                    <DiscordEmbedDescription slot="description">
                        RE=L Bot discord
                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>
        </DiscordMessages>
    )
}