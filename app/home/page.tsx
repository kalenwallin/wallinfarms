import ComingSoon from "../components/comingSoon";
import NavBar from "../components/navBar";
import { HOME_PROPS } from "./props";

export default function Home() {
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
