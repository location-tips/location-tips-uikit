export const nameToVar = (name: string) => {
    const splitted = name.split('/');

    return "--" + (splitted.map((part) => {
        return part;
    })).join('-');
}