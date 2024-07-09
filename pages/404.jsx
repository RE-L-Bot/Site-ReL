import Head from "next/head"
import HEADER from "@/components/br/headers"
import Footer from "@/components/br/footers"

export default function Error404() {

    return (
        <div>

            <Head>
                <title>404 • RE=L</title>
            </Head>

            <HEADER />

            <div className="divError">

                <img className="ImageError" src="/gifs/error404.gif" />

                <div>

                    <h1>Erro 404 Pagina não encontrada</h1>

                    <h3>Está pagina não foi encontrada nos arquivos do site</h3>

                    <h4>Caso ache que é um erro reporte no servidor de suporte</h4>

                    <div className="DivButtonSuportError">

                        <button className="" onClick={redirectServidor}>

                            <div>
                                <div>
                                    <img src="/svgs/discordiconSVG.svg" alt="discord icon" />
                                </div>

                                <div>
                                    Meu servidor
                                </div>
                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )

}

function redirectServidor() {
    window.open(
        "https://discord.gg/mmwUHd4Yzf",
        "_blank"
    )
}