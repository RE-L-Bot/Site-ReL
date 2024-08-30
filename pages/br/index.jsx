import FOOTER from "@/components/br/footers"
import HEADER from "@/components/br/headers"
import {
    redirectInfos,
    redirectInvite,
    redirectLogDash,
    redirectTerms
} from "@/scripts/redirects"
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

export default function HomeBr() {

    return (
        <main>

            <HEADER />

            <div className="FirstDivIndex">

                <div id="imgCIRE">

                    <img src="/images/RELINTEIRA.webp" alt="RE=L Magica" />

                </div>

                <div>

                    <div>

                        <h1>Re=L Bot</h1>

                        <h3>Um bot de discord para auxiliar seu servidor</h3>

                        <p>Transformando o difícil no fácil</p>

                    </div>

                    <div className="DivButtons">

                        <div style={{ margin: "5px" }}>

                            <button className="ButtonAddBot" onClick={redirectInvite}>+Me Adicione</button>

                            <button className="ButtonDashBoard" onClick={redirectLogDash}>Painel de controle</button>

                        </div>

                        <div>

                            <button className="ButtonTerms" onClick={redirectTerms}>Termos de uso</button>

                            <button className="ButtonInformation" onClick={redirectInfos}>🌟Informações</button>

                        </div>

                    </div>

                </div>

            </div>

            <div id="about" />

            <div className="SecondDivIndex">

                <div>

                    <h1>Eleve seu servidor a outro nivel</h1>

                    <br />

                    <p>
                        Servidores focados em interação com membros estão cada vez mais <br />
                        passando pelas mesmas coisas e os mesmos problemas. <br />
                        <br />

                        Novos membros gostam de interação e gostam de cargos <br />
                        representativos, e por membros quererem cargos é ai que a RE=L <br />
                        entra, a RE=L conta com uma ótima função para esses tipos de servidor <br />
                        uma função de "registrar" os membros, a RE automatiza o processo <br />
                        de ter que atribuir vários cargos de uma vez e melhor e cargos padrões <br />
                        E com funções de moderação e ticket
                        <br />
                        <br />

                        <h5>Tudo a baixo é personalizável, só esta assim para ilustrar</h5>

                    </p>

                </div>

                <img src="/svgs/RELCHIBI.svg" alt="RE=L Chibi" id="RELChibi" className="images" />

            </div>

            <div className="SecondDivIndex">

                <DiscordMessages style={{ borderRadius: "5px" }}>

                    <h4>
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
                                style={{ marginLeft: "56px" }}
                                slot="reply"
                                command="registrar"
                                profile="marciel404"
                            >
                            </DiscordCommand>

                            <DiscordEmbed
                                authorName="marciel404"
                                authorImage="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
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
                                style={{ marginLeft: "56px" }}
                                slot="reply"
                                command="registrar"
                                profile="marciel404"
                            >
                            </DiscordCommand>

                            <DiscordEmbed
                                authorName="marciel404"
                                authorImage="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
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
                                style={{ marginLeft: "56px" }}
                                slot="reply"
                                command="registrar"
                                profile="marciel404"
                            >
                            </DiscordCommand>

                            <DiscordEmbed
                                authorName="marciel404"
                                authorImage="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
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
                                style={{ marginLeft: "56px" }}
                                slot="reply"
                                command="registrar"
                                profile="marciel404"
                            >
                            </DiscordCommand>

                            <DiscordEmbed
                                authorName="marciel404"
                                authorImage="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
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
                                style={{ marginLeft: "56px" }}
                                slot="reply"
                                command="registrar"
                                profile="marciel404"
                            >
                            </DiscordCommand>

                            <DiscordEmbed
                                authorName="marciel404"
                                authorImage="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
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
                                style={{ marginLeft: "56px" }}
                                slot="reply"
                                command="registrar"
                                profile="marciel404"
                            >
                            </DiscordCommand>

                            <DiscordEmbed
                                authorName="marciel404"
                                authorImage="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
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
                                style={{ marginLeft: "56px" }}
                                slot="reply"
                                command="registrar"
                                profile="marciel404"
                            >
                            </DiscordCommand>

                            <DiscordEmbed
                                authorName="marciel404"
                                authorImage="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
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
                                style={{ marginLeft: "56px" }}
                                deleted
                            >
                            </DiscordReply>

                            Membro registrado com sucesso

                        </DiscordMessage>

                    </div>

                </DiscordMessages>

            </div>

            <br />

            <div className="FourDivIndex">

                <img src="/svgs/RELINTEIRA2.svg" alt="RE=L Espada" style={{ height: "500px" }} id="reLInteira" />

                <div>

                    <h2>
                        Transforme seus tickets melhores do que nunca e mais bonito
                    </h2>

                    <br />

                    <p>
                        Com uma otima funcionalidade de poder estar usando webhooks <br />
                        seu ticket de atendimento ficara muito mais bonito e atrativo aos membros
                    </p>

                    <div>

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
                                    profile="webhookTicketIvm"
                                >

                                    <DiscordEmbed
                                        slot="embeds"
                                        embedTitle="Ticket Atendimento"
                                        color="#000000"
                                        image="https://media.discordapp.net/attachments/1101286572533502072/1101707342652907552/image0.gif?ex=66d332ab&is=66d1e12b&hm=fff030a4fa55a0f57dbf2fd9cd9dbaa495fa9e529f488e2311c789861271cccb&=&width=710&height=473"
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
                                                description="Outra situação que não foi sitado acima"
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
                                            profile="webhookTicketIvm"
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
                                            profile="webhookTicketIvm"
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

                                                            <svg class="discord-button-launch" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">

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
                                    profile="webhookTicketIvm"
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
                                    profile="webhookTicketIvm"
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

                    </div>

                </div>

            </div>

            <FOOTER />

        </main>

    )
}