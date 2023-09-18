import ComingSoon from "../components/comingSoon";
import NavBar from "../components/navBar";
import { theme } from "../config";

export const SCALE_SNAP_PROPS: {
    IMAGE_PATH: string;
    LINE_ONE: string;
    LINE_TWO: string;
    SLUG: string;
} = {
    IMAGE_PATH: `${theme}/ss-icon.svg`,
    LINE_ONE: "SCALE",
    LINE_TWO: "SNAP",
    SLUG: "/scalesnap",
};

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
