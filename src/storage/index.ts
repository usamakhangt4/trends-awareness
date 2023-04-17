import {Storage} from "@ionic/storage";

export const storage = new Storage({
  name: "my-twitter-storage",
  driverOrder: ["indexeddb", "sqlite", "websql", "localstorage"],
});

storage.create().then(() => {
  storage.set("isLoggedIn", false);
  storage.set("isAppLoading", false);
});

storage.get("isLoggedIn").then((value) => {
  console.log(value);
});
