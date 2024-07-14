import { useState } from "react";
import EmbedEditor from "@/components/br/EmbedEditor";
import EmbedBuilder from "@/components/br/EmbedBuilder";

const App = () => {

    const [embed, setEmbed] = useState({
        title: '',
        description: [],
        authorName: "",
        authorUrl: "",
        authorImage: "",
        imageUrl: "",
        thumbnailUrl: "",
        color: '#0000ff',
        fields: [],
    });

    const handleEmbedChange = (newEmbed) => {
        setEmbed(newEmbed);
    };

    return (
        <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
            <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg shadow-md custom-shadow-md card-hover">
                <EmbedEditor onEmbedChange={handleEmbedChange} />
            </div>
            <EmbedBuilder embed={embed} />
        </div>
    );
};

export default function Teste() {

    return (
        <main style={{ minHeight: "100vh", minWidth: "100vh" }}>

            <App />

        </main>
    )
}