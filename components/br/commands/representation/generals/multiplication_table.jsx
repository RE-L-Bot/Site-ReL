import {
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
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
                    profile="marciel404"
                    slot="reply"
                    command="gerais tabuada"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    color="#00008b"
                >

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"10 x 1"} inline inlineIndex={1}>
                            10
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"10 x 2"} inline inlineIndex={2}>
                            20
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"10 x 3"} inline inlineIndex={3}>
                            30
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"10 x 4"} inline inlineIndex={1}>
                            40
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"10 x 5"} inline inlineIndex={2}>
                            50
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"10 x 6"} inline inlineIndex={3}>
                            60
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"10 x 7"} inline inlineIndex={1}>
                            70
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"10 x 8"} inline inlineIndex={2}>
                            80
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"10 x 9"} inline inlineIndex={3}>
                            90
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"10 x 10"} inline inlineIndex={1}>
                            100
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>
    )
}