document.addEventListener('DOMContentLoaded', () => {
  const hotRoutesElement = document.getElementById('hotRoutes');
  const children = hotRoutesElement.children;
  let totalHeight = 0;

  for (let i = 0; i < children.length; i++) {
    totalHeight += children[i].offsetHeight;
  }

  if (totalHeight > hotRoutesElement.offsetHeight) {
    hotRoutesElement.style.overflowY = 'auto';
  } else {
    hotRoutesElement.style.overflowY = 'hidden';
  }
});
