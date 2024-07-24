"use client"
import React, { useState, FC, ChangeEvent } from "react";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaTwitch, FaDev, FaCodepen, FaGitlab, FaStackOverflow } from "react-icons/fa";
import { SiFrontendmentor, SiCodewars, SiFreecodecamp, SiHashnode } from "react-icons/si";
import linkIcon from "../../images/icons/link.svg";

interface Platform {
  name: string;
  icon: JSX.Element;
}

const platforms: Platform[] = [
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Frontend Mentor", icon: <SiFrontendmentor /> },
  { name: "Twitter", icon: <FaTwitter /> },
  { name: "LinkedIn", icon: <FaLinkedin /> },
  { name: "YouTube", icon: <FaYoutube /> },
  { name: "Facebook", icon: <FaFacebook /> },
  { name: "Twitch", icon: <FaTwitch /> },
  { name: "Dev.to", icon: <FaDev /> },
  { name: "Codewars", icon: <SiCodewars /> },
  { name: "Codepen", icon: <FaCodepen /> },
  { name: "freeCodeCamp", icon: <SiFreecodecamp /> },
  { name: "GitLab", icon: <FaGitlab /> },
  { name: "Hashnode", icon: <SiHashnode /> },
  { name: "Stack Overflow", icon: <FaStackOverflow /> },
];

const LinkItem: FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(platforms[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newLink, setNewLink] = useState("");

  const handleSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
    setDropdownOpen(false);
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLink(e.target.value);
  };

  return (
    <div className="bg-dev-very-light-gray rounded-xl p-5 w-full">
      <form action="">
        <div className="relative">
          <label htmlFor="platform">Platform</label>
          <div
            id="platform"
            className="w-full p-2 mt-2 mb-4 rounded-md border bg-white h-12 outline-none flex items-center justify-between cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex items-center gap-2">
              {selectedPlatform.icon}
              {selectedPlatform.name}
            </div>
            <span className="ml-2">▼</span>
          </div>
          {dropdownOpen && (
            <div className="absolute z-10 w-full bg-white border rounded-md mt-1 shadow-lg flex flex-col divide-y px-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="py-3 flex items-center gap-2 cursor-pointer"
                  onClick={() => handleSelectPlatform(platform)}
                >
                  {platform.icon}
                  {platform.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="link">Link</label>
          <div className="flex h-12 gap-3 items-center justify-between px-3 border rounded-md bg-white">
            <Image src={linkIcon} alt="Link Icon" width={16} height={16} />
            <input
              id="link"
              type="text"
              name="link"
              className="flex-1 outline-none bg-transparent"
              placeholder="e.g. https://www.github.com/johnappleseed"
              value={newLink}
              onChange={handleLinkChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LinkItem;
