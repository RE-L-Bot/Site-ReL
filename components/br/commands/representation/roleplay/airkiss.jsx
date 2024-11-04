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
                    
                    slot="reply"
                    profile="marciel404"
                    command="roleplay mandar_beijo"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Mandar beijo"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/airkiss/d600bf56401dbee5.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> mandou um beijo para <DiscordMention>{NameUser()}</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="active-button-airkiss"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            onClick={() => {
                                if (NameUser() != "Marciel do bem") {
                                    document.getElementById("msg-r-airkiss-self").style.display = "block"
                                    document.getElementById("active-button-airkiss").style.display = "none"
                                    document.getElementById("desactive-button-airkiss").style.display = "block"
                                } else {
                                    document.getElementById("msg-r-airkiss-not-self").style.display = "block"
                                }
                            }}
                        >
                            Retibuir
                        </DiscordButton>

                        <DiscordButton
                            id="desactive-button-airkiss"
                            emoji="https://th.bing.com/th/id/R.1063a47aed0b451f55004a81dfda7b1b?rik=gMvkFH1UIz2ing&pid=ImgRaw&r=0"
                            type="primary"
                            disabled
                            style={{ display: "none" }}
                        >
                            Retibuir
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

                <div id="msg-r-airkiss-not-self" style={{ display: "none" }}>
                    <span style={{ color: "red" }}>* Faça login para interagir</span>
                </div>

            </DiscordMessage>

            <div id="msg-r-airkiss-self" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                >

                    <DiscordReply
                        
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        Clique para ver o comando
                    </DiscordReply>

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Mandar beijo"
                        color="#5865f2"
                        image="https://cdn.otakugifs.xyz/gifs/airkiss/a840b9606d1fb6dd.gif"
                    >

                        <DiscordEmbedDescription slot="description">

                            <span><DiscordMention>{NameUser()}</DiscordMention> mandou um beijo para <DiscordMention>marciel404</DiscordMention></span>

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
                    
                    slot="reply"
                    profile="marciel404"
                    command="roleplay mandar_beijo"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Mandar Beijo"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/airkiss/7b4d25f8de3942bc.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> mandou um beijo para <DiscordMention>RE=L</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

            </DiscordMessage>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <DiscordReply
                    
                    slot="reply"
                    profile="RELBOT"
                    command
                >
                    Clique para ver o comando
                </DiscordReply>

                <span>Obrigado por me mandar beijo mas não vou fazer o mesmo</span>

            </DiscordMessage>

            <h3 style={{ margin: 0 }}>Caso 3</h3>

            <hr />

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >

                <span>Mandou beijo para si mesmo??</span>

                <DiscordCommand
                    
                    slot="reply"
                    profile="marciel404"
                    command="roleplay mandar_beijo"
                >
                </DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Mandar beijo"
                    color="#ed4245"
                    image="https://cdn.otakugifs.xyz/gifs/airkiss/bd3a995ce96573ef.gif"
                >

                    <DiscordEmbedDescription slot="description">

                        <span><DiscordMention>marciel404</DiscordMention> mandou um beijo para <DiscordMention>marciel404</DiscordMention></span>

                    </DiscordEmbedDescription>

                </DiscordEmbed>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            id="desactive-button-airkiss"
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