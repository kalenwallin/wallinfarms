import ComingSoon from "../components/comingSoon";
import NavBar from "../components/navBar";

const IMAGE_PATH = "/amoled/ss-icon.svg";
const LINE_ONE = "SCALE";
const LINE_TWO = "SNAP";
const SLUG = "/scalesnap";

export default function Home() {
    return (
        <main className="relative h-screen">
            <NavBar
                image_path={IMAGE_PATH}
                line_one={LINE_ONE}
                line_two={LINE_TWO}
                slug={SLUG}
            />
            <ComingSoon
                image_path={IMAGE_PATH}
                line_one={LINE_ONE}
                line_two={LINE_TWO}
            />
        </main>
    );
}
