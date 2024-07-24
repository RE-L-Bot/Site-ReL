import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method !== "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (!req.headers.guild_id)
        return res.status(400).send({ error: "NoBotRequest", status: 400 })

    try {

        await new RequestApi()
            .setApiEndPoint("ApiCentral")
            .setEndPoint("gMessageChannelNoPerm")
            .setHeaders({
                guild_id: req.headers.guild_id,
                authorization: process.env.AUTHCLIENT
            })
            .request()
            .then((data) => {
                res.status(200).send({ response: data.response, status: 200 })
            })
            .catch(e => res.status(400).send({ error: `${e}`, status: 400 }))

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }

}