import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method !== "PATCH")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (!req.headers.guild_id)
        return res.status(400).send({ error: "NoBotRequest", status: 400})

    try {

        await new RequestApi()
            .setApiEndPoint("ApiCentral")
            .setEndPoint("activeKey")
            .setHeaders({
                guild_id: req.headers.guild_id,
                idkey: req.headers.idkey,
                authorization: process.env.AUTHCLIENT
            })
            .request()
            .then((data) => {

                if (data.keys == 200)
                    return res.send({ status: 200 })

                return res.send({ status: 400 })
            })

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }

}