import axios from "axios"

export default async function handler(req, res) {

    if (req.method !== "PUT")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    await axios(
        `${process.env.URLAPI}/createpayment`,
        {
            method: "PUT",
            headers: {
                authorization: process.env.AUTHCLIENT,
            },
            data: {
                keymp: process.env.KEYMP,
                value: req.body.value,
                type: req.body.type,
                time: req.body.time,
                idUser: req.body.idUser
            }
        }
    )
        .then(x => x.data)
        .then((resp) => {
            res.send({ response: resp.response })
        })

}