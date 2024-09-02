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
                    command="banir"
                ></DiscordCommand>

                <span>Envie os ids dos membros um em baixo do outro</span>

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

            <h4>
                Caso 1
            </h4>

            <hr />

            <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:00">

                <span>Não consigo banir o membro <DiscordMention>RE=L</DiscordMention></span> <br />

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly highlight timestamp="13:01">

                <span>Não consigo banir o membro <DiscordMention>marciel404</DiscordMention></span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>1044742053252313199 não é um usuario</span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>1044742053252313855 não é um usuario</span>

            </DiscordMessage>

            <h4>
                Caso 2
            </h4>

            <hr />

            <div id="message-ban-confirm">

                <DiscordMessage profile="RELBOT" edited timestamp="30/08/2024 13:00">

                    <DiscordCommand
                        style={{ marginLeft: "56px" }}
                        slot="reply"
                        profile="marciel404"
                        command="banir"
                    ></DiscordCommand>

                    <DiscordEmbed slot="embeds" embedTitle="Banimento">

                        <DiscordEmbedDescription slot="description">

                            <DiscordMention>Bagre Samurai</DiscordMention><br />

                            <span>durateston_e_trembolona 536586433595441163</span>

                        </DiscordEmbedDescription>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Motivo">
                                Links maliciosos
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordActionRow>

                            <DiscordButton type="destructive" onClick={
                                () => {
                                    document.getElementById("message-ban-confirm").style.display = "none"
                                    document.getElementById("message-sucess-ban").style.display = "block"
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

            <div id="message-sucess-ban" style={{ display: "none" }} >

                <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:03">
                    <DiscordMention>marciel404</DiscordMention><br />
                    <span>Membros Banidos com Sucesso</span>
                </DiscordMessage>

            </div>

        </DiscordMessages>
    )
}