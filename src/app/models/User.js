import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

const UserSchema = new Schema(
  {
    name: { type: String, require:false },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    // tel: { type: String, require:false},
    // address: { type: String, require:false },
    // postal: { type: String, require:false },
    // city: { type: String, require:false},
    // country: { type: String, require:false },
    // verifyToken: { type: String, require: false },
    admin:{ type:Boolean, require:false, default:false}
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = bcrypt.genSaltSync(saltRounds);
  user.password = bcrypt.hashSync(user.password, salt);

  next();
});

export const User = models?.User || model("User", UserSchema);
