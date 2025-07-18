import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

export const pb = new PocketBase('https://farmware.schentrupsoftware.com');

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    console.log('auth changed', auth);
    currentUser.set(pb.authStore.model);
});