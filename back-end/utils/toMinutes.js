const { split } = require("../../front-end/src/config/base-url")

module.exports = h => {
    const [hours, minutes] = h.split(":")
    const timeInMinutes = (hours*60) + minutes
    return parseInt(timeInMinutes)
}