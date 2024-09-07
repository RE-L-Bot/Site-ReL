import {
    DiscordCommand,
    DiscordCustomEmoji,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
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
                    command="generals serverinfo"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Server Information"
                    thumbnail="https://images-ext-1.discordapp.net/external/End4uqNSssZyzlEGItDQzbLy_kctiB5N0zS23FFXHQI/https/cdn.discordapp.com/icons/1153322679999397898/2758142f8364113ddeb3f40394a5fbcb.webp?format=webp"
                    color="#00008b"
                >

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"identificationemoji Name"} inline inlineIndex={1}>
                            RE=L (Support)
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"identificationemoji ID"} inline inlineIndex={2}>
                            1153322679999397898
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"owneryellowemoji Owner"} inline inlineIndex={3}>
                            marciel404 485801281621852175
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"membersemoji Members"} inline inlineIndex={1}>
                            21
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"listemoji Channels (39)"} inline inlineIndex={2}>

                            <DiscordCustomEmoji name="textchannelemoji">
                            </DiscordCustomEmoji> Text: 21 <br />

                            <DiscordCustomEmoji name="voicechannelemoji">
                            </DiscordCustomEmoji> Voice: 18

                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"dateemoji Created on"} inline inlineIndex={3}>
                            <DiscordTime>
                                September 18
                            </DiscordTime> <br />
                            <DiscordTime>
                                2023 at 10:32 AM (since
                            </DiscordTime> <br />
                            <DiscordTime>
                                {(Number(new Date().getFullYear()) - 2023)} {((Number(new Date().getFullYear()) - 2023) > 1) ? "years" : "year"})
                            </DiscordTime>
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"🛡 Security Level"} inline inlineIndex={1}>
                            Very High
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"start2emoji Joined on"} inline inlineIndex={2}>
                            <DiscordTime>
                                September 18
                            </DiscordTime> <br />
                            <DiscordTime>
                                2023 at 10:36 AM (since
                            </DiscordTime> <br />
                            <DiscordTime>
                                {(Number(new Date().getFullYear()) - 2023)} {((Number(new Date().getFullYear()) - 2023) > 1) ? "years" : "year"})
                            </DiscordTime>
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"rolesdiscordemoji Roles"} inline inlineIndex={3}>
                            78
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"😁 Emojis"} inline inlineIndex={1}>
                            0
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"🎞 Stickers"} inline inlineIndex={2}>
                            0
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"Sharid"} inline inlineIndex={3}>
                            0
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>
    )
}