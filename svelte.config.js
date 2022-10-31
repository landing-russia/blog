import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: [".md"],
    }),
  ],
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: true,
    }),
  },
}

export default config
