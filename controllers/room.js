const Room = require("../models/room");

exports.listAll = async (req, res) => {
	try {
		const rooms = await Room.find({});
		res.json({ rooms });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
