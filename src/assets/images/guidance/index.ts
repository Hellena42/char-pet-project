import { getEntriesFromModules } from "@/shared/lib/file-utils/get-entries-from-modules";

const modules = import.meta.glob('./*.{png,svg,jpg,webp}', {
  eager: true,
  import: 'default',
});

export const GuidanceIcons = getEntriesFromModules(modules);