export const compareEqual = <T extends unknown>(a: T, b: T): boolean => {
    return JSON.stringify(a) === JSON.stringify(b);
}