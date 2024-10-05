import { useState } from "react";
import EmbedEditor from "@/components/br/embed/EmbedEditor";
import EmbedBuilder from "@/components/br/embed/EmbedBuilder";
import Header from "@/components/br/headers";
import Head from "next/head";
import Footer from "@/components/br/footers";

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
        <div>

            <Head>
                <title>Contrutor de embed</title>
            </Head>

            <Header />

            <div id="embedBuilder" >

                <div id="editorEmbed">

                    <EmbedEditor onEmbedChange={handleEmbedChange} />

                </div>

                <div id="embedPreview">

                    <EmbedBuilder embed={embed} />

                </div>

            </div>

            <code style={{ justifyContent: "center", display: "flex" }}>

                <pre id="JSONEMBED" readOnly style={{ resize: "none", width: "50%", border: "solid", borderRadius: "10px", right: "none", cursor: "no-drop" }} />

                <input type="text" id="textInput" style={{ display: "none" }} />

            </code>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "end" }}>

                <div style={{ textAlign: "center" }}>

                    <button onClick={e => gerarembed(embed)} style={{ padding: "20px", borderRadius: "10px" }}>Gerar Json</button>

                </div>

                <div style={{ textAlign: "center" }}>

                    <button onClick={copyText} style={{ padding: "20px", borderRadius: "10px" }}>Copiar Json</button>

                </div>

            </div>

            <Footer />

        </div>
    )
}

function gerarembed(embedOption) {

    const embed = {
        title: embedOption.title,
        description: embedOption.description[0],
        author: {
            name: embedOption.authorName,
            icon_url: embedOption.authorImage,
            url: embedOption.authorUrl
        },
        thumbnail: {
            url: embedOption.thumbnailUrl
        },
        image: {
            url: embedOption.imageUrl
        },
        color: Number(embedOption.color.replace("#", "0x")),
        fields: embedOption.fields,
        url: embedOption.url,
    }

    if (
        embed.title.length < 1 &&
        embed.description.length < 1 &&
        embed.author.name.length < 1 &&
        embed.image.url.length < 1 &&
        embed.thumbnail.url.length < 1
    ) {

        const langP = window.location.pathname.slice(1, 3)

        const messages = {
            br: {
                emptyEmbed: "Eu não posso gerar uma embed vazia"
            },
            es: {
                emptyEmbed: "No puedo generar una embed vacía"
            },
            us: {
                emptyEmbed: "I can't generate a empty embed"
            }
        }

        window.alert(messages[langP]["emptyEmbed"])

        return undefined

    }

    const textaerea = document.getElementById("JSONEMBED")

    textaerea.innerText = JSON.stringify(embed, null, 4)

    const text = document.getElementById("textInput");

    text.defaultValue = JSON.stringify(JSON.parse(sessionStorage.getItem("embedObject")), null, 4)

}

function copyText() {

    var text = document.getElementById("textInput");

    text.select();

    if (text.defaultValue.length == 0) return

    navigator.clipboard.writeText(text.value);

    alert("Copiado");

}