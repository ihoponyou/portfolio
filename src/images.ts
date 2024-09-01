export const IMAGES = require.context("./assets/images", true);

export function getImagePathsThatInclude(str: string): string[] {
    return IMAGES.keys()
        .filter((path) => path.includes(str))
        .map((value) => IMAGES(value) as string);
}

export default IMAGES;