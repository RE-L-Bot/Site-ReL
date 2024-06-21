export default async function handler(req, res) {

    if (req.method != "POST")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    fetch(
        `${process.env.URLAPI}/sendmessageticket`,
        {
            method: "POST",
            headers: {
                channel_id: req.headers.channel_id,
                webhook: req.headers.quem,
                username: req.headers.username,
                "content-type": "application/json",
                authorization: process.env.AUTHCLIENT
            },
            body: JSON.stringify(req.body)
        }
    )
        .then((r) => r.json())
        .then((rD) => {

            if (rD.status != 200) {
                return res.status(400).send({ error: rD.error, status: 400 })
            }

            res.status(200).send({ response: rD.sucess, status: 200 })

        })

}