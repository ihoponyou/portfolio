
export interface ProjectData {
    description: string;
    tags: string[];
    url?: URL;
}

const TYPESCRIPT_BADGE = "![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)";
const LUA_BADGE = "![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)";

export const PROJECTS: { [title: string]: ProjectData } = {
    "Reaction Race": {
        description: "a small python project i made for my ap comp sci principles class. also titled using proper casing.",
        tags: ["Programming Fundamentals"],
        url: new URL("https://github.com/ihoponyou/reaction-race"),
    },
    "rogue lineage tycoon": {
        description: "one of my (currently) unfinished roblox games; a spinoff of the infamous [\"Rogue Lineage\"](https://www.roblox.com/games/3016661674/Rogue-Lineage) by Arch_Mage.\n\n" + 
        `${TYPESCRIPT_BADGE} ${LUA_BADGE}`,
        url: new URL("https://github.com/ihoponyou/rogue-lineage-tycoon"),
        tags: ["Multiplayer Networking", "Finite State Machines", "Single-store State Management", "TypeScript", "Luau"]
    },
    "Online Game Store": {
        description: "a crude recreation of Steam made with the .NET Framework, PostgreSQL, and Npgsql.",
        url: new URL("https://github.com/ihoponyou/DatabaseApp"),
        tags: ["Database Integration", ".NET Framework", "SQL", "C#"]
    },
    "tens of roblox": {
        description: `another one of my (currently) unfinished roblox games; an interpretation of [this image](${require("./assets/pictures/millions.png")}).`,
        url: new URL("https://github.com/ihoponyou/tens-of-roblox"),
        tags: ["Multiplayer Networking", "3D Modeling", "Animation", "Luau"]
    },
    "Dim Souls": {
        description: "a text-based game based off of Camel ([originally written in 1979 using BASIC](https://www.atariarchives.org/morebasicgames/showpage.php?page=24)).",
        url: new URL("https://github.com/ihoponyou/dim-souls"),
        tags: ["Object-Oriented Programming", "Programming Fundamentals", "Java"]
    },
};

export default PROJECTS;
