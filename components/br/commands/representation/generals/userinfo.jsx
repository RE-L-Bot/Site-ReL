import {
    DiscordBold,
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordEmbedFooter,
    DiscordMention,
    DiscordMessage,
    DiscordMessages,
    DiscordTime
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
                    command="gerais userinfo"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="discordofflineemoji marciel404 • marciel404"
                    thumbnail="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
                    color="#00008b"
                >

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"identificationemoji Id"}>
                            485801281621852175
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"Informação do usuario"}>

                            <DiscordBold>Menção:</DiscordBold> <DiscordMention>
                                marciel404
                            </DiscordMention><br />

                            <DiscordBold>Conta criada em:</DiscordBold> <DiscordTime>
                                2 de setembro de 2018 às 10:20 (há {new Date().getFullYear() - 2018} anos)
                            </DiscordTime>

                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"Informações do servidor"}>

                            <DiscordBold>Entrou em:</DiscordBold> <br />

                            <DiscordTime>18 de setembro de 2023 às 10:32 (há {Number(new Date().getFullYear()) - 2023} {((Number(new Date().getFullYear()) - 2023) > 1) ? "anos" : "ano"})</DiscordTime>

                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"Maior cargo"}>

                            <DiscordMention>
                                Pai Da RE
                            </DiscordMention>

                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"Cargos"}>

                            <DiscordMention>
                                Pai Da RE
                            </DiscordMention>

                            <DiscordMention>
                                Suporte
                            </DiscordMention>

                            <DiscordMention color="#00fffd">
                                Developers
                            </DiscordMention>

                            <DiscordMention>
                                Admin
                            </DiscordMention>

                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFooter slot="footer">
                        485801281621852175
                    </DiscordEmbedFooter>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>
    )
}