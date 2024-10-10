import Head from "next/head"

export default function Error404() {
    return (
        <div>

            <Head>
                <title>404 • RE=L</title>
            </Head>

            <div className="divError" style={{ height: "95vh" }}>

                <img className="ImageError" src="/gifs/error404.gif" alt="Error 404" />

                <div>

                    <h3 style={{ margin: 0 }}>Error 404 Page Not Found</h3>

                    <h3 style={{ margin: 0 }}>This page could not be found in the site's files</h3>

                    <h4 style={{ margin: 0 }}>If you believe this is an error, report it on the support server</h4>

                    <div className="DivButtonSuportError">

                        <button onClick={redirectServidor}>

                            <div>
                                <div>
                                    <img src="/svgs/discordiconSVG.svg" alt="Discord icon" />
                                </div>

                                <div>
                                    My Server
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