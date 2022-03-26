import { readable, writable, type Readable, type Writable } from 'svelte/store';

export const pageName: Writable<string> = writable('');
export const componentsVersion: Readable<string> = readable('0.8.26');
export const homePage: Readable<string> = readable('/components/comparison');

export const lang: Writable<string> = writable('');
