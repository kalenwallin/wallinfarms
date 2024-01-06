import { redirect } from "next/navigation";
import ComingSoon from "../components/comingSoon";
import NavBar from "../components/navBar";
import readUserSession from "../lib/actions";
import { HOME_PROPS } from "./props";


export default async function Page() {
    const { data } = await readUserSession()
    if (!data.session) {
        return redirect('/signin')
    }
    return (
        <main className="relative h-screen" style={{ height: "90vh" }}>
            <NavBar />
            <ComingSoon
                image_path={HOME_PROPS.IMAGE_PATH}
                line_one={HOME_PROPS.LINE_ONE}
                line_two={HOME_PROPS.LINE_TWO}
            />
        </main>
    );
}
