import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description }) => {
    return (
        <div>
            <div
                className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
                src={imgUrl}
                alt={title}
                width={300}
                height={200}
                style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}
            >
                <div className="overlay absolute top-0 left-0 w-full h-full bg--default bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
                    <Link
                        href="/"
                        className="h-14 w-14 border-2 relative rounded-full border--colors_default hover:border--colors_default mr-4 group/link"
                    >
                        <EyeIcon className="h-10 w-10 text--colors_default group-hover/link:text--colors_default absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                    <Link
                        href="/"
                        className="h-14 w-14 border-2 relative rounded-full border--colors_default hover:border--colors_default group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text--colors_default group-hover/link:text--colors_default absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                </div>
            </div>
            <div className="bg--default rounded-b-xl py-6 px-4 text--colors_default">
                <h5 className="font-lg font-semibold">{title}</h5>
                <p className="text--colors_default">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;