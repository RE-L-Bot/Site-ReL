import { configData } from "@/scripts/login"
import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method !== "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (
        !req.headers.origin ||
        !req.headers.authorization ||
        req.headers.origin && req.headers.origin.replace(/[https:\/\/]/g, "") != req.headers.host.replace(/[https:\/\/]/g, "")
    )
        return res.status(400).send({ error: "NotSiteRequest", status: 400 })

    try {

        new RequestApi()
            .setApiEndPoint(`${configData["API_ENDPOINT"]}`)
            .setEndPoint("users/@me")
            .setMethod("GET")
            .setHeaders({
                authorization: req.headers.authorization
            })
            .request()
            .then(response => {
                res.status(200).send(response)
            })

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }

}