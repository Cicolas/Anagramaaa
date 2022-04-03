import { dayData } from ".";

export interface saveInterface {
    games: number,
    wordsTyped: number,
    allGuesses: number,
    percent: number
}

const stats: saveInterface = {
    games: 0,
    wordsTyped: 0,
    allGuesses: 0,
    percent: 0,
}

export function finish(data: dayData) {
    let s: saveInterface;

    if (localStorage.getItem("stats")) {
        s = JSON.parse(localStorage.getItem("stats"));

        stats.games = s.games;
        stats.wordsTyped = s.wordsTyped;
        stats.percent = s.percent;
        stats.allGuesses = s.allGuesses;
    }

    stats.games++;
    stats.wordsTyped += data.correct;
    stats.allGuesses += data.all;
    stats.percent = average(stats.games, stats.percent, data.correct/data.all);

    localStorage.setItem("stats", JSON.stringify(stats));
    localStorage.setItem("data", JSON.stringify(data));
}

function average(gameNum: number, oldPercent: number, percent: number) {
    console.log(gameNum, oldPercent, percent);

    return ((oldPercent*(gameNum-1))+(percent))/gameNum;
}