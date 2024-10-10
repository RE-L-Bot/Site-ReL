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

    return "Marciel do mau"

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
                    command="roleplay estapear"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Estapear"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/slap/7882244dc2ba254c.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> estapeou <DiscordMention>{NameUser()}</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-slap"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do mau") {
                                    document.getElementById("msg-r-slap-self").style.display = "block"
                                    document.getElementById("active-button-slap").style.display = "none"
                                    document.getElementById("desactive-button-slap").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-slap-not-self").style.display = "block"
                                }
                            }}
                        >
                            Retibuir
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-slap"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Retibuir
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-slap-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Faça login para interagir</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-slap-self" style={{ display: "none" }}>

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
                        embedTitle="Estapear"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/slap/8Xg35eViSf.gif"
                    >

                        <DiscordEmbedDescription slot="description">

                            <span><DiscordMention>{NameUser()}</DiscordMention> estapeou <DiscordMention>marciel404</DiscordMention></span>

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
                    command="roleplay estapear"
                >
                </DiscordCommand>

                <span>Você não achou que faria isso comigo né?</span>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Estapear"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/slap/0d82850a623b04f6.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>RE=L</DiscordMention> estapeou <DiscordMention>marciel404</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-slap"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                        >
                            Retibuir
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Caso 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Estapeou a si mesmo??<br />Isso não é normal não</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay estapear"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Estapear"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/slap/756d7b12e16fbb1d.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> estapeou <DiscordMention>marciel404</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-slap"
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