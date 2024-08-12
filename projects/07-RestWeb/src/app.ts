import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    router: AppRoutes.routes,
  });

  // ? si fuera static start como se pasariamos las options
  server.start();
}
