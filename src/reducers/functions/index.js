export function move( items, oldIndex, newIndex) {
  const item = items[oldIndex];
  items.splice(oldIndex, 1);
  items.splice(newIndex, 0, item);
  
  return [...items];
}