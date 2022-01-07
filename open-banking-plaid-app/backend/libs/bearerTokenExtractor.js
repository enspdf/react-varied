const bearerTokenExtractor = (fullAuthroizationHeader) => {
    return fullAuthroizationHeader.split(' ')[1];
}

module.exports = bearerTokenExtractor