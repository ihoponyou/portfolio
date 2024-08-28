
interface Tag {
    description: string;
}

export interface ProjectData {
    description: string;
    tags: string[];
    url?: URL;
}

export const TAGS = new Map<string, Tag>([
    ["test", {
        description: "test"
    }]
])

export const PROJECTS = new Map<string, ProjectData>([
    ["Reaction Race", {
        description: "a small python project i made for my ap comp sci principles class. also titled using proper casing.",
        url: new URL("https://github.com/ihoponyou/reaction-race"),
        tags: ["Programming Fundamentals"]
    }],
    ["rogue lineage tycoon", {
        description: "one of my (currently) unfinished roblox games; a spinoff of the infamous [\"Rogue Lineage\"](https://www.roblox.com/games/3016661674/Rogue-Lineage) by Arch_Mage.",
        url: new URL("https://github.com/ihoponyou/rogue-lineage-tycoon"),
        tags: ["Multiplayer Networking", "Composition/Inheritance", "State Machines", "Single-store State Management", "TypeScript", "Luau"]
    }],
    ["Online Game Store", {
        description: "a crude recreation of Steam made with the .NET Framework, PostgreSQL, and Npgsql.",
        url: new URL("https://github.com/ihoponyou/DatabaseApp"),
        tags: ["Database Integration", ".NET Framework", "SQL", "C#"]
    }],
    ["tens of roblox", {
        description: `another one of my (currently) unfinished roblox games; an interpretation of this image: ![millions.png](${require("./assets/pictures/millions.png")}).`,
        url: new URL("https://github.com/ihoponyou/tens-of-roblox"),
        tags: ["Multiplayer Networking", "3D Modeling", "Animation", "Luau"]
    }],
    ["Dim Souls", {
        description: "a text-based game based off of Camel ([originally written in 1979 using BASIC](https://www.atariarchives.org/morebasicgames/showpage.php?page=24)).",
        url: new URL("https://github.com/ihoponyou/dim-souls"),
        tags: ["Object-Oriented Programming", "Programming Fundamentals", "Java"]
    }]
]);

export default PROJECTS;
