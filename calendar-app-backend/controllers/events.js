const Event = require("../models/Event");

const getEvents = async (req, res) => {
  const events = await Event.find().populate("user", "name");

  res.json({ ok: true, events });
};

const createEvent = async (req, res) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const eventSaved = await event.save();

    return res.json({ ok: true, event: eventSaved });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ ok: false, msg: "Somthing went wrong" });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ ok: false, msg: "Event not found" });
    }

    if (event.user.toString() !== uid) {
      return res
        .status(401)
        .json({ ok: false, msg: "You are not allowed to edit event" });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    res.json({ ok: true, event: eventUpdated });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "Something went wrong" });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ ok: false, msg: "Event not found" });
    }

    if (event.user.toString() !== uid) {
      return res
        .status(401)
        .json({ ok: false, msg: "You are not allowed to delete event" });
    }

    await Event.findByIdAndDelete(eventId);

    return res.json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "Something went wrong" });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
