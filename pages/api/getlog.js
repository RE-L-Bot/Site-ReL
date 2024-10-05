import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method != "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (
        !req.headers.guild_id ||
        !req.headers["sec-fetch-site"] ||
        req.headers["sec-fetch-site"] && req.headers["sec-fetch-site"] != "same-origin"
    )
        return res.status(400).send({ error: "NotSiteRequest", status: 400 })

    await new RequestApi()
        .setApiEndPoint("ApiCentral")
        .setEndPoint("gLog")
        .setHeaders({
            guild_id: req.headers.guild_id,
            log: req.headers.log,
            authorization: process.env.AUTHCLIENT
        })
        .request()
        .then(data => {
            res.status(200).send({ response: data.response, status: 200 })
        })
        .catch(e => {
            res.status(400).send({ response: e, status: 400 })
        })

        

}