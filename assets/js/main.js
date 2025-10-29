const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const itemToShow = item.dataset.target;
    document.getElementById(itemToShow).style.display = 'block';
  })

  item.addEventListener('mouseout', () => {
    const itemToShow = item.dataset.target;
    document.getElementById(itemToShow).style.display = 'none';
  })
})
