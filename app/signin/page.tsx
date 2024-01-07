import { redirect } from "next/navigation"
import readUserSession from "../lib/actions"
import LoginForm from "./login_form";

export default async function SignIn() {
    const { data } = await readUserSession()
    if (data.session) {
        return redirect('/snapscale')
    }
    return <LoginForm />
}