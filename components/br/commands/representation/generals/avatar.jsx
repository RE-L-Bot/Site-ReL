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

            <h3>Caso 1</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="gerais avatar"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Avatar de marciel404"
                    image="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
                    color="#00008b"
                >

                    <DiscordEmbedDescription
                        style={{ marginTop: "8px" }}
                        slot="description"
                    >
                        Clique <DiscordLink
                            target="_blank"
                            href="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
                        >
                            aqui
                        </DiscordLink> para baixar a imagem

                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

            <h3>Caso 2</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="gerais avatar"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Avatar de marciel404"
                    image="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
                    color="#00008b"
                >

                    <DiscordEmbedDescription
                        style={{ marginTop: "8px" }}
                        slot="description"
                    >
                        Clique <DiscordLink
                            target="_blank"
                            href="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
                        >
                            aqui
                        </DiscordLink> para baixar a imagem

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton type="primary" onClick={() => document.getElementById("message-ephemeral-avatar").style.display = "block"}>
                            Avatar de Usuario
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
                        style={{ marginLeft: "56px" }}
                        slot="reply"
                        command
                        profile="RELBOT"
                        timestamp="30/08/2024 13:00"
                    >
                        Clique aqui para ver o comando
                    </DiscordReply>

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Avatar de marciel404"
                        image="https://th.bing.com/th/id/OIP.ukEgUEXdqDKRvAlKPESkSQHaFY?rs=1&pid=ImgDetMain"
                        color="#00008b"
                    >

                        <DiscordEmbedDescription
                            style={{ marginTop: "8px" }}
                            slot="description"
                        >
                            Clique <DiscordLink
                                target="_blank"
                                href="https://th.bing.com/th/id/OIP.ukEgUEXdqDKRvAlKPESkSQHaFY?rs=1&pid=ImgDetMain"
                            >
                                aqui
                            </DiscordLink> para baixar a imagem

                        </DiscordEmbedDescription>

                    </DiscordEmbed>

                </DiscordMessage>

            </div>

        </DiscordMessages>
    )
}