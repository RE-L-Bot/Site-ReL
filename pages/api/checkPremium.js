export default async function handler(req, res) {

    if (req.method !== "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (!req.headers.guild_id)
        return res.status(400).send({ error: "NoBotRequest", status: 400})

    try {

        fetch(
            `${process.env.URLAPI}/checkpremium`,
            {
                method: "GET",
                headers: {
                    guild_id: req.headers.guild_id,
                    authorization: process.env.AUTHCLIENT
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                res.status(200).send({ response: data.response, status: 200 })
            })

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }

}