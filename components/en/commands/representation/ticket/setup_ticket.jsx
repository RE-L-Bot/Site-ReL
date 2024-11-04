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
                    
                    slot="reply"
                    profile="marciel404"
                    command="set_roles_ticket"
                ></DiscordCommand>

                <span>
                    This command has been migrated to the temporary dashboard <br />
                    <DiscordLink>
                        https://resitedev.squareweb.app/en/dashboard
                    </DiscordLink>
                </span>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="RE=L Bot • Dashboard"
                    url="https://resitedev.squareweb.app/en/dashboard"
                >

                    <DiscordEmbedDescription slot="description">
                        RE=L Bot discord
                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>
        </DiscordMessages>

    )
}