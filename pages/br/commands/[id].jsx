import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/br/headers";
import Footer from "@/components/br/footers";
import All from "@/components/br/pages/commands/all";
import Events from "@/components/br/pages/commands/event";
import Generals from "@/components/br/pages/commands/generals";
import Moderation from "@/components/br/pages/commands/moderation";
import Registro from "@/components/br/pages/commands/registro";
import Roleplay from "@/components/br/pages/commands/roleplay";
import Ticket from "@/components/br/pages/commands/ticket";
import Error404 from "@/components/br/error404";

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
		return <h3>Carregando...</h3>
	}
}