import { writable } from 'svelte/store';

export const store = writable({
  valid: undefined,
  graphs: []
});