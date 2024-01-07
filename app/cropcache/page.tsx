import { redirect } from "next/navigation";
import ComingSoon from "../components/comingSoon";
import LargeNavBar from "../components/nav/largeNavBar";
import readUserSession from "../lib/actions";
import { CROP_CACHE_PROPS } from "./props";
import NavBar from "../components/nav/navBar";

export default async function CropCache() {
    const { data } = await readUserSession();
    if (!data.session) {
        return redirect('/signin');
    }
    return (
        <main className="relative h-screen" style={{ height: "90vh" }}>
            <NavBar current_page="cropcache" image_path={CROP_CACHE_PROPS.IMAGE_PATH} slug={CROP_CACHE_PROPS.SLUG} />
            <ComingSoon
                image_path={CROP_CACHE_PROPS.IMAGE_PATH}
                line_one={CROP_CACHE_PROPS.LINE_ONE}
                line_two={CROP_CACHE_PROPS.LINE_TWO}
            />
            <div className="h-16"></div>
        </main>
    );
}
