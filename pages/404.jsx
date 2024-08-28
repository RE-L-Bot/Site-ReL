import { usePathname } from "next/navigation"
import Error404ComponentBR from "@/components/br/error404";
import FooterBR from "@/components/br/footers";
import HeaderBR from "@/components/br/headers";

export default function Error404() {

    let lang = usePathname()
    lang = lang.split("/")
    lang = lang[1]

    const dataSet = {
        "br": <>
            <HeaderBR />
            <Error404ComponentBR />
            <FooterBR />
        </>
    }

    if (lang !== "br") {
        return dataSet[`br`]
    }

}