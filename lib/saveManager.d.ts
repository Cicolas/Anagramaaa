import { dayData } from ".";
export interface saveInterface {
    games: number;
    wordsTyped: number;
    allGuesses: number;
    percent: number;
}
export declare function finish(data: dayData): void;
