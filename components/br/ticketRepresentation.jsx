import {
    DiscordMessage,
    DiscordAttachments,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordActionRow,
    DiscordButton,
    DiscordMention,
    DiscordReply,
    DiscordEmbedFooter,
    DiscordMessages,
    DiscordStringSelectMenu,
    DiscordStringSelectMenuOption
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <h5 style={{ opacity: "50%" }}>(Clique nos botões para interagir)</h5>

            <DiscordActionRow>

                <DiscordButton
                    type="primary"
                    onClick={() => {
                        document.getElementById("div-message-ticket").style.display = "block"
                        document.getElementById("div-message-close-ticket").style.display = "none"
                        document.getElementById("div-message-closed-ticket").style.display = "none"
                    }}
                >
                    Mensagem Ticket
                </DiscordButton>

                <DiscordButton
                    type="primary"
                    onClick={() => {
                        document.getElementById("div-opening-ticket").style.display = "none"
                        document.getElementById("div-message-ticket").style.display = "none"
                        document.getElementById("div-message-close-ticket").style.display = "block"
                        document.getElementById("div-message-closed-ticket").style.display = "none"
                    }}
                >
                    Mensagem fechar ticket
                </DiscordButton>

                <DiscordButton
                    type="primary"
                    onClick={() => {
                        document.getElementById("div-opening-ticket").style.display = "none"
                        document.getElementById("div-message-ticket").style.display = "none"
                        document.getElementById("div-message-close-ticket").style.display = "none"
                        document.getElementById("div-message-closed-ticket").style.display = "block"
                    }}
                >
                    Mensagem Ticket fechado
                </DiscordButton>

            </DiscordActionRow>

            <div id="div-message-ticket">

                <DiscordMessage
                    timestamp="30/08/2024 13:00"
                    author="IVM (Ticket Express)"
                    avatar="https://images-ext-1.discordapp.net/external/nNVuKLahkkEPMoXf9_lDrbEyiSWImKzczdDsqsBnUwM/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9.webp?format=webp"
                    bot
                >

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Ticket Atendimento"
                        color="#000000"
                        image="https://media0.giphy.com/media/qvNpPZYqNkRo0c3TDv/giphy.gif"
                        thumbnail="https://images-ext-1.discordapp.net/external/FqwA9DbyXqKAZgZMZZqT_al7u3URaTltKT26Fk44EOo/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9?format=webp"
                    >

                        <DiscordEmbedDescription slot="description">
                            Abra seu Ticket abaixo de acordo com sua necessidade, denúncias falsas serão desconsideradas, e acarretara alguma punição, então não abra se não for algo sério
                        </DiscordEmbedDescription>

                        <DiscordEmbedFooter
                            footerImage="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
                        >
                            Powered by RE=L
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu >

                            <DiscordStringSelectMenuOption
                                label="Call's"
                                description="Problemas relacionados a calls"
                                selectOption={() => {
                                    document.getElementById("div-opening-ticket").style.display = "block"
                                }}
                            >

                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Chat's"
                                description="Problemas relacionados a chats"
                                selectOption={() => {
                                    document.getElementById("div-opening-ticket").style.display = "block"
                                }}
                            >

                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Privado"
                                description="Problemas relacionados a conversas privadas"
                                selectOption={() => {
                                    document.getElementById("div-opening-ticket").style.display = "block"
                                }}
                            >

                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Outros"
                                description="Outra situação que não foi citado acima"
                                selectOption={() => {
                                    document.getElementById("div-opening-ticket").style.display = "block"
                                }}
                            >

                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

                <div id="div-opening-ticket" style={{ display: "none" }}>

                    <DiscordMessage
                        timestamp="30/08/2024 13:00"
                        profile="RELBOT"
                        ephemeral
                    >

                        <DiscordReply
                            style={{ marginLeft: "56px" }}
                            author="IVM (Ticket Express)"
                            avatar="https://images-ext-1.discordapp.net/external/nNVuKLahkkEPMoXf9_lDrbEyiSWImKzczdDsqsBnUwM/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9.webp?format=webp"
                            bot
                            slot="reply"
                            attachment
                        >
                            Clique para ver anexo
                        </DiscordReply>

                        <span>Criando Ticket</span>

                    </DiscordMessage>

                    <DiscordMessage
                        timestamp="30/08/2024 13:00"
                        profile="RELBOT"
                        ephemeral
                    >

                        <DiscordReply
                            style={{ marginLeft: "56px" }}
                            author="IVM (Ticket Express)"
                            avatar="https://images-ext-1.discordapp.net/external/nNVuKLahkkEPMoXf9_lDrbEyiSWImKzczdDsqsBnUwM/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9.webp?format=webp"
                            bot
                            slot="reply"
                            attachment
                        >
                            Clique para ver anexo
                        </DiscordReply>

                        <span>Ticket criado com sucesso</span>

                        <DiscordAttachments slot="components">

                            <DiscordActionRow>

                                <DiscordButton
                                    type="secondary"
                                    onClick={() => {
                                        document.getElementById("div-opening-ticket").style.display = "none"
                                        document.getElementById("div-message-ticket").style.display = "none"
                                        document.getElementById("div-message-close-ticket").style.display = "block"
                                        document.getElementById("div-message-closed-ticket").style.display = "none"
                                    }}
                                >

                                    <div style={{ display: "flex", gap: "5px" }}>

                                        <span>Atalho para o ticket</span>

                                        <span>

                                            <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">

                                                <path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path>

                                                <path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path>

                                            </svg>

                                        </span>

                                    </div>

                                </DiscordButton>

                            </DiscordActionRow>

                        </DiscordAttachments>

                    </DiscordMessage>

                </div>

            </div>

            <div id="div-message-close-ticket" style={{ display: "none" }}>

                <DiscordMessage
                    timestamp="30/08/2024 13:00"
                    author="IVM (Ticket Express)"
                    avatar="https://images-ext-1.discordapp.net/external/nNVuKLahkkEPMoXf9_lDrbEyiSWImKzczdDsqsBnUwM/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9.webp?format=webp"
                    bot
                >

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Ticket de marciel404"
                        color="#000000"
                    >

                        <DiscordEmbedDescription slot="description">
                            Clique em 🔒 para fechar o ticket
                        </DiscordEmbedDescription>

                        <DiscordEmbedFooter slot="footer">
                            485801281621852175
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordActionRow>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-message-ticket").style.display = "none"
                                    document.getElementById("div-message-close-ticket").style.display = "none"
                                    document.getElementById("div-message-closed-ticket").style.display = "block"
                                }}
                            >
                                🔒 fechar ticket
                            </DiscordButton>

                        </DiscordActionRow>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-message-closed-ticket" style={{ display: "none" }}>

                <DiscordMessage
                    author="IVM (Ticket Express)"
                    avatar="https://images-ext-1.discordapp.net/external/nNVuKLahkkEPMoXf9_lDrbEyiSWImKzczdDsqsBnUwM/https/cdn.discordapp.com/icons/1101694285839077537/0572af3a3447d536d63f58ede8827dd9.webp?format=webp"
                    bot
                    timestamp="30/08/2024 13:00"
                >

                    <DiscordEmbed
                        slot="embeds"
                        embedTitle="Ticket de marciel404"
                        color="#000000"
                    >

                        <DiscordEmbedDescription slot="description">
                            <span>Ticket fechado por <DiscordMention>marciel404</DiscordMention></span> <br />
                            <span>Clique em 🔓 para abrir o ticket</span> <br />
                            <span>Clique em 🚫 para deletar o ticket</span>
                        </DiscordEmbedDescription>

                        <DiscordEmbedFooter slot="footer">
                            485801281621852175
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordActionRow>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-message-ticket").style.display = "none"
                                    document.getElementById("div-message-close-ticket").style.display = "block"
                                    document.getElementById("div-message-closed-ticket").style.display = "none"
                                }}
                            >
                                🔓 Abrir ticket
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-message-ticket").style.display = "block"
                                    document.getElementById("div-message-close-ticket").style.display = "none"
                                    document.getElementById("div-message-closed-ticket").style.display = "none"
                                }}
                            >
                                🚫 Deletar ticket
                            </DiscordButton>

                        </DiscordActionRow>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

        </DiscordMessages>
    )
}