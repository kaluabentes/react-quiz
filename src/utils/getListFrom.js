export default function getListFrom(map) {
  return Object.keys(map).map((key) => ({
    id: key,
    ...map[key],
  }));
}
