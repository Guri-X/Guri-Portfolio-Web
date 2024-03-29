import {
    RiFacebookFill,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiTwitterFill,
    RiDiscordFill,
    RiTelegramFill
} from "react-icons/ri";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";

const SocialIcons = ({ data, rounded }) => {
    if (!data) return null;

    return (
        <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
            {data.facebook && (
                <li className="inline-block align-middle">
                    <a
                        href={data.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiFacebookFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiFacebookFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data.twitter && (
                <li className="inline-block align-middle">
                    <a
                        href={data.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiTwitterFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiTwitterFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data.github && (
                <li className="inline-block align-middle">
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiGithubFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiGithubFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data.linkedin && (
                <li className="inline-block align-middle">
                    <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiLinkedinBoxFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiLinkedinBoxFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data.discord && (
                <li className="inline-block align-middle">
                    <a
                        href={data.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiDiscordFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiDiscordFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data.telegram && (
                <li className="inline-block align-middle">
                    <a
                        href={data.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiTelegramFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiTelegramFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data.infosec_blog && (
                <li className="inline-block align-middle">
                    <a
                        href={data.infosec_blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <BsFillShieldLockFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <BsFillShieldLockFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data.osint_blog && (
                <li className="inline-block align-middle">
                    <a
                        href={data.osint_blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <FaSearchLocation className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <FaSearchLocation className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
        </ul>
    );
};

export default SocialIcons;
