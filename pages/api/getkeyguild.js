export default async function handler(req, res) {

    if (req.method !== "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    try {

        fetch(
            `${process.env.URLAPI}/getkeyguild`,
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
                res.status(200).send(data)
            })

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }

}