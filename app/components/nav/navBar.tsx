'use client';
import LargeNavBar from "@/app/components/nav/largeNavBar";
import SmallNavBar from "@/app/components/nav/smallNavBar";
import useMedia from 'use-media';

export default function NavBar(props?: {
    current_page?: string;
    image_path?: string;
    slug?: string;
}) {
    const isSmall = useMedia({ maxWidth: '500px' });
    return (
        isSmall ? <SmallNavBar current_page={props?.current_page} />
            : <LargeNavBar image_path={props?.image_path} slug={props?.slug} />
    )
}