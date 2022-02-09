const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		rentperday: {
			type: Number,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		maxcount: {
			type: Number,
			required: true
		},
		phonenumber: {
			type: Number,
			required: true
		},
		imageurls: [],
		description: {
			type: String,
			required: true
		},
		currentBookings: []
	},
	{
		timestamps: true
	}
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
