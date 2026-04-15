import { getEntriesFromModules } from "@/shared/lib/file-utils/get-entries-from-modules";

const modules = import.meta.glob('./*.{png,svg,jpg,webp}', {
  eager: true,
  import: 'default',
});

// export const CharacterIcons = Object.fromEntries(
//   Object.entries(modules).map(([path, url]) => {
//     const name = path.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '');
//     return [name, url as string];
//   })
// );
export const CharacterIcons = getEntriesFromModules(modules);