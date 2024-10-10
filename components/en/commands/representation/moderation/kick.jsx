import {
    DiscordActionRow,
    DiscordAttachments,
    DiscordButton,
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
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
                    command="kick"
                ></DiscordCommand>

                <span>Send the member IDs one below the other</span>

            </DiscordMessage>

            <DiscordMessage
                profile="marciel404"
                highlight
                timestamp="30/08/2024 13:00"
            >

                <span><DiscordMention>RE=L</DiscordMention></span> <br />

                <span><DiscordMention>marciel404</DiscordMention></span> <br />

                <span>1044742053252313199</span> <br />

                <span>1044742053252313855</span> <br />

                <span><DiscordMention>Bagre Samurai</DiscordMention></span> <br />

                <span>536586433595441163</span>

            </DiscordMessage>

            <h4 style={{ margin: 0 }}>
                Case 1
            </h4>

            <hr />

            <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:00">

                <span>I can't kick the member <DiscordMention>RE=L</DiscordMention></span> <br />

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly highlight timestamp="13:01">

                <span>I can't kick the member <DiscordMention>marciel404</DiscordMention></span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>1044742053252313199 is not a user</span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>1044742053252313855 is not a user</span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>536586433595441163 is not in the server</span>

            </DiscordMessage>

            <h4 style={{ margin: 0 }}>
                Case 2
            </h4>

            <hr />

            <div id="message-kick-confirm">

                <DiscordMessage profile="RELBOT" edited timestamp="30/08/2024 13:00">

                    <DiscordCommand
                        style={{ marginLeft: "56px" }}
                        slot="reply"
                        profile="marciel404"
                        command="kick"
                    ></DiscordCommand>

                    <DiscordEmbed slot="embeds" embedTitle="Kick">

                        <DiscordEmbedDescription slot="description">

                            <DiscordMention>Bagre Samurai</DiscordMention><br />

                        </DiscordEmbedDescription>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Reason">
                                To stop being silly
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordActionRow>

                            <DiscordButton type="destructive" onClick={
                                () => {
                                    document.getElementById("message-kick-confirm").style.display = "none"
                                    document.getElementById("message-success-kick").style.display = "block"
                                }
                            }>
                                ✔
                            </DiscordButton>

                            <DiscordButton type="destructive">
                                ✖
                            </DiscordButton>

                        </DiscordActionRow>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="message-success-kick" style={{ display: "none" }} >

                <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:03">
                    <DiscordMention>marciel404</DiscordMention><br />
                    <span>Members kicked successfully</span>
                </DiscordMessage>

            </div>

        </DiscordMessages>

    )
}