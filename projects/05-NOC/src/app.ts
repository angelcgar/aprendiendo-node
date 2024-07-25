import { envs } from "./config/plugins/envs.plugin";
import { ServerApp } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {
  ServerApp.start();
}
