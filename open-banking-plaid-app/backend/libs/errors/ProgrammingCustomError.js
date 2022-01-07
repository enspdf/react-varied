class ProgrammingCustomError extends Error {
    constructor(error) {
        const displayMessage = "Something went wrong"
        const devMessage = error.message ? error.message : displayMessage

        super(displayMessage)

        this._name = error.name ? error.name : "UnknownError"
        this._devMessage = devMessage
        this._status = error.statusCode ? error.statusCode : 500
        this._code = error.code ? error.code : "UNKNOWN_ERROR_CODE"
        this._type = error.type ? error.type : "UNKNOWN_ERROR_TYPE"
    }

    get name() {
        return this._name
    }

    get status() {
        return this._status
    }

    get code() {
        return this._code
    }

    get type() {
        return this._type
    }

    apiResponse(res) {
        res.status(this._status)
        res.send({
            "name": this._name,
            "message": this.message,
            "code": this._code,
            "type": this._type,
        })

        console.error(this.stack)
        process.exit(0)
    }
}

module.exports = ProgrammingCustomError