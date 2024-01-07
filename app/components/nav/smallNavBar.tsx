import { HOME_PROPS } from "../../home/props";
import { CROP_CACHE_PROPS } from "../../cropcache/props";
import { SNAP_SCALE_PROPS } from "../../snapscale/props";
import LogoShort from "../logoShort";
import Link from "next/link";
import Image from "next/image";

export default function SmallNavBar(props?: {
    current_page: string;
}) {
    const navBar = {
        CROP_CACHE_PROPS: CROP_CACHE_PROPS,
        SNAP_SCALE_PROPS: SNAP_SCALE_PROPS,
        HOME_PROPS: HOME_PROPS,
    };

    const divStyle = {
        opacity: '0.5',
        backgroundColor: 'gray',
    };
    return (
        <div className="fixed z-10 bg-black bottom-0 flex flex-row border-t border-neutral-800 w-full h-16 items-center justify-around">
            <div className="p-4 h-full w-full flex justify-center" style={props?.current_page === "cropcache" ? divStyle : null}>
                <Link href={navBar.CROP_CACHE_PROPS.SLUG}>
                    <Image alt="" src={CROP_CACHE_PROPS.IMAGE_PATH} width={35} height={35} className={"m-0"} />
                </Link>
            </div>
            <div className="p-4 h-full w-full flex justify-center" style={props?.current_page === "home" ? divStyle : null}>
                <Link href={HOME_PROPS.SLUG} className="flex items-center">
                    <Image alt="" src={HOME_PROPS.IMAGE_PATH} width={35} height={35} className={"m-0"} />
                </Link>
            </div>
            <div className="p-4 h-full w-full flex justify-center" style={props?.current_page === "snapscale" ? divStyle : null}>
                <Link href={navBar.SNAP_SCALE_PROPS.SLUG}>
                    <Image alt="" src={SNAP_SCALE_PROPS.IMAGE_PATH} width={35} height={35} className={"m-0"} />
                </Link>
            </div>
        </div>
    );
}
