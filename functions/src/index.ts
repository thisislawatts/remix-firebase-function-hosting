import * as functions from "firebase-functions";
import * as express from "express";
import * as path from "path";
import { createRequestHandler } from "@remix-run/express";

const createApplication = () => {
    const app = express();
    app.all("*", createRequestHandler({
        build: require(path.resolve(
            __dirname,
            "../build"
        ))
    }));
    return app;
}

exports.appRender = functions.runWith(
    {
        memory: "1GB",
    }
).https.onRequest(createApplication())