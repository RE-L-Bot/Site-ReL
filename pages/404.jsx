import { usePathname } from "next/navigation"
import Error404ComponentBR from "@/components/br/error404";
import FooterBR from "@/components/br/footers";
import HeaderBR from "@/components/br/headers";
import Error404ComponentEN from "@/components/en/error404";
import FooterEN from "@/components/en/footers";
import HeaderEN from "@/components/en/headers";

export default function Error404() {

    let lang = usePathname()
    lang = lang.split("/")
    lang = lang[1]

    const dataSet = {
        "br": <>
            <HeaderBR />
            <Error404ComponentBR />
            <FooterBR />
        </>,
        "en": <>
            <HeaderEN />
            <Error404ComponentEN />
            <FooterEN />
        </>
    }

    if (lang === "br") {
        return dataSet[`br`]
    } else if (lang === "en") {
        return dataSet[`en`]
    }


}