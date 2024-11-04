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
                    
                    slot="reply"
                    profile="marciel404"
                    command="generals userinfo"
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

                        <DiscordEmbedField fieldTitle={"User Information"}>

                            <DiscordBold>Mention:</DiscordBold> <DiscordMention>
                                marciel404
                            </DiscordMention><br />

                            <DiscordBold>Account Created On:</DiscordBold> <DiscordTime>
                                September 2, 2018 at 10:20 AM (since {new Date().getFullYear() - 2018} years ago)
                            </DiscordTime>

                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"Server Information"}>

                            <DiscordBold>Joined On:</DiscordBold> <br />

                            <DiscordTime>September 18, 2023 at 10:32 AM (since {Number(new Date().getFullYear()) - 2023} {((Number(new Date().getFullYear()) - 2023) > 1) ? "years" : "year"})</DiscordTime>

                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"Highest Role"}>

                            <DiscordMention>
                                Father of RE
                            </DiscordMention>

                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"Roles"}>

                            <DiscordMention>
                                Father of RE
                            </DiscordMention>

                            <DiscordMention>
                                Support
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