import TopMenu from "@/components/br/TopMenu";
import { checkKeysPremium } from "@/scripts/checks";
import Head from "next/head";

export default function keysPremium() {
    return (

        <div onLoad={checkKeysPremium()}>

            <Head>
                <title>RE=L Bot • Keys Premium</title>
            </Head>

            <div className="alignItens">

                <TopMenu />

                <div style={{ padding: "10px" }}>

                    <h3>Suas Keys Premium</h3>

                    <hr />

                    <div id="actvatedPremium" style={{ display: "none" }}>

                        <h3>
                            Premium ativado
                        </h3>

                        <div className="SelectTipeCommand">

                            <h3 id="typePremium" />

                            <p style={{ opacity: "50%" }} id="daysPremium" />

                        </div>

                    </div>

                    <h3 style={{ opacity: "50%" }} id="notKey">Você não possui Keys Premium</h3>

                    <div id="divKeys">
                    </div>

                </div>

            </div>

        </div>
    )
}