import ComingSoon from "../components/comingSoon";
import NavBar from "../components/navBar";
import { CROP_CACHE_PROPS } from "./props";

export default function CropCache() {
    return (
        <main className="relative h-screen" style={{ height: "90vh" }}>
            <NavBar
                image_path={CROP_CACHE_PROPS.IMAGE_PATH}
                line_one={CROP_CACHE_PROPS.LINE_ONE}
                line_two={CROP_CACHE_PROPS.LINE_TWO}
                slug={CROP_CACHE_PROPS.SLUG}
            />
            <ComingSoon
                image_path={CROP_CACHE_PROPS.IMAGE_PATH}
                line_one={CROP_CACHE_PROPS.LINE_ONE}
                line_two={CROP_CACHE_PROPS.LINE_TWO}
            />
        </main>
    );
}
