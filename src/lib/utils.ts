import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const toSentenceCase = (str: string) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}
