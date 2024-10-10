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

            <h3 style={{ margin: 0 }}>Case 1</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay lick"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Lick"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/lick/955885f019f05760.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> licked <DiscordMention>{NameUser()}</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-lick"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do bem") {
                                    document.getElementById("msg-r-lick-self").style.display = "block"
                                    document.getElementById("active-button-lick").style.display = "none"
                                    document.getElementById("desactive-button-lick").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-lick-not-self").style.display = "block"
                                }
                            }}
                        >
                            Reply
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-lick"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Reply
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-lick-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Please log in to interact</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-lick-self" style={{ display: "none" }}>

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
                        Click to view the command
                    </DiscordReply>

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Lick"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/lick/0c583e8ab3e6b8aa.gif"
                    >

                        <DiscordEmbedDescription slot="description">
                            <span><DiscordMention>{NameUser()}</DiscordMention> licked <DiscordMention>marciel404</DiscordMention></span>
                        </DiscordEmbedDescription>

                    </DiscordEmbed>

                </DiscordMessage>

            </div>

            <h3 style={{ margin: 0 }}>Case 2</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay lick"
                >
                </DiscordCommand>

                <span>You won't do that, that's really disgusting</span>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Case 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Licked yourself??<br />Besides being strange, it's also disgusting</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay lick"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Lick"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/lick/e14792b5f4433cc3.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> licked <DiscordMention>marciel404</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-lick"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                        >
                            Reply
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

        </DiscordMessages>

    )
}