import { getImagePathsThatInclude } from "./images";

export interface ProjectData {
    projectId: string;
    description: string;
    tags: string[];
    imagePaths: string[];
    url?: URL;
}

export const PROJECTS: { [title: string]: ProjectData } = {
    "Reaction Race": {
        projectId: "reaction-race",
        description: "a small python project i made for my ap comp sci principles class. also titled using proper casing.",
        tags: ["Programming Fundamentals"],
        imagePaths: getImagePathsThatInclude("reaction-race"),
        url: new URL("https://github.com/ihoponyou/reaction-race"),
    },
    "rogue lineage tycoon": {
        projectId: "rogue-lineage-tycoon",
        description: "one of my (currently) unfinished roblox games; a spinoff of the infamous [\"Rogue Lineage\"](https://www.roblox.com/games/3016661674/Rogue-Lineage) by Arch_Mage. ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)",
        imagePaths: getImagePathsThatInclude("rogue-lineage-tycoon"),
        tags: ["Multiplayer Networking", "Finite State Machines", "Single-store State Management", "TypeScript", "Luau"],
        url: new URL("https://github.com/ihoponyou/rogue-lineage-tycoon"),
    },
    "Online Game Store": {
        projectId: "online-game-store",
        description: "a crude recreation of Steam made with the .NET Framework, PostgreSQL, and Npgsql.",
        tags: ["Database Integration", ".NET Framework", "SQL", "C#"],
        imagePaths: getImagePathsThatInclude("online-game-store"),
        url: new URL("https://github.com/ihoponyou/DatabaseApp"),
    },
    "tens of roblox": {
        projectId: "tens-of-roblox",
        description: `another one of my (currently) unfinished roblox games; an interpretation of this image: ![millions.png](${require("./assets/images/millions.png")}).`,
        tags: ["Multiplayer Networking", "3D Modeling", "Animation", "Luau"],
        imagePaths: getImagePathsThatInclude("tens-of-roblox"),
        url: new URL("https://github.com/ihoponyou/tens-of-roblox"),
    },
    "Dim Souls": {
        projectId: "dim-souls",
        description: "a text-based game based off of Camel ([originally written in 1979 using BASIC](https://www.atariarchives.org/morebasicgames/showpage.php?page=24)).",
        tags: ["Object-Oriented Programming", "Programming Fundamentals", "Java"],
        imagePaths: getImagePathsThatInclude("dim-souls"),
        url: new URL("https://github.com/ihoponyou/dim-souls"),
    },
};

export default PROJECTS;
