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
                    
                    slot="reply"
                    profile="marciel404"
                    command="expulsar"
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

            <h4 style={{ margin: 0 }}>
                Caso 1
            </h4>

            <hr />

            <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:00">

                <span>Não consigo expulsar o membro <DiscordMention>RE=L</DiscordMention></span> <br />

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly highlight timestamp="13:01">

                <span>Não consigo expulsar o membro <DiscordMention>marciel404</DiscordMention></span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>1044742053252313199 não é um usuario</span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>1044742053252313855 não é um usuario</span>

            </DiscordMessage>

            <DiscordMessage profile="RELBOT" messageBodyOnly timestamp="13:01">

                <span>536586433595441163 não está no servidor</span>

            </DiscordMessage>

            <h4 style={{ margin: 0 }}>
                Caso 2
            </h4>

            <hr />

            <div id="message-kick-confirm">

                <DiscordMessage profile="RELBOT" edited timestamp="30/08/2024 13:00">

                    <DiscordCommand
                        
                        slot="reply"
                        profile="marciel404"
                        command="expulsar"
                    ></DiscordCommand>

                    <DiscordEmbed slot="embeds" embedTitle="Expulsar">

                        <DiscordEmbedDescription slot="description">

                            <DiscordMention>Bagre Samurai</DiscordMention><br />

                        </DiscordEmbedDescription>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Motivo">
                                Para deixar de ser bobo
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordActionRow>

                            <DiscordButton type="destructive" onClick={
                                () => {
                                    document.getElementById("message-kick-confirm").style.display = "none"
                                    document.getElementById("message-sucess-kick").style.display = "block"
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

            <div id="message-sucess-kick" style={{ display: "none" }} >

                <DiscordMessage profile="RELBOT" timestamp="30/08/2024 13:03">
                    <DiscordMention>marciel404</DiscordMention><br />
                    <span>Membros expulsos com Sucesso</span>
                </DiscordMessage>

            </div>

        </DiscordMessages>
    )
}