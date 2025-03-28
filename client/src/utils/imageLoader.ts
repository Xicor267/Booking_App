// src/utils/imageLoader.ts
function importAll(paths: Record<string, { default: string }>) {
  const images: { [key: string]: string } = {};
  Object.entries(paths).forEach(([path, module]) => {
    const fileName = path.replace(/^.*[\\/]/, '').replace(/\.[^.]+$/, '');
    images[fileName] = module.default;
  });
  return images;
}

export const Images = importAll(
  import.meta.glob('../assets/images/*', { eager: true })
);

// Use:
// <img src={Images['avatar1']} alt="Avatar 1" />
// <img src={Images['logo']} alt="Logo" />