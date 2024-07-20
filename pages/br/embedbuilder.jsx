import EmbedContructor from "@/components/br/embed/embedContructor"
import Footer from "@/components/br/footers"
import FormEmbed from "@/components/br/formEmbed"
import HEADER from "@/components/br/headers"
import Head from "next/head"

export default function EmbedBuilder() {

    return (
        <main>

            <Head>

                <title>Contrutor de embed</title>

            </Head>

            <HEADER />

            <div style={{ margin: "50px" }}>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>

                    <FormEmbed />

                    <EmbedContructor />

                </div>

                <div style={{ justifyContent: "end", display: "flex" }}>

                    <input type="button" value="Gerar Json" onClick={(e) => { gerarembed(e) }} style={{ marginRight: "20px", padding: "20px", borderRadius: "10px" }} />

                </div>

                <code style={{ justifyContent: "center", display: "flex" }}>

                    <pre id="JSONEMBED" readOnly style={{ resize: "none", width: "50%", border: "solid", borderRadius: "10px", right: "none", cursor: "no-drop" }} />

                    <input type="text" id="textInput" style={{ display: "none" }} />

                </code>

            </div>

            <div style={{ textAlign: "center" }}>

                <button onClick={copyText} style={{ padding: "20px", borderRadius: "10px" }}>Copiar Json</button>

            </div>

            <Footer />
        </main>
    )

}

function gerarembed() {

    const textaerea = document.getElementById("JSONEMBED")

    textaerea.innerText = JSON.stringify(JSON.parse(localStorage.getItem("embedObject")), null, 4)

    const text = document.getElementById("textInput");

    text.defaultValue = JSON.stringify(JSON.parse(localStorage.getItem("embedObject")), null, 4)

}

function copyText() {

    var text = document.getElementById("textInput");

    text.select();

    if (text.defaultValue.length == 0) return

    navigator.clipboard.writeText(text.value);

    alert("Copiado");

}

