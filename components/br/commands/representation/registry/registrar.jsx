import {
    DiscordMessage,
    DiscordAttachments,
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordActionRow,
    DiscordButton,
    DiscordEmbedFields,
    DiscordEmbedField,
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

            <h4 style={{ margin: 0 }}>
                Representação do sistema de registro
            </h4>

            <h5 style={{ opacity: "50%" }}>(Clique nos botões para interagir)</h5>

            <hr />

            <div id="div-principal-registro">

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="registrar"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registro"
                    >

                        <DiscordEmbedDescription slot="description">
                            Escolha a categoria que deseja
                        </DiscordEmbedDescription>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordActionRow>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-principal-registro").style.display = "none"
                                    document.getElementById("div-genero-registro").style.display = "block"
                                }}
                            >
                                Genero
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-principal-registro").style.display = "none"
                                    document.getElementById("div-sexualidade-registro").style.display = "block"
                                }}
                            >
                                Sexualidade
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-principal-registro").style.display = "none"
                                    document.getElementById("div-regiao-registro").style.display = "block"
                                }}
                            >
                                Região
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-principal-registro").style.display = "none"
                                    document.getElementById("div-plataforma-registro").style.display = "block"
                                }}
                            >
                                Plataforma
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-principal-registro").style.display = "none"
                                    document.getElementById("div-relacionamento-registro").style.display = "block"
                                }}
                            >
                                Relacionamento
                            </DiscordButton>

                        </DiscordActionRow>

                        <DiscordActionRow>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-principal-registro").style.display = "none"
                                    document.getElementById("div-idade-registro").style.display = "block"
                                }}
                            >
                                Idade
                            </DiscordButton>

                        </DiscordActionRow>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-genero-registro" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="registrar"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registro"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Masculino" inline inlineIndex={1}>

                                <DiscordMention type="role"> ♂️ ┇ Masculino </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Masculino" inline inlineIndex={2}>

                                <DiscordMention type="role"> ♀️ ┇ Feminino </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Masculino" inline inlineIndex={3}>

                                <DiscordMention type="role"> ⚧️ ┇ Transexualidade </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Masculino" inline inlineIndex={1}>

                                <DiscordMention type="role"> ✴️ ┇ Não-binario </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Masculino"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Feminino"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Trans"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Não-Binario"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Voltar"
                                selectOption={() => {
                                    document.getElementById("div-genero-registro").style.display = "none"
                                    document.getElementById("div-principal-registro").style.display = "block"

                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finalizar"
                                selectOption={() => {
                                    document.getElementById("div-genero-registro").style.display = "none"
                                    document.getElementById("div-sucess-registrar").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-sexualidade-registro" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="registrar"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registro"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Hetero" inline inlineIndex={1}>

                                <DiscordMention type="role"> 🌂 ┇ Hetero </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Lgbt" inline inlineIndex={2}>

                                <DiscordMention type="role"> ☂️ ┇ Lgbt </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Assexuado" inline inlineIndex={3}>

                                <DiscordMention type="role"> ☔️ ┇ Assexuado </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Hetero"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="LGBT"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Assexuado"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Voltar"
                                selectOption={() => {
                                    document.getElementById("div-sexualidade-registro").style.display = "none"
                                    document.getElementById("div-principal-registro").style.display = "block"

                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finalizar"
                                selectOption={() => {
                                    document.getElementById("div-sexualidade-registro").style.display = "none"
                                    document.getElementById("div-sucess-registrar").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-regiao-registro" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="registrar"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registro"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Nordeste" inline inlineIndex={1}>

                                <DiscordMention type="role"> 🌘 ┇ Nordeste </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Norte" inline inlineIndex={2}>

                                <DiscordMention type="role"> 🌔 ┇ Norte </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Centro-oeste" inline inlineIndex={3}>

                                <DiscordMention type="role"> 🌕 ┇ Centro-oeste </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Sul" inline inlineIndex={1}>

                                <DiscordMention type="role"> 🌖 ┇ Sul </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Sudeste" inline inlineIndex={2}>

                                <DiscordMention type="role"> 🌒 ┇ Sudeste </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Gringo" inline inlineIndex={3}>

                                <DiscordMention type="role"> 🌑 ┇ Gringo </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Nordeste"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Norte"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Centro-oeste"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Sul"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Sudeste"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Gringo"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Voltar"
                                selectOption={() => {
                                    document.getElementById("div-regiao-registro").style.display = "none"
                                    document.getElementById("div-principal-registro").style.display = "block"

                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finalizar"
                                selectOption={() => {
                                    document.getElementById("div-regiao-registro").style.display = "none"
                                    document.getElementById("div-sucess-registrar").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-plataforma-registro" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="registrar"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registro"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Celular" inline inlineIndex={1}>

                                <DiscordMention type="role"> 📱 ┇ Celular </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Computador" inline inlineIndex={2}>

                                <DiscordMention type="role"> ⌨️ ┇ Computador </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Console" inline inlineIndex={3}>

                                <DiscordMention type="role"> 🎮 ┇ Console </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Celular"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Computador"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Console"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Voltar"
                                selectOption={() => {
                                    document.getElementById("div-plataforma-registro").style.display = "none"
                                    document.getElementById("div-principal-registro").style.display = "block"

                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finalizar"
                                selectOption={() => {
                                    document.getElementById("div-plataforma-registro").style.display = "none"
                                    document.getElementById("div-sucess-registrar").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-relacionamento-registro" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="registrar"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registro"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Solteiro" inline inlineIndex={1}>

                                <DiscordMention type="role"> 💔 ┇ Solteiro </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Ficando" inline inlineIndex={2}>

                                <DiscordMention type="role"> 💌 ┇ Ficando </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Namorando" inline inlineIndex={3}>

                                <DiscordMention type="role"> 💗 ┇ Namorando </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Casado" inline inlineIndex={1}>

                                <DiscordMention type="role"> 💕 ┇ Casado </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Solteiro"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Ficando"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Namorando"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Casado"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Voltar"
                                selectOption={() => {
                                    document.getElementById("div-relacionamento-registro").style.display = "none"
                                    document.getElementById("div-principal-registro").style.display = "block"

                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finalizar"
                                selectOption={() => {
                                    document.getElementById("div-relacionamento-registro").style.display = "none"
                                    document.getElementById("div-sucess-registrar").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-idade-registro" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="registrar"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registro"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="-18" inline inlineIndex={1}>

                                <DiscordMention type="role"> 🚼 ┇ -18 </DiscordMention>

                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="+18" inline inlineIndex={2}>

                                <DiscordMention type="role"> 🚹 ┇ +18 </DiscordMention>

                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="-18"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="+18"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Voltar"
                                selectOption={() => {
                                    document.getElementById("div-idade-registro").style.display = "none"
                                    document.getElementById("div-principal-registro").style.display = "block"

                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finalizar"
                                selectOption={() => {
                                    document.getElementById("div-idade-registro").style.display = "none"
                                    document.getElementById("div-sucess-registrar").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-sucess-registrar" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                    dismissMessageClicked={() => {
                        document.getElementById("div-principal-registro").style.display = "block"
                        document.getElementById("div-sucess-registrar").style.display = "none"
                    }}
                >

                    <DiscordReply
                        slot="reply"
                        
                        deleted
                    >
                    </DiscordReply>

                    Membro registrado com sucesso

                </DiscordMessage>

            </div>

        </DiscordMessages>
    )
}