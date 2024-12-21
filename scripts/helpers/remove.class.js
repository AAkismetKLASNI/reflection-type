const removeClass = (node, name) =>
  (node.className = node.className.replace(name, ''));

export { removeClass };
