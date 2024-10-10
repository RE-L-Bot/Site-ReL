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
                    command="roleplay segurar_mão"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Segurar mão"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/handhold/a2be9c7cbdb80d5b.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> segurou a mão de <DiscordMention>{NameUser()}</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-holdhand"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do bem") {
                                    document.getElementById("msg-r-holdhand-self").style.display = "block"
                                    document.getElementById("active-button-holdhand").style.display = "none"
                                    document.getElementById("desactive-button-holdhand").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-holdhand-not-self").style.display = "block"
                                }
                            }}
                        >
                            Retibuir
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-holdhand"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Retibuir
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-holdhand-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Faça login para interagir</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-holdhand-self" style={{ display: "none" }}>

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
                        embedTitle="Segurar mão"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/handhold/f02cb53ce0b33c39.gif"
                    >

                        <DiscordEmbedDescription slot="description">

                            <span><DiscordMention>{NameUser()}</DiscordMention> segurou a mão de <DiscordMention>marciel404</DiscordMention></span>

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
                    command="roleplay segurar_mão"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    color="#ed4245"
                    embedTitle="Segurar mão"
                    image="https://cdn.otakugifs.xyz/gifs/handhold/558494c34723b63c.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> segurou a mão de <DiscordMention>RE=L</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

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

                <span>Ok, mas nos somos só amigos</span>

                <DiscordEmbed
                    slot="embeds"
                    color="#ed4245"
                    embedTitle="Segurar mão"
                    image="https://cdn.otakugifs.xyz/gifs/handhold/558494c34723b63c.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>RE=L</DiscordMention> riu da cara de <DiscordMention>marciel404</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Caso 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Segurou a propria mão?</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay segurar_mão"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Segurar mão"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/handhold/160b0440eb5c8996.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> segurou a mão de <DiscordMention>marciel404</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-holdhand"
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