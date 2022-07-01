import http from "superagent";
import { store } from './store'

export function fetchIndicators(access_token: string) {
  if (access_token) {
    const url = "https://supervisor.theeye.io/indicator";
    http.get(url)
      .set("accept", "application/json")
      .set("content-type", "application/json")
      .query({ access_token }) // query string
      .end((err: any, response: any) => {
        if (err) {
          store.set({
            valid: false,
            graphs:[]
          })
        }
        store.set({
          valid: true,
          graphs:response.body.sort(i => i.order)
        })
      });
  }
}

