// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        {
            image: 'images/slide1.jpg',
            title: '创新项目展示',
            description: '引领技术革新，创造无限可能'
        },
        {
            image: 'images/slide2.jpg',
            title: '卓越技术',
            description: '专业团队，匠心打造'
        },
        {
            image: 'images/slide3.jpg',
            title: '优质服务',
            description: '以客户为中心，提供最佳解决方案'
        }
    ];

    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    // 初始化轮播图
function initSlider() {
    // 清除现有的幻灯片
    slider.innerHTML = '';
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
        const img = new Image();
        img.src = slide.image;
        img.alt = `项目展示${index + 1}`;
        img.onerror = function() {
            console.error(`无法加载图片: ${slide.image}`);
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23ddd"/%3E%3Ctext x="50" y="50" font-family="Arial" font-size="14" text-anchor="middle" dy=".3em" fill="%23555"%3E图片无法加载%3C/text%3E%3C/svg%3E';
        };
        slideElement.appendChild(img);
        const content = document.createElement('div');
        content.className = 'slide-content';
        content.innerHTML = `
            <h1>${slide.title}</h1>
            <p>${slide.description}</p>
        `;
        slideElement.appendChild(content);
        slider.appendChild(slideElement);
    });
}

    // 切换到指定幻灯片
    function goToSlide(index) {
        const slideElements = document.querySelectorAll('.slide');
        slideElements[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slideElements[currentSlide].classList.add('active');
    }

    // 下一张幻灯片
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // 上一张幻灯片
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // 初始化轮播图
    initSlider();

    // 添加事件监听器
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // 自动轮播
setInterval(nextSlide, 5000);

// 检查所有幻灯片图片
slides.forEach((slide, index) => {
    const img = new Image();
    img.onload = function() {
        console.log(`幻灯片 ${index + 1} 的图片 (${slide.image}) 加载成功。`);
    };
    img.onerror = function() {
        console.error(`幻灯片 ${index + 1} 的图片 (${slide.image}) 无法加载。`);
    };
    img.src = slide.image;
});

    // 平滑滚动
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

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // 这里可以添加表单提交逻辑
        alert('感谢您的留言，我们会尽快回复！');
        this.reset();
    });
}

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(44, 62, 80, 0.9)';
    } else {
        navbar.style.background = '#2c3e50';
    }
});