// Import h3 as npm dependency
import { createApp, createRouter, eventHandler, readBody, readFormData } from "h3";

// Create an app instance
export const app = createApp();

// Create a new router and register it in app
const router = createRouter();
app.use(router);

// Add a new route that matches GET requests to / path
router.get(
  "/",
  eventHandler((event) => {
    return { message: "⚡️ Tadaa!" };
  }),
);


router.get(
  "/sergio",
  eventHandler((event) => {
    return "⚡️ Tadaa <h5>sergio!</h5>";
  }),
);

router.post(
  "/multiply",
  eventHandler(async (event) => {
    const body = (await readBody(event));
    return body.number * body.number;
  }),
);
