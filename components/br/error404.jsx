import Head from "next/head"

export default function Error404() {
    return (
        <div>

            <Head>
                <title>404 • RE=L</title>
            </Head>

            <div className="divError" style={{ height: "95vh" }}>

                <img className="ImageError" src="/gifs/error404.gif" />

                <div>

                    <h1>Erro 404 Pagina não encontrada</h1>

                    <h3>Está pagina não foi encontrada nos arquivos do site</h3>

                    <h4>Caso ache que é um erro reporte no servidor de suporte</h4>

                    <div className="DivButtonSuportError">

                        <button onClick={redirectServidor}>

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

        </div>
    )
}

function redirectServidor() {
    window.open(
        "https://discord.gg/mmwUHd4Yzf",
        "_blank"
    )
}