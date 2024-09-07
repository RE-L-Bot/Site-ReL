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

    <h3>Case 1</h3>

    <hr />

    <DiscordMessage
        profile="RELBOT"
        timestamp="30/08/2024 13:00"
    >

        <DiscordCommand
            style={{ marginLeft: "56px" }}
            slot="reply"
            profile="marciel404"
            command="roleplay kiss"
        >
        </DiscordCommand>

        <DiscordEmbed
            slot="embeds"
            embedTitle="Kiss"
            color="#ed4245"
            image="https://cdn.otakugifs.xyz/gifs/kiss/cfac4b5571b3d308.gif"
        >

            <DiscordEmbedDescription slot="description">
                <span><DiscordMention>marciel404</DiscordMention> kissed <DiscordMention>{NameUser()}</DiscordMention></span>
            </DiscordEmbedDescription>

        </DiscordEmbed>

        <DiscordAttachments slot="components">

            <DiscordActionRow>

                <DiscordButton
                    id="active-button-kiss"
                    emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                    type="primary"
                    onClick={() => {
                        if (NameUser() != "Marciel do bem") {
                            document.getElementById("msg-r-kiss-self").style.display = "block"
                            document.getElementById("active-button-kiss").style.display = "none"
                            document.getElementById("desactive-button-kiss").style.display = "block"
                        } else {
                            document.getElementById("msg-r-kiss-not-self").style.display = "block"
                        }
                    }}
                >
                    Reply
                </DiscordButton>

                <DiscordButton
                    id="desactive-button-kiss"
                    emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                    type="primary"
                    disabled
                    style={{ display: "none" }}
                >
                    Reply
                </DiscordButton>

            </DiscordActionRow>

        </DiscordAttachments>

        <div id="msg-r-kiss-not-self" style={{ display: "none" }}>
            <span style={{ color: "red" }}>* Please log in to interact</span>
        </div>

    </DiscordMessage>

    <div id="msg-r-kiss-self" style={{ display: "none" }}>

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
                embedTitle="Kiss"
                color="#5865f2"
                image="https://cdn.otakugifs.xyz/gifs/kiss/5e1a1159b2d14a2c.gif"
            >

                <DiscordEmbedDescription slot="description">
                    <span><DiscordMention>{NameUser()}</DiscordMention> kissed <DiscordMention>marciel404</DiscordMention></span>
                </DiscordEmbedDescription>

            </DiscordEmbed>

        </DiscordMessage>

    </div>

    <h3>Case 2</h3>

    <hr />

    <DiscordMessage
        profile="RELBOT"
        timestamp="30/08/2024 13:00"
    >

        <DiscordCommand
            style={{ marginLeft: "56px" }}
            slot="reply"
            profile="marciel404"
            command="roleplay kiss"
        >
        </DiscordCommand>

        <span>Sorry, but I don’t want to kiss you or be kissed</span>

    </DiscordMessage>

    <h3>Case 3</h3>

    <hr />

    <DiscordMessage
        profile="RELBOT"
        timestamp="30/08/2024 13:00"
    >

        <span>Did you kiss yourself in the mirror?</span>

        <DiscordCommand
            style={{ marginLeft: "56px" }}
            slot="reply"
            profile="marciel404"
            command="roleplay kiss"
        >
        </DiscordCommand>

        <DiscordEmbed
            slot="embeds"
            embedTitle="Kiss"
            color="#ed4245"
            image="https://cdn.otakugifs.xyz/gifs/kiss/9cb66f2a86d8b3a3.gif"
        >

            <DiscordEmbedDescription slot="description">
                <span><DiscordMention>marciel404</DiscordMention> kissed <DiscordMention>marciel404</DiscordMention></span>
            </DiscordEmbedDescription>

        </DiscordEmbed>

        <DiscordAttachments slot="components">

            <DiscordActionRow>

                <DiscordButton
                    id="desactive-button-kiss"
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