import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
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

const nameCatCommand = "registro"

export default function RegisterCommands() {
    return (
        <>

            <main className="CommandsList">

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentadccreg" onClick={(event) => changeDisplayNoneToAndResetAll(event, "adccreg", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandadccreg">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        adicionar_cargo_registro
                                    </h3>

                                    <p>
                                        Adiciona um cargo ao registro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandRegistro sobDiv">
                                    Registro
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandadccreg">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Adiciona um cargo a uma categoria dos cargos de <br />
                                    ° registro
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Categoria: Categoria para adicionar o cargo (Necessário) <br />
                                    ° Nome: Nome do que vai aparecer no SelecMenu (Necessário) <br />
                                    ° Categoria: Cargo para adicionar (Necessário)
                                </h5>

                                <br />

                                <h4>
                                    Representação do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentcargos_defaults" onClick={(event) => changeDisplayNoneToAndResetAll(event, "cargos_defaults", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandcargos_defaults">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        cargos_defaults
                                    </h3>

                                    <p>
                                        Adiciona os cargos defaults do registro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandRegistro sobDiv">
                                    Registro
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandcargos_defaults">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Adiciona os cargos que é para adicionar e remover <br />
                                    ° por padrão ao finalizar o registro
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° cargo_final_reg: Cargo para adicionar depois de registrado (Necessário) <br />
                                    ° cargo_default_reg: Cargo para remover depois de registrado (Opcional) <br />
                                </h5>

                                <br />

                                <h4>
                                    Representação do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentdelete_categoria" onClick={(event) => changeDisplayNoneToAndResetAll(event, "delete_categoria", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expanddelete_categoria">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        deletar_categoria_registro
                                    </h3>

                                    <p>
                                        Deleta uma categoria do registro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandRegistro sobDiv">
                                    Registro
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommanddelete_categoria">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Deleta uma categoria categoria de registro existente<br />
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Categoria: Categoria a deletar (Necessário) <br />
                                </h5>

                                <br />

                                <h4>
                                    Representação do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentregistrar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "registrar", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandregistrar">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        registrar
                                    </h3>

                                    <p>
                                        Registra um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandRegistro sobDiv">
                                    Registro
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandregistrar">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Registra um membro no seu servidor<br />
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: Membro a registrar (Necessário) <br />
                                    ° Modo: Se ira adicionar ou remover os cargos (Necessário)
                                </h5>

                                <br />

                                <h4>
                                    Representação do comando:
                                </h4>

                                <DiscordMessages style={{ borderRadius: "5px" }}>

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

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentremover_cargo_registro" onClick={(event) => changeDisplayNoneToAndResetAll(event, "remover_cargo_registro", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandremover_cargo_registro">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        remover_cargo_registro
                                    </h3>

                                    <p>
                                        Remove um cargo de uma categoria do registro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandRegistro sobDiv">
                                    Registro
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandremover_cargo_registro">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Remove um cargo de registro de uma categoria<br />
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Categoria: Nome da categoria que o cargo esta (Necessário) <br />
                                    ° Nome: Nome do cargo a remover da categoria (Necessário)
                                </h5>

                                <br />

                                <h4>
                                    Representação do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </>
    )
}