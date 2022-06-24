# vue3movie
This is a demo project about Vue3, Composition API , TS, Jest, @testing-library/vue, ESlint

It's developed on Node $14.18.1. An environment with Node version that is higher than 12.2.0 should work.

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
The payload is a JSON object.

```
{
  "title": "",
  "actor": "Mark Hamill",
  "year": "",
  "genre": []
}
```
We could send these parameters to the "server" to get the result. We may send a GET request to the back-end if we have a real endpoint.
For example, if we send the actor's name `Mark Hamill`, the "server" will return the movie list that contains `Mark Hamill` in the actor.

## Gif demo
![Alt Text](https://raw.githubusercontent.com/Killea/vue3movie/main/GIF_2022-6-23%2021-48-38.gif)