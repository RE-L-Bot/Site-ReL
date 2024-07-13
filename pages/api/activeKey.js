export default async function handler(req, res) {

    if (req.method !== "PATCH")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    try {

        fetch(
            `${process.env.URLAPI}/activeKey`,
            {
                method: "PATCH",
                headers: {
                    guild_id: req.headers.guild_id,
                    idkey: req.headers.idkey,
                    authorization: process.env.AUTHCLIENT
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {

                if (data.keys == 200)
                    return res.send({ status: 200 })

                return res.send({ status: 400 })
            })

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }

}