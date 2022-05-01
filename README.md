# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

This project was generated using `npx create-remix`, and then the following modifications have been made.

1. Introduced a functions directory which will be used firebase functions (Google Cloud Functions)[https://firebase.google.com/docs/functions]
2. Updated remix.config.js to output server bundle into functions/build

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

Alternatively to run the app in production mode:

```sh
npm start
```


## Deployment

To deploy you will need to be logged into a Firebase project via the CLI.

Once logged in you can run the following command:

```sh
firebase deploy
```

**Note:** You will need to manually update the Firebase function to be [publicly available using the Google console](https://cloud.google.com/functions/docs/writing/http)
