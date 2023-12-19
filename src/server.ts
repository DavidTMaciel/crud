// server.ts
import { Cmd } from './app';

const port = 3030;

async function startServer() {
  try {
    const cmd = new Cmd();
    await cmd.initialize();
    cmd.getApp().listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log("Failed to initialize the database:", error);
  }
}

startServer();
