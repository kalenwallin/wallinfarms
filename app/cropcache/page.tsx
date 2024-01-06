import { redirect } from "next/navigation";
import ComingSoon from "../components/comingSoon";
import NavBar from "../components/navBar";
import readUserSession from "../lib/actions";
import { CROP_CACHE_PROPS } from "./props";

export default async function CropCache() {
    const { data } = await readUserSession();
    if (!data.session) {
        return redirect('/signin');
    }
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
