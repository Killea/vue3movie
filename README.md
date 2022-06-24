# vue3movie
This is a demo project about Vue3, Composition API , TS, Jest, @testing-library/vue, ESlint

Demo on codesandbox(run in dev mode!):
https://v1lm3i.sse.codesandbox.io/

If you want to test it on your local, you may need to run `npm install` after cloning the project.

Development mode:
`npm run dev`

Build mode:
`npm run build`

Run tests:
`npm run test`

Run Eslint:
`npm run lint`

## Payload

```
payload: {
  "title": "",
  "actor": "Mark Hamill",
  "year": "",
  "genre": []
}
```
The payload is a JSON object. We could send these parameters to the "server" to get the result.
For example, if we send the name `Mark Hamill`, the server will return the movie list that contains `Mark Hamill` in the actor.

## Gif demo
![Alt Text](GIF_2022-6-23 21-48-38.gif.gif)