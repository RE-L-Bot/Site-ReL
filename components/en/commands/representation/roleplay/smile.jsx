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
                    command="roleplay smile"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Smile"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/smile/YcE3q2QcTc4y.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> smiled at <DiscordMention>{NameUser()}</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-smile"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do bem") {
                                    document.getElementById("msg-r-smile-self").style.display = "block"
                                    document.getElementById("active-button-smile").style.display = "none"
                                    document.getElementById("desactive-button-smile").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-smile-not-self").style.display = "block"
                                }
                            }}
                        >
                            Reply
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-smile"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Reply
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-smile-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Please log in to interact</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-smile-self" style={{ display: "none" }}>

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
                        embedTitle="Smile"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/smile/17567f6284c416ee.gif"
                    >

                        <DiscordEmbedDescription slot="description">
                            <span><DiscordMention>{NameUser()}</DiscordMention> smiled at <DiscordMention>marciel404</DiscordMention></span>
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
                    command="roleplay smile"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    color="#ed4245"
                    embedTitle="Smile"
                    image="https://cdn.otakugifs.xyz/gifs/smile/fedbcf7d55aae59d.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> smiled at <DiscordMention>RE=L</DiscordMention></span>
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
                    Click to view the command
                </DiscordReply>

                <span>What a beautiful smile you have</span>

                <DiscordEmbed
                    slot="embeds"
                    color="#ed4245"
                    embedTitle="Smile"
                    image="https://cdn.otakugifs.xyz/gifs/smile/fedbcf7d55aae59d.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>RE=L</DiscordMention> smiled at <DiscordMention>marciel404</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Case 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Smiled at yourself in the mirror?</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay smile"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Smile"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/smile/3068aa35757c14f4.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> smiled at <DiscordMention>marciel404</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-smile"
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