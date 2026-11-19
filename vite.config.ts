import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { careerDescription, careerTitle } from "./src/data/career-meta";

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

      for (const route of ["about-us", "services", "regulatory-compliance", "news", "contact-us", "career", "get-a-quote"]) {
        const source = route === "career"
          ? index.source
              .replace(/<title>[^<]*<\/title>/, `<title>${careerTitle}</title>`)
              .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${careerDescription}" />`)
          : index.source;
        this.emitFile({ type: "asset", fileName: `${route}/index.html`, source });
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
