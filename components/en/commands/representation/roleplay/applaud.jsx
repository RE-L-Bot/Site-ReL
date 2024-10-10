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
                    command="roleplay applaud"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Applause"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/clap/74764f047afd9ee1.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> applauded <DiscordMention>{NameUser()}</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-applaud"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do bem") {
                                    document.getElementById("msg-r-applaud-self").style.display = "block"
                                    document.getElementById("active-button-applaud").style.display = "none"
                                    document.getElementById("desactive-button-applaud").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-applaud-not-self").style.display = "block"
                                }
                            }}
                        >
                            Reply
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-applaud"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Reply
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-applaud-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Please log in to interact</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-applaud-self" style={{ display: "none" }}>

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
                        embedTitle="Applause"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/clap/0edffaafe95eaa67.gif"
                    >

                        <DiscordEmbedDescription slot="description">
                            <span><DiscordMention>{NameUser()}</DiscordMention> applauded <DiscordMention>marciel404</DiscordMention></span>
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
                    command="roleplay applaud"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Applause"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/clap/76163505eb0bbed8.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> applauded <DiscordMention>RE=L</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-applaud"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                        >
                            Reply
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
                    Click to view the command
                </DiscordReply>

                <span>Thank you for applauding me; I am indeed a great bot</span> <br />
                <span>I'll applaud you for being a good user</span>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Applause"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/clap/76163505eb0bbed8.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>RE=L</DiscordMention> applauded <DiscordMention>marciel404</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Case 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Applauded yourself, but why???</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay applaud"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Applause"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/clap/KRKr4FxfF97x.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> applauded <DiscordMention>marciel404</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-applaud"
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