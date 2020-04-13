export const sortAtoZ = (arr) => {
    return arr.sort((a, b) => a.displayName.localeCompare(b.displayName));
};

export const sortZtoA = (arr) => {
    return arr.sort((a, b) => b.displayName.localeCompare(a.displayName));
};
