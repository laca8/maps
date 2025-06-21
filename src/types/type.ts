export type Location = {
    id: string;
    name: string;
    type: 'continent' | 'country' | 'city';
    coordinates: [number, number]; // [latitude, longitude] for real map positioning
    description: string;
    population?: string;
    area?: string;
    currency?: string;
    language?: string;
    timeZone?: string;
    climate?: string;
    attractions?: string[];
    flag?: string; // URL to the flag image
    emoji?: string; // Emoji representation of the location
    parentId?: string; // Reference to parent continent/country
}