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
            command="roleplay bite"
        >
        </DiscordCommand>

        <DiscordEmbed
            slot="embeds"
            embedTitle="Bite"
            color="#ed4245"
            image="https://cdn.otakugifs.xyz/gifs/bite/035142fddca989cb.gif"
        >

            <DiscordEmbedDescription slot="description">
                <span><DiscordMention>marciel404</DiscordMention> bit <DiscordMention>{NameUser()}</DiscordMention></span>
            </DiscordEmbedDescription>

        </DiscordEmbed>

        <DiscordAttachments slot="components">

            <DiscordActionRow>

                <DiscordButton
                    id="active-button-bite"
                    emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                    type="primary"
                    onClick={() => {
                        if (NameUser() != "Marciel do mau") {
                            document.getElementById("msg-r-bite-self").style.display = "block"
                            document.getElementById("active-button-bite").style.display = "none"
                            document.getElementById("desactive-button-bite").style.display = "block"
                        } else {
                            document.getElementById("msg-r-bite-not-self").style.display = "block"
                        }
                    }}
                >
                    Reply
                </DiscordButton>

                <DiscordButton
                    id="desactive-button-bite"
                    emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                    type="primary"
                    disabled
                    style={{ display: "none" }}
                >
                    Reply
                </DiscordButton>

            </DiscordActionRow>

        </DiscordAttachments>

        <div id="msg-r-bite-not-self" style={{ display: "none" }}>
            <span style={{ color: "red" }}>* Please log in to interact</span>
        </div>

    </DiscordMessage>

    <div id="msg-r-bite-self" style={{ display: "none" }}>

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
                embedTitle="Bite"
                color="#5865f2"
                image="https://cdn.otakugifs.xyz/gifs/bite/f99be8ff02b8f27b.gif"
            >

                <DiscordEmbedDescription slot="description">
                    <span><DiscordMention>{NameUser()}</DiscordMention> bit <DiscordMention>marciel404</DiscordMention></span>
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
            profile="RELBOT"
            command="roleplay bite"
        >
        </DiscordCommand>

        <span>Ouch, that hurts so you won’t do it</span>

    </DiscordMessage>

    <h3 style={{ margin: 0 }}>Case 3</h3>

    <hr />

    <DiscordMessage
        profile="RELBOT"
        timestamp="30/08/2024 13:00"
    >

        <span>Now you've really lost it, biting yourself</span>

        <DiscordCommand
            style={{ marginLeft: "56px" }}
            slot="reply"
            profile="marciel404"
            command="roleplay bite"
        >
        </DiscordCommand>

        <DiscordEmbed
            slot="embeds"
            embedTitle="Bite"
            color="#ed4245"
            image="https://cdn.otakugifs.xyz/gifs/bite/00f2ae5edc6c3e33.gif"
        >

            <DiscordEmbedDescription slot="description">
                <span><DiscordMention>marciel404</DiscordMention> bit <DiscordMention>marciel404</DiscordMention></span>
            </DiscordEmbedDescription>

        </DiscordEmbed>

        <DiscordAttachments slot="components">

            <DiscordActionRow>

                <DiscordButton
                    id="desactive-button-bite"
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