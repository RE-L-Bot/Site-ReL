import { useState } from "react";
import EmbedEditor from "@/components/br/embed/EmbedEditor";
import EmbedBuilder from "@/components/br/embed/EmbedBuilder";
import Header from "@/components/br/headers";
import { DiscordMessages, DiscordMessage,DiscordAttachments, DiscordStringSelectMenu, DiscordStringSelectMenuOption } from "@skyra/discord-components-react";

export default function Teste() {

    const [embed, setEmbed] = useState({
        title: '',
        description: [""],
        authorName: "",
        authorUrl: "",
        authorImage: "",
        imageUrl: "",
        thumbnailUrl: "",
        color: '#0000ff',
        fields: [],
        url: ""
    });

    const handleEmbedChange = (newEmbed) => {
        setEmbed(newEmbed);
    };

    return (
        <main>

            <Header />

            <div id="embedBuilder">

                <div id="editorEmbed">

                    <EmbedEditor onEmbedChange={handleEmbedChange} />

                </div>

                <div id="embedPreview">

                    <DiscordMessages noBackground>

                        <DiscordMessage id="AuthorMessage" author="RE=L" bot verified avatar="https://images-ext-1.discordapp.net/external/3LBc_lYPIjZbMNBSYtx0t-Tch2fMtZLoIcvzIfAVTM0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1018958083764002919/72e160dd9dc0d2952529c3388c81715d.webp?format=webp&width=473&height=473">

                            <EmbedBuilder embed={embed} />

                            <DiscordAttachments slot="components">

                                <DiscordStringSelectMenu placeholder="Selecione uma opção">
                                   
                                </DiscordStringSelectMenu>

                            </DiscordAttachments>

                        </DiscordMessage>

                    </DiscordMessages>

                </div>

            </div>

        </main>
    )
}