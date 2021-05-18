/**
 * This file is intented to store functions that can be accessed across the application, instead of repeating or
 * copy-pasting those methods in several components.
 * 
 * Example below
 */


export function getToday() {
    const date = new Date();
    return date.getDay();
}