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
                    command="roleplay laugh"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Laugh"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/laugh/y7aOXjlPRL.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> laughed at <DiscordMention>{NameUser()}</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-laugh"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do mau") {
                                    document.getElementById("msg-r-laugh-self").style.display = "block"
                                    document.getElementById("active-button-laugh").style.display = "none"
                                    document.getElementById("desactive-button-laugh").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-laugh-not-self").style.display = "block"
                                }
                            }}
                        >
                            Reply
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-laugh"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Reply
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-laugh-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Please log in to interact</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-laugh-self" style={{ display: "none" }}>

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
                        embedTitle="Laugh"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/laugh/5b4eb59d4f20abc8.gif"
                    >

                        <DiscordEmbedDescription slot="description">
                            <span><DiscordMention>{NameUser()}</DiscordMention> laughed at <DiscordMention>marciel404</DiscordMention></span>
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
                    command="roleplay laugh"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    color="#ed4245"
                    embedTitle="Laugh"
                    image="https://cdn.otakugifs.xyz/gifs/laugh/901f76a2f830492f.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> laughed at <DiscordMention>RE=L</DiscordMention></span>
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

                <span>Why are you laughing at me??!!</span>

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

                <span>Turned into the Joker, laughing alone</span>

                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="roleplay laugh"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Laugh"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/laugh/d698c73d4a95fed5.gif"
                >

                    <DiscordEmbedDescription slot="description">
                        <span><DiscordMention>marciel404</DiscordMention> laughed at <DiscordMention>marciel404</DiscordMention></span>
                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-laugh"
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