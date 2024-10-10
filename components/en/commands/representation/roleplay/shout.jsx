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
                    command="roleplay shout"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Shout"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/shout/iScekvZbab2F.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> shouted at <DiscordMention>{NameUser()}</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-shout"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do mau") {
                                    document.getElementById("msg-r-shout-self").style.display = "block"
                                    document.getElementById("active-button-shout").style.display = "none"
                                    document.getElementById("desactive-button-shout").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-shout-not-self").style.display = "block"
                                }
                            }}
                        >
                            Reply
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-shout"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Reply
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-shout-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Please log in to interact</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-shout-self" style={{ display: "none" }}>

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
                        embedTitle="Shout"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/shout/mRmtk3eAxD.gif"
                    >

                        <DiscordEmbedDescription slot="description">
                            <span><DiscordMention>{NameUser()}</DiscordMention> shouted at <DiscordMention>marciel404</DiscordMention></span>
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
                    command="roleplay shout"
                >
                </DiscordCommand>

                <span>Why are you shouting at me??!!</span>

                <DiscordEmbed
                    slot="embeds"
                    color="#ed4245"
                    image="https://pa1.narvii.com/7180/63b211ff08414525799c1b84e19a9baa41f1cb15r1-540-265_hq.gif"
                >

                </DiscordEmbed>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Case 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Shouted at yourself??<br />That’s some crazy stuff, you know?</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay shout"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Shout"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/shout/xYq39NkXcb.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> shouted at <DiscordMention>marciel404</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-shout"
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