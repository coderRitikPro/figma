
const containers = document.querySelectorAll('.container');

containers.forEach(container => {
  container.addEventListener('click', (e) => {
    containers.forEach(c => {
      const checkbox = c.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = false;
        c.style.border = "1px solid #ccc";
        c.children[1].style.display = "none";
      }
    });

    // Now activate the clicked container
    const checkbox = container.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
      container.style.border = "2px solid red";
      container.children[1].style.display = "";
    }
  });
});

