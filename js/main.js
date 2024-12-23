document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const moonIcon = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sunIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? sunIcon : moonIcon;

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    });

    // Sample work data - replace with your actual projects
    const workData = [
        {
            id: 1,
            title: 'Project 1',
            image: 'images/projects/1 (1).jpg',
            category: 'Architecture'
        },
        {
            id: 2,
            title: 'Project 2',
            image: 'images/projects/1 (2).jpg',
            category: 'Architecture'
        },
        {
            id: 3,
            title: 'Project 3',
            image: 'images/projects/1 (3).jpg',
            category: 'Urban'
        },
        {
            id: 4,
            title: 'Project 4',
            image: 'images/projects/1 (4).jpg',
            category: 'Architecture'
        },
        {
            id: 5,
            title: 'Project 5',
            image: 'images/projects/1 (5).jpg',
            category: 'Urban'
        },
        {
            id: 6,
            title: 'Project 6',
            image: 'images/projects/1 (6).jpg',
            category: 'Architecture'
        }
    ];

    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const workSection = document.getElementById('work');
    const aboutSection = document.getElementById('about');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            if (item.getAttribute('href') === '#about') {
                workSection.style.display = 'none';
                aboutSection.classList.remove('hidden');
            } else {
                workSection.style.display = 'grid';
                aboutSection.classList.add('hidden');
            }
        });
    });

    // Create work grid
    function createWorkGrid() {
        workData.forEach(project => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item';
            workItem.innerHTML = `
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            `;
            workSection.appendChild(workItem);

            // Add click event for modal
            workItem.addEventListener('click', () => {
                openModal(project);
            });
        });
    }

    // Modal functionality
    function createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="" alt="">
            </div>
            <span class="modal-close">&times;</span>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        return modal;
    }

    const modal = createModal();

    function openModal(project) {
        const modalImg = modal.querySelector('img');
        modalImg.src = project.image;
        modalImg.alt = project.title;
        modal.classList.add('active');
    }

    // Initialize work grid
    createWorkGrid();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 