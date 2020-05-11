const { model, Schema } = require("mongoose");

const ProjectSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Project", ProjectSchema);
