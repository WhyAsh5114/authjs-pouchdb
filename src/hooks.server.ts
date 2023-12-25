import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { GOOGLE_ID, GOOGLE_SECRET, AUTH_SECRET } from '$env/static/private';
import { PouchDBAdapter } from "@auth/pouchdb-adapter"
import PouchDB from "pouchdb"
import leveldbAdapter from "pouchdb-adapter-leveldb"
import findPlugin from "pouchdb-find"

PouchDB
  .plugin(leveldbAdapter) // Or any other adapter
  .plugin(findPlugin) // Don't forget the `pouchdb-find` plugin

const pouchdb = new PouchDB("auth_db", { adapter: "leveldb" })

export const handle = SvelteKitAuth({
  providers: [
    Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
  adapter: PouchDBAdapter({pouchdb})
})