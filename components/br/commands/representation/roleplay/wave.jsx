import {
    DiscordActionRow,
    DiscordAttachments,
    DiscordButton,
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordMention,
    DiscordMessage,
    DiscordMessages,
    DiscordReply
} from "@skyra/discord-components-react";

function NameUser() {

    const userInfos = JSON.parse(sessionStorage.getItem("USERINFO"))

    if (userInfos && userInfos.username) {
        return userInfos.username
    }

    return "Marciel do bem"

}

export default function () {
    return (
        <DiscordMessages>

            <h3 style={{ margin: 0 }}>Caso 1</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay acenar"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Aceno"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/wave/7832e5c768ca70cb.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> acenou para <DiscordMention>{NameUser()}</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-wave"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do bem") {
                                    document.getElementById("msg-r-wave-self").style.display = "block"
                                    document.getElementById("active-button-wave").style.display = "none"
                                    document.getElementById("desactive-button-wave").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-wave-not-self").style.display = "block"
                                }
                            }}
                        >
                            Retibuir
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-wave"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Retibuir
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-wave-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Faça login para interagir</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-wave-self" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                >

                    <DiscordReply
                        style={{ marginLeft: "56px" }}
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        Clique para ver o comando
                    </DiscordReply>

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Aceno"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/wave/2e565abe8764327d.gif"
                    >

                        <DiscordEmbedDescription slot="description">

                            <span><DiscordMention>{NameUser()}</DiscordMention> acenou para <DiscordMention>marciel404</DiscordMention></span>

                        </DiscordEmbedDescription>

                    </DiscordEmbed>

                </DiscordMessage>

            </div>

            <h3 style={{ margin: 0 }}>Caso 2</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay acenar"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Aceno"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/wave/c431fefc7b33b594.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> acenou para <DiscordMention>RE=L</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-wave"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                        >
                            Retibuir
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <DiscordReply
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="RELBOT"
                    command
                >
                    Clique para ver o comando
                </DiscordReply>

                <span>OLAAAAA!!!!</span>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Aceno"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/wave/c431fefc7b33b594.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>RE=L</DiscordMention> acenou para <DiscordMention>marciel404</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Caso 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Você se acenou no espelho?</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay acenar"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Aceno"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/wave/ca5f7fcafbfc9556.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> acenou para <DiscordMention>marciel404</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-wave"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                        >
                            Retibuir
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

        </DiscordMessages>
    )
}