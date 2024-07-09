import { Plugin } from "vite";
export default function vitePluginRequire(opts?: {
    fileRegex?: RegExp;
    log?: (...arg: any[]) => void;
    translateType?: "importMetaUrl" | "import";
}): Plugin;
