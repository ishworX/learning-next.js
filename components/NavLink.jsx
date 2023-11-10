import Link from "next/link";
const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            class="block py-2 pl-3 pr-4 text--colors_default sm:text-xl rounded md:bg-transparent  md:p-0 hover:text--colors_default "
            aria-current="page"
        >
            {title}
        </Link>
    );
};

export default NavLink;