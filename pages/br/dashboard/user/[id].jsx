import { useRouter } from "next/router"

import Error404 from "@/components/br/error404"
import Footer from "@/components/br/footers"
import Header from "@/components/br/headers"
import Daily from "@/components/br/pages/dashboard/user/daily"

export default function DashBoardId() {

    const id = useRouter().query.id

    const dataSet = {
        daily: <Daily />,
        error404: <Error404 />
    }

    if (id !== undefined) {
        if (dataSet[id]) return (
            <>
                <Header />
                {dataSet[id]}
                <Footer />
            </>
        )
        else return (
            <>
                <Header />
                {dataSet["error404"]}
                <Footer />
            </>
        )
    } else {
        return <h1>Carregando...</h1>
    }
}