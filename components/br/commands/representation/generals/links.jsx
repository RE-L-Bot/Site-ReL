import {
    DiscordActionRow,
    DiscordAttachments,
    DiscordButton,
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
                    
                    slot="reply"
                    profile="marciel404"
                    command="gerais links"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Meus links"
                    thumbnail="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
                    color="#00008b"
                >

                    <DiscordEmbedDescription
                        style={{ marginTop: "8px" }}
                        slot="description"
                    >

                        <span>Aqui estão meus links, só clicar nos botões para ser redirecionado</span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            type="secondary"
                            url="https://discord.com/api/oauth2/authorize?client_id=1018958083764002919&permissions=8&scope=bot%20applications.commands"
                        >

                            Clique aqui para me convidar

                        </DiscordButton>

                        <DiscordButton
                            type="secondary"
                            url="https://discord.gg/mmwUHd4Yzf"
                        >

                            Clique aqui para entrar no meu servidor de suporte

                        </DiscordButton>

                        <DiscordButton
                            type="secondary"
                            url="/br"
                        >

                            Clique aqui para ir para minha dashboard

                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

        </DiscordMessages>
    )
}