import {
    DiscordCommand,
    DiscordCustomEmoji,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordMessage,
    DiscordMessages,
    DiscordTime
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    style={{ marginLeft: "56px" }}
                    slot="reply"
                    profile="marciel404"
                    command="gerais serverinfo"
                ></DiscordCommand>

                <DiscordEmbed
                    slot="embeds"
                    embedTitle="Informações do servidor"
                    thumbnail="https://images-ext-1.discordapp.net/external/End4uqNSssZyzlEGItDQzbLy_kctiB5N0zS23FFXHQI/https/cdn.discordapp.com/icons/1153322679999397898/2758142f8364113ddeb3f40394a5fbcb.webp?format=webp"
                    color="#00008b"
                >

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"identificationemoji Nome"} inline inlineIndex={1}>
                            RE=L (Support)
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"identificationemoji Id"} inline inlineIndex={2}>
                            1153322679999397898
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"owneryellowemoji Dono"} inline inlineIndex={3}>
                            marciel404 485801281621852175
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"membersemoji Membros"} inline inlineIndex={1}>
                            21
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"listemoji Canais (39)"} inline inlineIndex={2}>

                            <DiscordCustomEmoji name="textchannelemoji">
                            </DiscordCustomEmoji> Texto: 21 <br />

                            <DiscordCustomEmoji name="voicechannelemoji">
                            </DiscordCustomEmoji> Voz: 18

                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"dateemoji Criado em"} inline inlineIndex={3}>
                            <DiscordTime>
                                18 de setembro de
                            </DiscordTime> <br />
                            <DiscordTime>
                                2023 às 10:32 (há
                            </DiscordTime> <br />
                            <DiscordTime>
                                {(Number(new Date().getFullYear()) - 2023)} {((Number(new Date().getFullYear()) - 2023) > 1) ? "anos" : "ano"})
                            </DiscordTime>
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"🛡 Nivel de segurança"} inline inlineIndex={1}>
                            Muito alto
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"start2emoji Entrei aqui em"} inline inlineIndex={2}>
                            <DiscordTime>
                                18 de setembro de
                            </DiscordTime> <br />
                            <DiscordTime>
                                2023 às 10:36 (há
                            </DiscordTime> <br />
                            <DiscordTime>
                                {(Number(new Date().getFullYear()) - 2023)} {((Number(new Date().getFullYear()) - 2023) > 1) ? "anos" : "ano"})
                            </DiscordTime>
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"rolesdiscordemoji Cargos"} inline inlineIndex={3}>
                            78
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                    <DiscordEmbedFields slot="fields">

                        <DiscordEmbedField fieldTitle={"😁 Emojis"} inline inlineIndex={1}>
                            0
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"🎞 Figurinhas"} inline inlineIndex={2}>
                            0
                        </DiscordEmbedField>

                        <DiscordEmbedField fieldTitle={"Sharid"} inline inlineIndex={3}>
                            0
                        </DiscordEmbedField>

                    </DiscordEmbedFields>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>
    )
}