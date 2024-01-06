import { HOME_PROPS } from "../home/props";
import { CROP_CACHE_PROPS } from "../cropcache/props";
import { SNAP_SCALE_PROPS } from "../snapscale/props";
import LogoShort from "./logoShort";
import Link from "next/link";
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from "next/headers";

const navBar = {
    CROP_CACHE_PROPS: CROP_CACHE_PROPS,
    SNAP_SCALE_PROPS: SNAP_SCALE_PROPS,
};

export default function NavBar(props?: {
    image_path?: string;
    line_one?: string;
    line_two?: string;
    slug?: string;
}) {
    const cookieStore = cookies()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
            },
        }
    )
    return (
        <div className="absolute z-10 top-0 flex flex-row border-b border-neutral-800 w-full h-16 items-center justify-between">
            <div className="flex" id="nav-breadcrumbs">
                <Link href={HOME_PROPS.SLUG} className="flex items-center">
                    <LogoShort image_path={HOME_PROPS.IMAGE_PATH} image_width="2rem" className="ml-4" />
                </Link>
                {props?.slug ? (
                    <div className="relative flex flex-row items-center stroke-primary">
                        <svg height="48" role="separator" viewBox="0 0 32 32" width="48">
                            <path d="M22 5L9 28" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <a href={props.slug ? props.slug : "#"} className="flex items-center">
                            <LogoShort image_path={props.image_path} className="mr-4" />
                        </a>
                    </div>
                ) : null}
            </div>
            <div className="flex m-4 hover:cursor-pointer text-primary">
                <div className="m-4">
                    <Link href={navBar.SNAP_SCALE_PROPS.SLUG}>
                        <span>{navBar.SNAP_SCALE_PROPS.LINE_ONE}</span>
                        <span>{navBar.SNAP_SCALE_PROPS.LINE_TWO}</span>
                    </Link>
                </div>
                <div className="m-4">
                    <Link href={navBar.CROP_CACHE_PROPS.SLUG}>
                        {navBar.CROP_CACHE_PROPS.LINE_ONE}
                        {navBar.CROP_CACHE_PROPS.LINE_TWO}
                    </Link>
                </div>
                {supabase.auth.getSession() ?
                    <div className="m-4">
                        <Link href="/auth/signout">
                            SIGNOUT
                        </Link>
                    </div> : null
                }
            </div>
        </div>
    );
}
