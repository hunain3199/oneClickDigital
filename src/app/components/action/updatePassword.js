"use server";
import bcrypt from "bcrypt";
import { connectMongo } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
// import { useRouter } from "next/navigation";

const saltRounds = 10;
export async function updatePassword({ newPassword, token }) {
  // const router = useRouter();
  try {
    console.log("Hello jee");
    await connectMongo();

    // const salt = await bcrypt.genSalt(20);
    // const passwordHashed = await bcrypt.hash(newPassword, salt);

    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHashed = bcrypt.hashSync(newPassword, salt);

    await User.findOneAndUpdate(
      { verifyToken: token },
      { password: passwordHashed }
    );
    // router.replace("/login");
    console.log("ocay");
  } catch (error) {
    console.log("updatePasswordError:", error);
  }
}
