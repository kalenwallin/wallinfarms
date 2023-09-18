import ComingSoon from "../components/comingSoon";
import { SCALE_SNAP_PROPS } from "./props";
import NavBar from "../components/navBar";

export default function Home() {
    return (
        <main className="relative h-screen">
            <NavBar
                image_path={SCALE_SNAP_PROPS.IMAGE_PATH}
                line_one={SCALE_SNAP_PROPS.LINE_ONE}
                line_two={SCALE_SNAP_PROPS.LINE_TWO}
                slug={SCALE_SNAP_PROPS.SLUG}
            />
            <ComingSoon
                image_path={SCALE_SNAP_PROPS.IMAGE_PATH}
                line_one={SCALE_SNAP_PROPS.LINE_ONE}
                line_two={SCALE_SNAP_PROPS.LINE_TWO}
            />
        </main>
    );
}
