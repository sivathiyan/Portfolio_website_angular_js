angular.module('portfolioApp', [])
.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    // Initialize form data
    $scope.formData = {
        name: '',
        email: '',
        message: ''
    };
    
    $scope.formSubmitted = false;
    
    // Portfolio data
    $scope.personalInfo = {
        name: "John Doe",
        title: "Full Stack Developer & Tech Enthusiast",
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567",
        location: "New York, NY",
        bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Expert in modern JavaScript frameworks and backend technologies."
    };
    
    $scope.skills = {
        frontend: [
            { name: "HTML5", level: 90 },
            { name: "CSS3", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "AngularJS", level: 85 },
            { name: "React", level: 80 }
        ],
        backend: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "Express.js", level: 85 },
            { name: "MongoDB", level: 75 },
            { name: "PostgreSQL", level: 70 }
        ],
        tools: [
            { name: "Git", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Docker", level: 70 },
            { name: "AWS", level: 65 },
            { name: "Figma", level: 75 }
        ]
    };
    
    $scope.projects = [
        {
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with payment integration and admin dashboard",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            demo_link: "#",
            github_link: "#",
            image: "project1.jpg"
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates",
            technologies: ["AngularJS", "Express.js", "Socket.io", "MySQL"],
            demo_link: "#",
            github_link: "#",
            image: "project2.jpg"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with interactive maps and forecasts",
            technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
            demo_link: "#",
            github_link: "#",
            image: "project3.jpg"
        },
        {
            title: "Blog Platform",
            description: "Content management system with markdown support and SEO optimization",
            technologies: ["Node.js", "PostgreSQL", "Bootstrap", "JWT"],
            demo_link: "#",
            github_link: "#",
            image: "project4.jpg"
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio website built with modern web technologies",
            technologies: ["AngularJS", "SCSS", "Gulp", "Netlify"],
            demo_link: "#",
            github_link: "#",
            image: "project5.jpg"
        },
        {
            title: "Mobile App UI",
            description: "Mobile-first web application with progressive web app features",
            technologies: ["React", "PWA", "Service Workers", "IndexedDB"],
            demo_link: "#",
            github_link: "#",
            image: "project6.jpg"
        }
    ];
    
    $scope.experience = [
        {
            position: "Senior Full Stack Developer",
            company: "Tech Solutions Inc.",
            duration: "2022 - Present",
            responsibilities: [
                "Lead development of enterprise web applications",
                "Mentor junior developers and code review",
                "Implement CI/CD pipelines and DevOps practices",
                "Collaborate with product teams on feature requirements"
            ]
        },
        {
            position: "Front End Developer",
            company: "Digital Agency Co.",
            duration: "2020 - 2022",
            responsibilities: [
                "Developed responsive websites for various clients",
                "Implemented modern JavaScript frameworks",
                "Optimized web performance and accessibility",
                "Worked closely with designers and UX teams"
            ]
        },
        {
            position: "Junior Web Developer",
            company: "StartUp Ventures",
            duration: "2019 - 2020",
            responsibilities: [
                "Built and maintained company websites",
                "Developed RESTful APIs and database schemas",
                "Participated in agile development processes",
                "Fixed bugs and implemented new features"
            ]
        }
    ];
    
    $scope.education = [
        {
            degree: "Bachelor of Science in Computer Science",
            university: "State University",
            year: "2019",
            gpa: "3.8/4.0"
        }
    ];
    
    $scope.socialLinks = {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
    };
    
    // Form submission handler
    $scope.submitForm = function() {
        if ($scope.contactForm.$valid) {
            // Simulate form submission
            $timeout(function() {
                $scope.formSubmitted = true;
                // Reset form after 3 seconds
                $timeout(function() {
                    $scope.formSubmitted = false;
                    $scope.formData = {
                        name: '',
                        email: '',
                        message: ''
                    };
                    $scope.contactForm.$setPristine();
                    $scope.contactForm.$setUntouched();
                }, 3000);
            }, 500);
        }
    };
    
    // Smooth scrolling navigation
    $scope.scrollTo = function(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    
    // Mobile menu toggle
    $scope.toggleMobileMenu = function() {
        var navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    };
    
    // Initialize animations on scroll (simple implementation)
    $scope.initScrollAnimations = function() {
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);
        
        // Observe sections for animation
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            observer.observe(section);
        });
    };
    
    // Initialize on page load
    angular.element(document).ready(function() {
        // Setup mobile menu toggle
        var mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.addEventListener('click', $scope.toggleMobileMenu);
        }
        
        // Setup smooth scrolling for navigation links
        var navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                $scope.scrollTo(targetId);
                
                // Close mobile menu if open
                var navMenu = document.getElementById('nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Setup hero button scrolling
        var heroButtons = document.querySelectorAll('.hero-btn');
        heroButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    var targetId = this.getAttribute('href').substring(1);
                    $scope.scrollTo(targetId);
                }
            });
        });
        
        // Initialize scroll animations
        if (window.IntersectionObserver) {
            $scope.initScrollAnimations();
        }
        
        // Add navbar background on scroll
        window.addEventListener('scroll', function() {
            var navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(19, 52, 59, 0.95)';
            } else {
                navbar.style.background = 'rgba(19, 52, 59, 0.95)';
            }
        });
    });
}]);