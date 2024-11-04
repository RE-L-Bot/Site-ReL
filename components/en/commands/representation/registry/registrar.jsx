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
                Representation of the registration system
            </h4>

            <h5 style={{ opacity: "50%" }}>(Click on buttons to interact)</h5>

            <hr />

            <div id="div-main-registration">

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="register"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        slot="embeds"
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registration"
                    >

                        <DiscordEmbedDescription slot="description">
                            Choose the category you want
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
                                    document.getElementById("div-main-registration").style.display = "none"
                                    document.getElementById("div-gender-registration").style.display = "block"
                                }}
                            >
                                Gender
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-main-registration").style.display = "none"
                                    document.getElementById("div-sexuality-registration").style.display = "block"
                                }}
                            >
                                Sexuality
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-main-registration").style.display = "none"
                                    document.getElementById("div-region-registration").style.display = "block"
                                }}
                            >
                                Region
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-main-registration").style.display = "none"
                                    document.getElementById("div-platform-registration").style.display = "block"
                                }}
                            >
                                Platform
                            </DiscordButton>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-main-registration").style.display = "none"
                                    document.getElementById("div-relationship-registration").style.display = "block"
                                }}
                            >
                                Relationship
                            </DiscordButton>

                        </DiscordActionRow>

                        <DiscordActionRow>

                            <DiscordButton
                                type="primary"
                                onClick={() => {
                                    document.getElementById("div-main-registration").style.display = "none"
                                    document.getElementById("div-age-registration").style.display = "block"
                                }}
                            >
                                Age
                            </DiscordButton>

                        </DiscordActionRow>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>


            <div id="div-gender-registration" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="register"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registration"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Male" inline inlineIndex={1}>
                                <DiscordMention type="role"> ♂️ ┇ Male </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Female" inline inlineIndex={2}>
                                <DiscordMention type="role"> ♀️ ┇ Female </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Transgender" inline inlineIndex={3}>
                                <DiscordMention type="role"> ⚧️ ┇ Transgender </DiscordMention>
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Non-binary" inline inlineIndex={1}>
                                <DiscordMention type="role"> ✴️ ┇ Non-binary </DiscordMention>
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Male"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Female"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Transgender"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Non-binary"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Back"
                                selectOption={() => {
                                    document.getElementById("div-gender-registration").style.display = "none"
                                    document.getElementById("div-main-registration").style.display = "block"
                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finish"
                                selectOption={() => {
                                    document.getElementById("div-gender-registration").style.display = "none"
                                    document.getElementById("div-success-register").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-sexuality-registration" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="register"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registration"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Heterosexual" inline inlineIndex={1}>
                                <DiscordMention type="role"> 🌂 ┇ Heterosexual </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="LGBT" inline inlineIndex={2}>
                                <DiscordMention type="role"> ☂️ ┇ LGBT </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Asexual" inline inlineIndex={3}>
                                <DiscordMention type="role"> ☔️ ┇ Asexual </DiscordMention>
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Heterosexual"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="LGBT"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Asexual"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Back"
                                selectOption={() => {
                                    document.getElementById("div-sexuality-registration").style.display = "none"
                                    document.getElementById("div-main-registration").style.display = "block"
                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finish"
                                selectOption={() => {
                                    document.getElementById("div-sexuality-registration").style.display = "none"
                                    document.getElementById("div-success-register").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-region-registration" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="register"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registration"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Northeast" inline inlineIndex={1}>
                                <DiscordMention type="role"> 🌘 ┇ Northeast </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="North" inline inlineIndex={2}>
                                <DiscordMention type="role"> 🌔 ┇ North </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Central-West" inline inlineIndex={3}>
                                <DiscordMention type="role"> 🌕 ┇ Central-West </DiscordMention>
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="South" inline inlineIndex={1}>
                                <DiscordMention type="role"> 🌖 ┇ South </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Southeast" inline inlineIndex={2}>
                                <DiscordMention type="role"> 🌒 ┇ Southeast </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Foreigner" inline inlineIndex={3}>
                                <DiscordMention type="role"> 🌑 ┇ Foreigner </DiscordMention>
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Northeast"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="North"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Central-West"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="South"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Southeast"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Foreigner"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Back"
                                selectOption={() => {
                                    document.getElementById("div-region-registration").style.display = "none"
                                    document.getElementById("div-main-registration").style.display = "block"
                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finish"
                                selectOption={() => {
                                    document.getElementById("div-region-registration").style.display = "none"
                                    document.getElementById("div-success-register").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-platform-registration" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="register"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registration"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Mobile" inline inlineIndex={1}>
                                <DiscordMention type="role"> 📱 ┇ Mobile </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Computer" inline inlineIndex={2}>
                                <DiscordMention type="role"> ⌨️ ┇ Computer </DiscordMention>
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
                                label="Mobile"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Computer"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Console"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Back"
                                selectOption={() => {
                                    document.getElementById("div-platform-registration").style.display = "none"
                                    document.getElementById("div-main-registration").style.display = "block"
                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finish"
                                selectOption={() => {
                                    document.getElementById("div-platform-registration").style.display = "none"
                                    document.getElementById("div-success-register").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>


            <div id="div-relationship-registration" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="register"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registration"
                    >

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Single" inline inlineIndex={1}>
                                <DiscordMention type="role"> 💔 ┇ Single </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="Dating" inline inlineIndex={2}>
                                <DiscordMention type="role"> 💌 ┇ Dating </DiscordMention>
                            </DiscordEmbedField>

                            <DiscordEmbedField fieldTitle="In a Relationship" inline inlineIndex={3}>
                                <DiscordMention type="role"> 💗 ┇ In a Relationship </DiscordMention>
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFields slot="fields">

                            <DiscordEmbedField fieldTitle="Married" inline inlineIndex={1}>
                                <DiscordMention type="role"> 💕 ┇ Married </DiscordMention>
                            </DiscordEmbedField>

                        </DiscordEmbedFields>

                        <DiscordEmbedFooter slot="footer">
                            143
                        </DiscordEmbedFooter>

                    </DiscordEmbed>

                    <DiscordAttachments slot="components">

                        <DiscordStringSelectMenu>

                            <DiscordStringSelectMenuOption
                                label="Single"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Dating"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="In a Relationship"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Married"
                            >
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Back"
                                selectOption={() => {
                                    document.getElementById("div-relationship-registration").style.display = "none"
                                    document.getElementById("div-main-registration").style.display = "block"
                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finish"
                                selectOption={() => {
                                    document.getElementById("div-relationship-registration").style.display = "none"
                                    document.getElementById("div-success-register").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-age-registration" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    edited
                >

                    <DiscordCommand
                        
                        slot="reply"
                        command="register"
                        profile="marciel404"
                    >
                    </DiscordCommand>

                    <DiscordEmbed
                        authorName="marciel404"
                        authorImage="https://cdn.discordapp.com/avatars/485801281621852175/8926329a666153f0002db880fb860142.webp?size=2048.webp?size=2048"
                        color="#00008b"
                        authorUrl="/users/485801281621852175"
                        embedTitle="Registration"
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
                                label="Back"
                                selectOption={() => {
                                    document.getElementById("div-age-registration").style.display = "none"
                                    document.getElementById("div-main-registration").style.display = "block"
                                }}>
                            </DiscordStringSelectMenuOption>

                            <DiscordStringSelectMenuOption
                                label="Finish"
                                selectOption={() => {
                                    document.getElementById("div-age-registration").style.display = "none"
                                    document.getElementById("div-success-register").style.display = "block"
                                }}
                            >
                            </DiscordStringSelectMenuOption>

                        </DiscordStringSelectMenu>

                    </DiscordAttachments>

                </DiscordMessage>

            </div>

            <div id="div-success-register" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                    dismissMessageClicked={() => {
                        document.getElementById("div-main-registration").style.display = "block"
                        document.getElementById("div-success-register").style.display = "none"
                    }}
                >

                    <DiscordReply
                        slot="reply"
                        
                        deleted
                    >
                    </DiscordReply>

                    Member registered successfully

                </DiscordMessage>

            </div>


        </DiscordMessages>
    )
}