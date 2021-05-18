/**
 * This file is intented to store values that will be read across the app as variables or constants,
 * but that could lead to problems with typography errors or "magical floating values" during development or runtime.
 * Ideally these values should not be overwritten or modified across files, but from one source.
 * 
 * Example below.
 */

export const USERTYPES = {
    ADMIN: 'admin',
    SELLER: 'seller',
    CUSTOMER: 'customer'
}