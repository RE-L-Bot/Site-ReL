import HEADER from "@/components/br/headers"
import { GetGuildsDash } from "@/scripts/getters"
import AsideDashboard from "@/components/br/asideDashboard"
import Footer from "@/components/br/footers"
import Head from "next/head"

export default function Dashboard() {

    return (
        <main onLoad={GetGuildsDash()}>

            <Head>
                <title>RE=L Bot • Dashboard</title>
            </Head>

            <HEADER />

            <div className="alignItens">

                <AsideDashboard />

                <div className="DIVDASHOVER">
                    <div id="guildsDIV"></div>
                </div>

            </div>

            <Footer />

        </main>

    )
}