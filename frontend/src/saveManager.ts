import { dayData } from ".";

export function finish(data: dayData) {
    localStorage.setItem("data", JSON.stringify(data));
}