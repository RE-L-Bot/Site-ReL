import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/en/headers";
import Footer from "@/components/en/footers";
import All from "@/components/en/pages/commands/all";
import Events from "@/components/en/pages/commands/event";
import Generals from "@/components/en/pages/commands/generals";
import Moderation from "@/components/en/pages/commands/moderation";
import Registro from "@/components/en/pages/commands/registro";
import Roleplay from "@/components/en/pages/commands/roleplay";
import Ticket from "@/components/en/pages/commands/ticket";
import Error404 from "@/components/en/error404";

export default function DashBoardId() {

	const id = useRouter().query.id

	const dataSet = {
		all: <All />,
		event: <Events />,
		generals: <Generals />,
		moderation: <Moderation />,
		registro: <Registro />,
		roleplay: <Roleplay />,
		ticket: <Ticket />,
		error404: <Error404 />
	}

	if (id !== undefined) {
		if (dataSet[id]) return (
			<div>
				<Header />
				{dataSet[id]}
				<Footer />
			</div>
		)
		else return (
			<div>
				<Header />
				{dataSet["error404"]}
				<Footer />
			</div>
		)
	} else {
		return <h3 style={{ margin: 0 }}>Carregando...</h3>
	}
}