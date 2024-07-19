import { useState } from "react";
import EmbedEditor from "@/components/br/embed/EmbedEditor";
import EmbedBuilder from "@/components/br/embed/EmbedBuilder";
import Header from "@/components/br/headers";
import EmbedContructor from "@/components/br/embed/embedContructor";
import FormEmbed from "@/components/br/formEmbed";

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

                    <EmbedBuilder embed={embed} />

                </div>

            </div>

        </main>
    )
}