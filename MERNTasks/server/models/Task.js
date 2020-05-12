const { model, Schema } = require("mongoose");

const TaskSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
});

module.exports = model("Task", TaskSchema);
