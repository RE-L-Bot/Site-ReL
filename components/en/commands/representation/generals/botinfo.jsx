import {
    DiscordCommand,
    DiscordCustomEmoji,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordMention,
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
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="generals botinfo"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="My Information"
                    thumbnail="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
                    color="#00008b"
                >

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"identificationemoji Name"} inline inlineIndex={1}>
                            RE=L
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"vscodeemoji Language"} inline inlineIndex={2}>
                            <DiscordCustomEmoji name="jsemoji" />
                            JavaScript
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"════════════"}>
                            ════════════
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"djsemoji Library/Version"} inline inlineIndex={1}>
                            Discord.js/14.15.3
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"nodejsemoji NodeJs Version"} inline inlineIndex={2}>
                            v20.15.1
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"════════════"}>
                            ════════════
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"hugdiscordemoji Servers"} inline inlineIndex={1}>
                            250
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"membersemoji Total Members"} inline inlineIndex={2}>
                            14822
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"════════════"}>
                            ════════════
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"owneryellowemoji My Owner"} inline inlineIndex={1}>
                            <DiscordMention>
                                marciel404
                            </DiscordMention>
                            (Marciel404)
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"membersemoji Total Members"} inline inlineIndex={2}>
                            14822
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"════════════"}>
                            ════════════
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"botemoji Bot Version"} inline inlineIndex={1}>
                            4.0.0
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>

    )
}