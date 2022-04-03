export interface dayData {
    day: string;
    word: string;
    found: string[];
    correct: number;
    all: number;
}
export declare function complete(correct: dayData): void;
export declare function showMessageBox(msg: string, time: number, type: string, callback?: () => void): void;
