import HEADER from "@/components/en/headers"
import { GetGuildsDash } from "@/scripts/getters"
import AsideDashboard from "@/components/en/asideDashboard"
import Footer from "@/components/en/footers"
import Head from "next/head"

export default function Dashboard() {

    return (
        <div onLoad={GetGuildsDash()}>

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

        </div>

    )
}