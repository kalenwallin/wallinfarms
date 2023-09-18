import ComingSoon from "../components/comingSoon";
import { CROP_CACHE_PROPS } from "./props";

export default function CropCache() {
    return (
        <main className="relative h-screen">
            <ComingSoon
                image_path={CROP_CACHE_PROPS.IMAGE_PATH}
                line_one={CROP_CACHE_PROPS.LINE_ONE}
                line_two={CROP_CACHE_PROPS.LINE_TWO}
            />
        </main>
    );
}
