import axios from "axios"

class RequesterManager {

    constructor(obj) {

        this.endpoints = {
            messageTicket: {
                endpoint: "sendmessageticket",
                method: "POST"
            },
            login: {
                endpoint: "login",
                method: "POST"
            },
            gGuildDash: {
                endpoint: "getguilddash",
                method: "GET"
            },
            gChannelsGuild: {
                endpoint: "getchannelsguild",
                method: "GET"

            },
            vInGuild: {
                endpoint: "verifyinguild",
                method: "POST"
            },
            gPremium: {
                endpoint: "checkpremium",
                method: "GET"
            },
            gLanguage: {
                endpoint: "getlanguage",
                method: "GET"
            },
            upLanguage: {
                endpoint: "updatelanguage",
                method: "PATCH"
            },
            upLog: {
                endpoint: "updatelog",
                method: "PATCH"
            },
            gLog: {
                endpoint: "getlog",
                method: "GET"
            },
            gRolesTicket: {
                endpoint: "getrolesticket",
                method: "GET"
            },
            dGuildDb: {
                endpoint: "deleteguilddb",
                method: "DELETE"
            },
            upChannelPermUse: {
                endpoint: "updateChannelsPermUse",
                method: "PATCH"
            },
            gChannelPermUse: {
                endpoint: "getChannelsPermUse",
                method: "PATCH"
            },
            gMessageChannelNoPerm: {
                endpoint: "getMessageSendChannelNoPerm",
                method: "GET"
            },
            upMessageChannelNoPerm: {
                endpoint: "updateMessageSendChannelNoPerm",
                method: "PATCH"
            },
            cPayment: {
                endpoint: "createPayment",
                method: "PUT"
            },
            gPayment: {
                endpoint: "getInfosPayment",
                method: "GET"
            }
        }

        this.headers = obj["headers"] || null
        this.endpoint = obj["endpoint"] || ""
        this.method = (obj["method"]) ? obj["method"].toUpperCase() : "GET"
        this.APIENDPOINT = obj["APIENDPOINT"] || obj["APIENDPOINTS"]["thisAPI"]
        this.body = obj["body"] || null

        console.log(this)

        if (this.endpoints[this.endpoint]) {

            this.method = this.endpoints[this.endpoint]["method"]

            this.endpoint = this.endpoints[this.endpoint]["endpoint"]

        }

    }

    async GET() {

        let returnedResponse = undefined

        await axios(
            `${this.APIENDPOINT}/${this.endpoint}`,
            {
                method: "GET",
                headers: this.headers,
                data: this.body
            }
        )
            .then((request) => request.data)
            .then((response) => {
                returnedResponse = response
            })
            .catch((error) => {
                returnedResponse = { status: error.response.status, response: error.response.statusText }
            })

        return returnedResponse

    }

    async PUT() {

        let returnedResponse = undefined

        await axios(
            `${this.APIENDPOINT}/${this.endpoint}`,
            {
                method: "PUT",
                headers: this.headers,
                data: this.body
            }
        )
            .then((request) => request.data)
            .then((response) => {
                returnedResponse = response
            })
            .catch((error) => {
                returnedResponse = { status: error.response.status, response: error.response.statusText }
            })

        return returnedResponse

    }

    async POST() {

        let returnedResponse = undefined

        await axios(
            `${this.APIENDPOINT}/${this.endpoint}`,
            {
                method: "POST",
                headers: this.headers,
                data: this.body
            }
        )
            .then((request) => request.data)
            .then((response) => {
                returnedResponse = response
            })
            .catch((error) => {
                console.log(error)
                returnedResponse = { status: error.response.data.status, response: error.response.data.error}
            })

        return returnedResponse

    }

    async PATCH() {

        let returnedResponse = undefined

        await axios(
            `${this.APIENDPOINT}/${this.endpoint}`,
            {
                method: "PATCH",
                headers: this.headers,
                data: this.body
            }
        )
            .then((request) => request.data)
            .then((response) => {
                returnedResponse = response
            })
            .catch((error) => {
                returnedResponse = { status: error.response.status, response: error.response.statusText }
            })

        return returnedResponse

    }

    async DELETE() {

        let returnedResponse = undefined

        await axios(
            `${this.APIENDPOINT}/${this.endpoint}`,
            {
                method: "DELETE",
                headers: this.headers,
                data: this.body
            }
        )
            .then((request) => request.data)
            .then((response) => {
                returnedResponse = response
            })
            .catch((error) => {
                returnedResponse = { status: error.response.status, response: error.response.statusText }
            })

        return returnedResponse

    }

    async request() {

        return await this[this.method]()

    }

}

export default class RequestApi {

    constructor() {
        this.APIENDPOINTS = {
            "thisAPI": "/api",
            "ApiCentral": process.env.URLAPI
        }
        this.headers = undefined
        this.endpoint = undefined
        this.method = undefined
        this.APIENDPOINT = undefined
        this.body = undefined
    }

    /**
     * @param {(RawAxiosRequestHeaders) | AxiosHeaders} header 
     */
    setHeaders(header) {
        this.headers = header
        return this
    }

    /**
     *  @param { "messageTicket" | "login" | "gGuildDash" | "gLanguage" |  "gChannelsGuild" | "vInGuild" | "gPremium" |  "upLanguage" |  "upLog" |  "gLog" |  "gRolesTicket" |  "dGuildDb" |  "upChannelPermUse" |  "gMessageChannelNoPerm" |  "upMessageChannelNoPerm" |  "cPayment" |  "gPayment" } request 
     */
    setEndPoint(request) {
        this.endpoint = request
        return this
    }

    /**
     * @param {"GET"| "PUT"| "POST"| "PATCH"| "DELETE"} method 
     */
    setMethod(method) {
        this.method = method
        return this
    }

    /**
     * @param {"thisAPI" | "ApiCentral"} apiEndPoint
     */
    setApiEndPoint(apiEndPoint) {

        if (this.APIENDPOINTS[apiEndPoint]){
            this.APIENDPOINT = this.APIENDPOINTS[apiEndPoint]
            return this
        }
        this.APIENDPOINT = apiEndPoint
        return this
    }

    /**
     * 
     * @param {Object} body 
     */
    setBody(body){
        this.body = body
        return this
    }

    async request() {

        console.log(this)

        return await new RequesterManager(this)
            .request()

    }

}