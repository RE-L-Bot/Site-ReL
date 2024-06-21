import HEADER from "@/components/br/headers"
import { GetGuildsDash } from "@/scripts/getters"
import AsideDashboard from "@/components/br/asideDashboard"
import Footer from "@/components/br/footers"

export default function Dashboard() {
    
    return (
        <main onLoad={GetGuildsDash()}>

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