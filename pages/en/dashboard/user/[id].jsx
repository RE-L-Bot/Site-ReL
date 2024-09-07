import { useRouter } from "next/router"

import Error404 from "@/components/en/error404"
import Footer from "@/components/en/footers"
import Header from "@/components/en/headers"
import Daily from "@/components/en/pages/dashboard/user/daily"

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