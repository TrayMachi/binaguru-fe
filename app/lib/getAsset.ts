export const getAsset = (key: string): string => {
  const cleanedKey = key.replace(/^\/|\/$/g, '');
  const url = `https://firebasestorage.googleapis.com/v0/b/binaguru-34113.firebasestorage.app/o/assets%2F${cleanedKey}?alt=media`;

  return url;
};