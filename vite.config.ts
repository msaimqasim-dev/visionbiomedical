import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { careerJobs, careerMetadata } from "./src/data/career-meta";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function staticPageEntries(): Plugin {
  return {
    name: "static-page-entries",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const index = bundle["index.html"];
      if (index?.type !== "asset" || typeof index.source !== "string") return;

      const routes = ["/about-us", "/services", "/regulatory-compliance", "/news", "/contact-us", "/career", "/get-a-quote"];
      routes.push(...Object.values(careerJobs).map((job) => job.path));
      for (const route of routes) {
        const metadata = careerMetadata(route);
        const source = metadata
          ? index.source
              .replace(/<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`)
              .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${metadata.description}" />`)
          : index.source;
        this.emitFile({ type: "asset", fileName: `${route.slice(1).replace(/\/$/, "")}/index.html`, source });
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticPageEntries()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
