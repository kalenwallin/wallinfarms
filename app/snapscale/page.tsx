import ComingSoon from "../components/comingSoon";
import { SNAP_SCALE_PROPS } from "./props";
import ExcelExportPreview from "@/components/excel_export_preview";
import readUserSession from "../lib/actions";
import { redirect } from "next/navigation";
import NavBar from "../components/nav/navBar";
import Cloudinary from "../lib/cloudinary";
import Image from "next/image";
import React from "react";

export default async function SnapScale() {
    const { data } = await readUserSession();
    if (!data.session) {
        return redirect('/signin');
    }
    return (
        <>
            <NavBar current_page="snapscale" image_path={SNAP_SCALE_PROPS.IMAGE_PATH} slug={SNAP_SCALE_PROPS.SLUG} />
            <main className="relative h-screen" style={{ height: "85vh" }}>
                <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="relative flex flex-col items-center justify-center h-full space-y-8 pb-20 text-center">
                        <div>
                            <div className="flex justify-center m-4">
                                <Image
                                    alt=""
                                    src={SNAP_SCALE_PROPS.IMAGE_PATH}
                                    width={70}
                                    height={70}
                                    style={{
                                        width: "30%",
                                        height: "auto",
                                    }}
                                />
                            </div>
                            <h1 className="text-5xl text-clampH1 font-black text-primary">
                                {SNAP_SCALE_PROPS.LINE_ONE}
                            </h1>
                            <h1 className="text-5xl text-clampH1 font-black text-secondary">
                                {SNAP_SCALE_PROPS.LINE_TWO}
                            </h1>
                            <div className="flex justify-center">
                                <Cloudinary />
                                <button
                                    id="doneButton"
                                    className="hidden px-6 py-2 m-4 text-white bg-black border-2 rounded hover:shadow-xl hover:bg-white hover:text-black hover:border-black focus:shadow-400 focus:outline-none"
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "10vh" }}></div>
                <ExcelExportPreview />
                <div className="h-16"></div>
            </main>
        </>
    );
}
