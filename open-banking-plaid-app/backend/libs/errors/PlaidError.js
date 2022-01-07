class PlaidError extends Error {
    constructor(plaidErrorJson) {
        const displayMessage = plaidErrorJson.display_message ? plaidErrorJson.display_message : "Something went wrong with Plaid"
        const devMessage = plaidErrorJson.error_message ? plaidErrorJson.error_message : displayMessage

        super(displayMessage)

        this._name = plaidErrorJson.name ? plaidErrorJson.name : "PlaidError"
        this._devMessage = devMessage
        this._requestID = plaidErrorJson.request_id ? plaidErrorJson.request_id : null
        this._status = plaidErrorJson.status_code ? plaidErrorJson.status_code : 500
        this._code = plaidErrorJson.error_code ? plaidErrorJson.error_code : "PLAID_ERROR"
        this._type = plaidErrorJson.error_type ? plaidErrorJson.error_type : "UNDEFINED_PLAID_ERROR"
        this._suggestedAction = plaidErrorJson.suggested_action ? plaidErrorJson.suggested_action : null
        this._documentationURL = plaidErrorJson.documentation_url ? plaidErrorJson.documentation_url : null
    }

    get name() {
        return this._name
    }

    get requestID() {
        return this._requestID
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

    get suggestedAction() {
        return this._suggestedAction
    }

    get documentationURL() {
        return this._documentationURL
    }

    apiResponse(res) {
        res.status(this._status)
        res.send({
            "name": this._name,
            "requestID": this._requestID,
            "message": this.message,
            "code": this._code,
            "type": this._type,
            "suggestedAction": this._suggestedAction,
            "documentationURL": this._documentationURL
        })
    }
}

module.exports = PlaidError;