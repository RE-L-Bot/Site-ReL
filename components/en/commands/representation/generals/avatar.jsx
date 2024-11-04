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
    DiscordReply
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <h3 style={{ margin: 0 }}>Caso 1</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    
                    slot="reply"
                    profile="marciel404"
                    command="generals avatar"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Avatar of marciel404"
                    image="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                    color="#00008b"
                >

                    <DiscordEmbedDescription
                        style={{ marginTop: "8px" }}
                        slot="description"
                    >
                        Click <DiscordLink
                            target="_blank"
                            href="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        >
                            here
                        </DiscordLink> to download the image

                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Caso 2</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    
                    slot="reply"
                    profile="marciel404"
                    command="generals avatar"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Avatar of marciel404"
                    image="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                    color="#00008b"
                >

                    <DiscordEmbedDescription
                        style={{ marginTop: "8px" }}
                        slot="description"
                    >
                        Click <DiscordLink
                            target="_blank"
                            href="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        >
                            here
                        </DiscordLink> to download the image

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton type="primary" onClick={() => document.getElementById("message-ephemeral-avatar").style.display = "block"}>
                            User Avatar
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

            <div id="message-ephemeral-avatar" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                    dismissMessageClicked={() => document.getElementById("message-ephemeral-avatar").style.display = "none"}
                >
                    <DiscordReply
                        
                        slot="reply"
                        command
                        profile="RELBOT"
                        timestamp="30/08/2024 13:00"
                    >
                        Click here para ver o comando
                    </DiscordReply>

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Avatar of marciel404"
                        image="https://th.bing.com/th/id/OIP.ukEgUEXdqDKRvAlKPESkSQHaFY?rs=1&pid=ImgDetdiv"
                        color="#00008b"
                    >

                        <DiscordEmbedDescription
                            style={{ marginTop: "8px" }}
                            slot="description"
                        >
                            Click <DiscordLink
                                target="_blank"
                                href="https://th.bing.com/th/id/OIP.ukEgUEXdqDKRvAlKPESkSQHaFY?rs=1&pid=ImgDetdiv"
                            >
                                here
                            </DiscordLink> to download the image

                        </DiscordEmbedDescription>

                    </DiscordEmbed>

                </DiscordMessage>

            </div>

        </DiscordMessages>
    )
}