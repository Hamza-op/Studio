// Content Management
const siteContent = {
    // Navigation
    navigation: {
        logo: "STUDIO 110",
        menu: [
            { title: "WORK", href: "#", active: true },
            { title: "ABOUT & CONTACT", href: "#about", active: false }
        ],
        social: [
            { platform: "twitter", url: "https://twitter.com", icon: "twitter-icon" },
            { platform: "behance", url: "https://behance.net", icon: "behance-icon" },
            { platform: "instagram", url: "https://instagram.com", icon: "instagram-icon" }
        ]
    },

    // Work/Portfolio Section
    work: {
        categories: ["All", "Architecture", "Urban", "Interior"],
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
    },

    // About Section
    about: {
        title: "ABOUT",
        content: "I am a photographer and visual artist specializing in architectural and urban photography. My work focuses on capturing the essence of spaces and structures through a minimalist lens.",
        skills: ["Architecture Photography", "Urban Photography", "Minimalist Design"]
    },

    // Contact Section
    contact: {
        title: "CONTACT",
        intro: "For inquiries and collaborations:",
        phone: "+92 304 904 0269",
        email: "contact@studio110.com"
    },

    // Footer
    footer: {
        copyright: "© 2024 Studio 110. All rights reserved.",
        tagline: "Crafted with passion for architecture & design"
    }
};

// Export the content
export default siteContent; 