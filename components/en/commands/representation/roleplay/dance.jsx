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
            command="roleplay dance"
        >
        </DiscordCommand>

        <DiscordEmbed
            slot="embeds"
            embedTitle="Dance"
            color="#ed4245"
            image="https://cdn.otakugifs.xyz/gifs/dance/968eeb1257c211dd.gif"
        >

            <DiscordEmbedDescription slot="description">
                <span><DiscordMention>marciel404</DiscordMention> is dancing with <DiscordMention>{NameUser()}</DiscordMention></span>
            </DiscordEmbedDescription>

        </DiscordEmbed>

        <DiscordAttachments slot="components">

            <DiscordActionRow>

                <DiscordButton
                    id="active-button-dance"
                    emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                    type="primary"
                    onClick={() => {
                        if (NameUser() != "Marciel do bem") {
                            document.getElementById("msg-r-dance-self").style.display = "block"
                            document.getElementById("active-button-dance").style.display = "none"
                            document.getElementById("desactive-button-dance").style.display = "block"
                        } else {
                            document.getElementById("msg-r-dance-not-self").style.display = "block"
                        }
                    }}
                >
                    Reply
                </DiscordButton>

                <DiscordButton
                    id="desactive-button-dance"
                    emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                    type="primary"
                    disabled
                    style={{ display: "none" }}
                >
                    Reply
                </DiscordButton>

            </DiscordActionRow>

        </DiscordAttachments>

        <div id="msg-r-dance-not-self" style={{ display: "none" }}>
            <span style={{ color: "red" }}>* Please log in to interact</span>
        </div>

    </DiscordMessage>

    <div id="msg-r-dance-self" style={{ display: "none" }}>

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
                embedTitle="Dance"
                color="#5865f2"
                image="https://cdn.otakugifs.xyz/gifs/dance/53ae25b70fe558dc.gif"
            >

                <DiscordEmbedDescription slot="description">
                    <span><DiscordMention>{NameUser()}</DiscordMention> is dancing with <DiscordMention>marciel404</DiscordMention></span>
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
            command="roleplay dance"
        >
        </DiscordCommand>

        <span>Thanks for inviting me to dance but I don't like dancing</span>

    </DiscordMessage>

    <h3>Case 3</h3>

    <hr />

    <DiscordMessage
        profile="RELBOT"
        timestamp="30/08/2024 13:00"
    >

        <span>Dancing alone, be careful, or people will think you're crazy</span>

        <DiscordCommand
            style={{ marginLeft: "56px" }}
            slot="reply"
            profile="marciel404"
            command="roleplay dance"
        >
        </DiscordCommand>

        <DiscordEmbed
            slot="embeds"
            embedTitle="Dance"
            color="#ed4245"
            image="https://cdn.otakugifs.xyz/gifs/dance/e63dcb816a0978b2.gif"
        >

            <DiscordEmbedDescription slot="description">
                <span><DiscordMention>marciel404</DiscordMention> is dancing with <DiscordMention>marciel404</DiscordMention></span>
            </DiscordEmbedDescription>

        </DiscordEmbed>

        <DiscordAttachments slot="components">

            <DiscordActionRow>

                <DiscordButton
                    id="desactive-button-dance"
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