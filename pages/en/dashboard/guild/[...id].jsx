import { usePathname } from "next/navigation";
import React from "react";
import Header from "@/components/en/headers";
import Footer from "@/components/en/footers";
import Config from "@/components/en/pages/dashboard/guild/config";
import Ticket from "@/components/en/pages/dashboard/guild/ticket";
import Logs from "@/components/en/pages/dashboard/guild/logs";
import KeysPremiumPage from "@/components/en/pages/dashboard/guild/premium";
import Error404 from "@/components/en/error404";
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
		return <h1>Carregando...</h1>
	}

}