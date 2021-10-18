// Handle first middle and last names with appropriate spacing for artists
export const composeArtistName = ({
    first,
    middle,
    last,
}: {
    first: string;
    middle?: string;
    last: string;
}) => {
    const nameArray = [first, middle, last];
    // Drop all empty values
    const cleanedArray = nameArray.filter(Boolean);

    return cleanedArray.join(' ');
};
