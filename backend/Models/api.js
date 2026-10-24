const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
    apiUrl: {
        type: String,
        required: true
    },
    httpMethod: {
        type: String,
        required: true,
        uppercase: true,
        enum: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"]
    },
    statusCode: {
        type: Number,
        required: true
    },
    responseTime: {
        type: Number,
        required: true
    },
    requestTimestamp: {
        type: Date,
        default: Date.now
    },
    responseHeaders: {
        type: mongoose.Schema.Types.Mixed
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("API", apiSchema);