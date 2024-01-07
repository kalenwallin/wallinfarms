import { redirect } from "next/navigation";
import ComingSoon from "../components/comingSoon";
import readUserSession from "../lib/actions";
import { HOME_PROPS } from "./props";
import NavBar from "../components/nav/navBar";


export default async function Home() {
    const { data } = await readUserSession()
    if (!data.session) {
        return redirect('/signin')
    }
    return (
        <main className="relative h-screen" style={{ height: "85vh" }}>
            <NavBar current_page="home" />
            <ComingSoon
                image_path={HOME_PROPS.IMAGE_PATH}
                line_one={HOME_PROPS.LINE_ONE}
                line_two={HOME_PROPS.LINE_TWO}
            />
            <div className="h-16"></div>
        </main>
    );
}
