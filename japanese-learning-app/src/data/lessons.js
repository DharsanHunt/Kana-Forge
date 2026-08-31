import { n5Lessons } from './curriculum/n5Lessons.js';
import { n4Lessons } from './curriculum/n4Lessons.js';

/**
 * Kana-Forge Complete Curated Curriculum (N5 & N4)
 * Combines all modular curriculum units across N5 and N4.
 */
export const lessons = [...n5Lessons, ...n4Lessons];

export default lessons;
