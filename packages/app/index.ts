import { app, Notification } from "electron";

app.on("ready", () => {
    new Notification({
        title: "Hello from Electron!",
        body: "If you are reading this it means your app works!"
    }).show();
});

app.whenReady()