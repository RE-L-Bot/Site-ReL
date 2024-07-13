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

                    <h1>Suas Keys Premium</h1>

                    <hr />

                    <h1 style={{ opacity: "50%" }} id="notKey">Você não possui Keys Premium</h1>

                    <div id="divKeys">
                    </div>

                </div>

            </div>

        </div>
    )
}