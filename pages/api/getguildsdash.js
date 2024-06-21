export default async function handler(req, res) {

    if (req.method !== "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    try {

        fetch(
            `${process.env.URLAPI}/getguildsdash`,
            {
                method: "GET",
                headers: {
                    authorization: process.env.AUTHCLIENT,
                    authorization_dc: `${req.headers["token_type"]} ${req.headers["access_token"]}`,
                }
            }
        )
            .then(response => response.json())
            .then((data) => {
                res.status(200).send({ response: data.response, status: 200 })
            })
            .catch(e => console.log(e))

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }
}