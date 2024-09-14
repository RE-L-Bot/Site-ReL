import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method !== "PATCH")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (
        !req.headers.guild_id ||
        !req.headers["sec-fetch-site"] ||
        req.headers["sec-fetch-site"] && req.headers["sec-fetch-site"] != "same-origin"
    )
        return res.status(400).send({ error: "NotSiteRequest", status: 400 })

    try {

       await new RequestApi()
            .setApiEndPoint("ApiCentral")
            .setEndPoint("upMessageChannelNoPerm")
            .setHeaders({
                guild_id: req.headers.guild_id,
                message: req.headers.message,
                authorization: process.env.AUTHCLIENT
            })
            .request()
            .then((data) => {
                res.status(200).send({ response: data.response, status: 200 })
            })


    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }

}