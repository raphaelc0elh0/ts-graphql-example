import { expressApp } from "./app";

expressApp().then((app) => {
  app.listen(4000, () => console.log("🚀 Server running"));
});
