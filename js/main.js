// Site Content
const siteContent = {
    work: {
        projects: [
            {
                id: 1,
                title: "Project 1",
                category: "Architecture",
                image: "images/projects/1 (1).jpg",
                description: "A beautiful architectural project showcasing modern design principles and innovative solutions."
            },
            {
                id: 2,
                title: "Project 2",
                category: "Architecture",
                image: "images/projects/1 (2).jpg",
                description: "A beautiful architectural project showcasing modern design principles and innovative solutions."
            },
            {
                id: 3,
                title: "Project 3",
                category: "Urban",
                image: "images/projects/1 (3).jpg",
                description: "A beautiful architectural project showcasing modern design principles and innovative solutions."
            },
            {
                id: 4,
                title: "Project 4",
                category: "Architecture",
                image: "images/projects/1 (4).jpg",
                description: "A beautiful architectural project showcasing modern design principles and innovative solutions."
            },
            {
                id: 5,
                title: "Project 5",
                category: "Urban",
                image: "images/projects/1 (5).jpg",
                description: "A beautiful architectural project showcasing modern design principles and innovative solutions."
            },
            {
                id: 6,
                title: "Project 6",
                category: "Architecture",
                image: "images/projects/1 (6).jpg",
                description: "A beautiful architectural project showcasing modern design principles and innovative solutions."
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeNavigation();
    createWorkGrid();
});

function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const moonIcon = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sunIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    updateTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        updateTheme(newTheme);
    });

    function updateTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
    }
}

function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const workSection = document.getElementById('work');
    const aboutSection = document.getElementById('about');

    // Hide about section initially
    aboutSection.style.display = 'none';
    workSection.style.display = 'grid';

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Toggle sections
            if (item.getAttribute('href') === '#about') {
                workSection.style.display = 'none';
                aboutSection.style.display = 'block';
                aboutSection.classList.add('active');
            } else {
                workSection.style.display = 'grid';
                aboutSection.style.display = 'none';
                aboutSection.classList.remove('active');
            }
        });
    });

    // Check URL hash on page load
    if (window.location.hash === '#about') {
        const aboutLink = document.querySelector('a[href="#about"]');
        if (aboutLink) {
            aboutLink.click();
        }
    }
}

function createWorkGrid() {
    const workGrid = document.querySelector('.work-grid');
    workGrid.innerHTML = '';
    
    siteContent.work.projects.forEach(project => {
        const card = createWorkCard(project);
        workGrid.appendChild(card);
    });
}

function createWorkCard(project) {
    const card = document.createElement('div');
    card.className = 'work-card';
    
    const imageSection = document.createElement('div');
    imageSection.className = 'work-card-image';
    
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    img.loading = 'lazy';
    
    imageSection.appendChild(img);
    card.appendChild(imageSection);
    
    card.addEventListener('click', () => openModal(project));
    
    return card;
}

function openModal(project) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const content = document.createElement('div');
    content.className = 'modal-content';
    
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    
    const closeBtn = document.createElement('div');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => modal.remove();
    
    content.appendChild(img);
    modal.appendChild(content);
    modal.appendChild(closeBtn);
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}