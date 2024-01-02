import ComingSoon from "../components/comingSoon";
import { SNAP_SCALE_PROPS } from "./props";
import NavBar from "../components/navBar";
import ExcelExportPreview from "@/components/excel_export_preview";

export default function Home() {
    return (
        <main className="relative h-screen" style={{ height: "90vh" }}>
            <NavBar
                image_path={SNAP_SCALE_PROPS.IMAGE_PATH}
                line_one={SNAP_SCALE_PROPS.LINE_ONE}
                line_two={SNAP_SCALE_PROPS.LINE_TWO}
                slug={SNAP_SCALE_PROPS.SLUG}
            />
            <ComingSoon
                image_path={SNAP_SCALE_PROPS.IMAGE_PATH}
                line_one={SNAP_SCALE_PROPS.LINE_ONE}
                line_two={SNAP_SCALE_PROPS.LINE_TWO}
            />
            <div style={{ height: "10vh" }}></div>
            <ExcelExportPreview />
        </main>
    );
}
