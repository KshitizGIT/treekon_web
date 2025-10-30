// On hover, set class active to hoverered submenu and remove from others

document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.addEventListener('mouseenter', () => {
        document.querySelectorAll('.submenu').forEach(sm => sm.classList.remove('active'));
        submenu.classList.add('active');
        // Only show submenu with data-target
        
        document.querySelectorAll('.submenu-content').forEach(content => {
            content.classList.add('hidden');
        });
        const target = submenu.dataset.target;
        const targetContent = document.getElementById(target);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
    });
});

