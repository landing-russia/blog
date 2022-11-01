import { error } from "@sveltejs/kit"
export const prerender = true

export const load = async ({ url }) => {
  const currentRoute = url.pathname
  try {
    return {
      currentRoute,
    }
  } catch (err) {
    throw error(500, err)
  }
}
