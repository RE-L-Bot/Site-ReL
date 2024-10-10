import { usePathname } from "next/navigation";
import React from "react";
import Header from "@/components/br/headers";
import Footer from "@/components/br/footers";
import Config from "@/components/br/pages/dashboard/guild/config";
import Ticket from "@/components/br/pages/dashboard/guild/ticket";
import Logs from "@/components/br/pages/dashboard/guild/logs";
import KeysPremiumPage from "@/components/br/pages/dashboard/guild/premium";
import Error404 from "@/components/br/error404";
import { checkGuildPermissions } from "@/scripts/checks";

export default function DashBoardId() {

	let id = usePathname()

	checkGuildPermissions()

	const dataSet = {
		configure: <Config />,
		ticket: <Ticket />,
		logs: <Logs />,
		keyspremium: <KeysPremiumPage />,
		error404: <Error404 />
	}

	if (id) {

		id = id.split("/")

		if (dataSet[id[id.length - 1]]) return (
			<>
				<Header />
				{dataSet[id[id.length - 1]]}
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
		return <h3>Carregando...</h3>
	}

}