export const getEntriesFromModules = (modules: Record<string, unknown>) => {
  return Object.fromEntries(
    Object.entries(modules).map(([path, url]) => {
      const name = path.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '');
      return [name, url as string];
    })
  );
};