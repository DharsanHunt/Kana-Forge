/**
 * Kana-Forge Master Vocabulary Repository
 * Aggregates the full 800 Curated N5 Vocabulary dataset across 48 thematic categories
 * plus supplementary N4 vocabulary.
 */

import { n5VocabCore } from './vocabulary/n5VocabCore.js';
import { n5VocabDaily } from './vocabulary/n5VocabDaily.js';
import { n5VocabActions } from './vocabulary/n5VocabActions.js';
import { n5VocabConcepts } from './vocabulary/n5VocabConcepts.js';
import { n4Vocab } from './vocabulary/n4Vocab.js';

export const vocabulary = [
    ...n5VocabCore,
    ...n5VocabDaily,
    ...n5VocabActions,
    ...n5VocabConcepts,
    ...n4Vocab
];

export default vocabulary;
