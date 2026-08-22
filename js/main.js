/* ============================================================
   Almafhum — Shared JavaScript (navbar, footer, theme, forms)
   ============================================================ */

/* ===== CONFIG =====
   ضع رقم الواتساب هنا بصيغة دولية بدون + (مثال: 9665XXXXXXXX)
   عند تعبئته، يُرسل نموذج الحجز إلى واتساب تلقائياً. */
var WHATSAPP_NUMBER = '';

/* ============================================================
   NAVBAR + FOOTER (single source of truth for all pages)
   ============================================================ */
var NAV_LINKS = [
    { href: 'index.html',    label: 'الرئيسية',     page: 'home' },
    { href: 'programs.html', label: 'البرامج',      page: 'programs' },
    { href: 'teachers.html', label: 'المعلمون',     page: 'teachers' },
    { href: 'pricing.html',  label: 'الأسعار',      page: 'pricing' },
    { href: 'reviews.html',  label: 'التقييمات',    page: 'reviews' },
    { href: 'blog.html',     label: 'المدونة',      page: 'blog' },
    { href: 'about.html',    label: 'من نحن',       page: 'about' },
    { href: 'contact.html',  label: 'تواصل معنا',   page: 'contact' }
];

var currentPage = (document.body && document.body.dataset.page) || '';

function navLinkHTML() {
    return NAV_LINKS.map(function (l) {
        var active = l.page === currentPage ? ' text-primary font-bold' : '';
        return '<a href="' + l.href + '" class="hover:text-primary transition-colors' + active + '">' + l.label + '</a>';
    }).join('');
}

function mobLinkHTML() {
    return NAV_LINKS.map(function (l) {
        var active = l.page === currentPage ? ' text-primary font-bold' : '';
        return '<a href="' + l.href + '" class="py-2 font-semibold hover:text-primary transition-colors mob-link' + active + '">' + l.label + '</a>';
    }).join('');
}

var NAVBAR_HTML =
'<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-line transition-all duration-300">' +
    '<div class="container mx-auto px-6 py-4 flex justify-between items-center">' +
        '<a href="index.html" class="flex items-center gap-2 text-2xl font-extrabold group">' +
            '<img src="images/logo.jpg" alt="شعار Almafhum" class="w-10 h-10 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110">' +
            '<span class="gradient-text">Almafhum</span>' +
        '</a>' +
        '<div class="hidden lg:flex items-center gap-7 text-sm font-semibold">' + navLinkHTML() + '</div>' +
        '<div class="flex items-center gap-3">' +
            '<button id="theme-toggle" class="w-10 h-10 rounded-full bg-content/5 flex items-center justify-center hover:scale-110 transition-all duration-300" aria-label="تبديل المظهر" title="تبديل المظهر">' +
                '<iconify-icon id="icon-moon" icon="lucide:moon" width="18" class="hidden"></iconify-icon>' +
                '<iconify-icon id="icon-sun" icon="lucide:sun" width="18"></iconify-icon>' +
            '</button>' +
            '<a href="login.html" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-primary transition-colors">' +
                '<iconify-icon icon="lucide:user" width="16"></iconify-icon> تسجيل الدخول' +
            '</a>' +
            '<a href="book-trial.html" class="hidden md:inline-flex bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">' +
                'احجز حصة مجانية' +
            '</a>' +
            '<button id="mobile-menu-btn" class="lg:hidden w-10 h-10 rounded-full bg-content/5 flex items-center justify-center" aria-label="القائمة">' +
                '<iconify-icon icon="lucide:menu" width="20" id="menu-open"></iconify-icon>' +
                '<iconify-icon icon="lucide:x" width="20" id="menu-close" class="hidden"></iconify-icon>' +
            '</button>' +
        '</div>' +
    '</div>' +
    '<div id="mobile-menu" class="lg:hidden hidden border-t border-line bg-surface/95 backdrop-blur-xl">' +
        '<div class="container mx-auto px-6 py-6 flex flex-col gap-4">' +
            mobLinkHTML() +
            '<a href="login.html" class="py-2 font-semibold text-muted hover:text-primary transition-colors mob-link">تسجيل الدخول</a>' +
            '<a href="book-trial.html" class="mt-2 bg-primary text-white text-center px-5 py-3 rounded-full font-bold mob-link">احجز حصة مجانية</a>' +
        '</div>' +
    '</div>' +
'</nav>';

var FOOTER_HTML =
'<footer class="bg-card border-t border-line pt-16 pb-8">' +
    '<div class="container mx-auto px-6">' +
        '<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">' +
            '<div>' +
                '<div class="flex items-center gap-2 text-xl font-extrabold mb-4">' +
                    '<img src="images/logo.jpg" alt="شعار Almafhum" class="w-9 h-9 rounded-lg object-cover">' +
                    '<span class="gradient-text">Almafhum</span>' +
                '</div>' +
                '<p class="text-muted text-sm leading-relaxed mb-4">منصة تعليمية قرآنية متكاملة تهدف لتقديم تجربة تعلم متميزة تجمع بين الفهم والحفظ والتقنية الحديثة.</p>' +
                '<div class="flex gap-3">' +
                    '<a href="https://www.facebook.com/profile.php?id=61593546452715" target="_blank" rel="noopener" aria-label="فيسبوك" class="w-10 h-10 rounded-full bg-content/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>' +
                    '<a href="https://www.instagram.com/almafhumhq" target="_blank" rel="noopener" aria-label="انستغرام" class="w-10 h-10 rounded-full bg-content/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>' +
                    '<a href="#" aria-label="تيك توك" class="w-10 h-10 rounded-full bg-content/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><iconify-icon icon="simple-icons:tiktok" width="16"></iconify-icon></a>' +
                    '<a href="https://www.youtube.com/channel/UClziCbVf99NDS24Wwp7ECyQ" target="_blank" rel="noopener" aria-label="يوتيوب" class="w-10 h-10 rounded-full bg-content/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><iconify-icon icon="lucide:youtube" width="16"></iconify-icon></a>' +
                '</div>' +
            '</div>' +
            '<div>' +
                '<h4 class="font-bold mb-4">روابط سريعة</h4>' +
                '<div class="space-y-3">' +
                    '<a href="index.html" class="block text-sm text-muted hover:text-primary transition-colors">الرئيسية</a>' +
                    '<a href="programs.html" class="block text-sm text-muted hover:text-primary transition-colors">البرامج</a>' +
                    '<a href="teachers.html" class="block text-sm text-muted hover:text-primary transition-colors">المعلمون</a>' +
                    '<a href="pricing.html" class="block text-sm text-muted hover:text-primary transition-colors">الأسعار</a>' +
                    '<a href="book-trial.html" class="block text-sm text-muted hover:text-primary transition-colors">حجز حصة مجانية</a>' +
                '</div>' +
            '</div>' +
            '<div>' +
                '<h4 class="font-bold mb-4">البرامج</h4>' +
                '<div class="space-y-3">' +
                    '<a href="programs.html#memorization" class="block text-sm text-muted hover:text-primary transition-colors">برنامج التحفيظ</a>' +
                    '<a href="programs.html#tajweed" class="block text-sm text-muted hover:text-primary transition-colors">برنامج التجويد</a>' +
                    '<a href="programs.html#reading" class="block text-sm text-muted hover:text-primary transition-colors">برنامج القراءة</a>' +
                    '<a href="programs.html#noor-al-bayan" class="block text-sm text-muted hover:text-primary transition-colors">نور البيان</a>' +
                    '<a href="programs.html#qaida" class="block text-sm text-muted hover:text-primary transition-colors">القاعدة النورانية</a>' +
                    '<a href="programs.html#islamic-studies" class="block text-sm text-muted hover:text-primary transition-colors">الدراسات الإسلامية</a>' +
                    '<a href="programs.html#arabic" class="block text-sm text-muted hover:text-primary transition-colors">اللغة العربية</a>' +
                '</div>' +
            '</div>' +
            '<div>' +
                '<h4 class="font-bold mb-4">تواصل معنا</h4>' +
                '<div class="space-y-3">' +
                    '<a href="mailto:Info.almafhum@gmail.com" class="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"><iconify-icon icon="lucide:mail" width="16" class="text-primary"></iconify-icon> <span dir="ltr">Info.almafhum@gmail.com</span></a>' +
                    '<div class="flex items-center gap-2 text-sm text-muted"><iconify-icon icon="lucide:phone" width="16" class="text-primary"></iconify-icon> <span dir="ltr">+966 5XX XXX XXXX</span></div>' +
                    '<div class="flex items-center gap-2 text-sm text-muted"><iconify-icon icon="lucide:message-circle" width="16" class="text-primary"></iconify-icon> واتساب مباشر</div>' +
                '</div>' +
                '<div class="mt-6"><a href="book-trial.html" class="inline-flex bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/25 transition-all">احجز حصة مجانية</a></div>' +
            '</div>' +
        '</div>' +
        '<div class="border-t border-line pt-8 flex flex-col md:flex-row justify-between items-center gap-4">' +
            '<p class="text-xs text-muted">© 2026 Almafhum. جميع الحقوق محفوظة.</p>' +
            '<div class="flex gap-6">' +
                '<a href="#" class="text-xs text-muted hover:text-primary transition-colors">سياسة الخصوصية</a>' +
                '<a href="#" class="text-xs text-muted hover:text-primary transition-colors">الشروط والأحكام</a>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</footer>';

function injectShell() {
    var navRoot = document.getElementById('navbar-root');
    var footerRoot = document.getElementById('footer-root');
    if (navRoot) navRoot.innerHTML = NAVBAR_HTML;
    if (footerRoot) footerRoot.innerHTML = FOOTER_HTML;

    var wa = document.createElement('a');
    wa.id = 'whatsapp-float';
    wa.setAttribute('aria-label', 'تواصل معنا عبر واتساب');
    wa.setAttribute('title', 'تواصل معنا عبر واتساب');
    wa.setAttribute('target', '_blank');
    wa.setAttribute('rel', 'noopener');
    wa.href = 'https://wa.me/' + (WHATSAPP_NUMBER || '') + '?text=' + encodeURIComponent('مرحباً، أرغب في الاستفسار عن منصة Almafhum');
    wa.className = 'fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 z-50';
    wa.innerHTML = '<iconify-icon icon="logos:whatsapp-icon" width="30"></iconify-icon>';
    document.body.appendChild(wa);

    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'العودة للأعلى');
    btn.className = 'fixed bottom-8 left-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 pointer-events-none z-50';
    btn.innerHTML = '<iconify-icon icon="lucide:chevron-up" width="22"></iconify-icon>';
    document.body.appendChild(btn);
}

/* ============================================================
   THEME (dark / light)
   ============================================================ */
function applyTheme(isDark) {
    var html = document.documentElement;
    if (isDark) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    var iconMoon = document.getElementById('icon-moon');
    var iconSun = document.getElementById('icon-sun');
    if (iconMoon) iconMoon.classList.toggle('hidden', !isDark);
    if (iconSun) iconSun.classList.toggle('hidden', isDark);
}

function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyTheme(true);
    } else {
        applyTheme(false);
    }
    document.addEventListener('click', function (e) {
        var toggle = e.target.closest('#theme-toggle');
        if (toggle) {
            var isDark = !document.documentElement.classList.contains('dark');
            applyTheme(isDark);
            try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (err) {}
        }
    });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
    document.addEventListener('click', function (e) {
        var btn = e.target.closest('#mobile-menu-btn');
        if (btn) {
            var menu = document.getElementById('mobile-menu');
            var openIcon = document.getElementById('menu-open');
            var closeIcon = document.getElementById('menu-close');
            menu.classList.toggle('hidden');
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
            return;
        }
        var link = e.target.closest('.mob-link');
        if (link) {
            var menu = document.getElementById('mobile-menu');
            var openIcon = document.getElementById('menu-open');
            var closeIcon = document.getElementById('menu-close');
            menu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
}

/* ============================================================
   NAVBAR SCROLL + BACK TO TOP
   ============================================================ */
function initScroll() {
    var navbar = document.getElementById('navbar');
    var backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
        if (navbar) navbar.classList.toggle('nav-scrolled', window.scrollY > 50);
        if (backToTop) {
            if (window.scrollY > 600) {
                backToTop.classList.remove('opacity-0', 'pointer-events-none');
                backToTop.classList.add('opacity-100');
            } else {
                backToTop.classList.add('opacity-0', 'pointer-events-none');
                backToTop.classList.remove('opacity-100');
            }
        }
    });
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
    var els = document.querySelectorAll('.scroll-reveal');
    if (!('IntersectionObserver' in window) || !els.length) return;
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    els.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
        observer.observe(el);
    });
}

/* ============================================================
   FAQ
   ============================================================ */
function initFaq() {
    document.addEventListener('click', function (e) {
        var btn = e.target.closest('.faq-toggle');
        if (!btn) return;
        var item = btn.closest('.faq-item');
        var answer = item.querySelector('.faq-answer');
        var icon = btn.querySelector('.faq-icon');
        var isOpen = answer.classList.contains('open');

        document.querySelectorAll('.faq-answer').forEach(function (a) { a.classList.remove('open'); });
        document.querySelectorAll('.faq-icon').forEach(function (i) { i.style.transform = 'rotate(0deg)'; });

        if (!isOpen) {
            answer.classList.add('open');
            icon.style.transform = 'rotate(180deg)';
        }
    });
}

/* ============================================================
   TABS (login roles & filters)
   ============================================================ */
function initTabs() {
    document.addEventListener('click', function (e) {
        var tab = e.target.closest('[data-tab]');
        if (!tab) return;
        var group = tab.dataset.tabGroup || 'default';
        document.querySelectorAll('[data-tab][data-tab-group="' + group + '"]').forEach(function (t) {
            t.classList.toggle('tab-active', t === tab);
        });
        if (group === 'filters') {
            document.querySelectorAll('[data-cat]').forEach(function (el) {
                var cats = (el.dataset.cat || '').split(' ');
                el.classList.toggle('panel-hidden', tab.dataset.tab !== 'all' && cats.indexOf(tab.dataset.tab) === -1);
            });
            return;
        }
        document.querySelectorAll('[data-panel][data-tab-group="' + group + '"]').forEach(function (p) {
            p.classList.toggle('panel-hidden', p.dataset.panel !== tab.dataset.tab);
        });
    });
}

/* ============================================================
   FORMS
   ============================================================ */
function initForms() {
    /* حجز الحصة المجانية */
    var trialForm = document.getElementById('book-trial-form');
    if (trialForm) {
        trialForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = trialForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="20" class="animate-spin"></iconify-icon> جاري الإرسال...';
            }
            fetch(trialForm.action, {
                method: 'POST',
                body: new FormData(trialForm),
                headers: { 'Accept': 'application/json' }
            }).then(function () {
                trialForm.classList.add('hidden');
                var success = document.getElementById('form-success');
                if (success) success.classList.remove('hidden');
            }).catch(function () {
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = '<span>احجز حصتي المجانية الآن</span><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>';
                }
                alert('حدث خطأ في الإرسال، حاول مرة أخرى.');
            });
        });
    }

    /* نموذج التواصل */
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'جاري الإرسال...';
            }
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            }).then(function () {
                contactForm.classList.add('hidden');
                var success = document.getElementById('contact-success');
                if (success) success.classList.remove('hidden');
            }).catch(function () {
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = 'إرسال الرسالة';
                }
                alert('حدث خطأ في الإرسال، حاول مرة أخرى.');
            });
        });
    }

    /* النشرة البريدية */
    document.querySelectorAll('.newsletter-form').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = form.querySelector('input[type="email"]');
            var msg = form.querySelector('.newsletter-msg');
            if (!input || !input.value || !input.checkValidity()) return;
            var btn = form.querySelector('button[type="submit"]');
            if (btn) btn.disabled = true;
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            }).then(function () {
                if (msg) {
                    msg.classList.remove('hidden');
                    msg.textContent = 'شكراً لاشتراكك! ستصلك أحدث مقالاتنا أولاً بأول.';
                }
                input.value = '';
                if (btn) btn.disabled = false;
            }).catch(function () {
                if (msg) {
                    msg.classList.remove('hidden');
                    msg.textContent = 'حدث خطأ في الاشتراك، حاول مرة أخرى.';
                }
                if (btn) btn.disabled = false;
            });
        });
    });

    /* تسجيل الدخول (نسخة تجريبية) */
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var card = loginForm.closest('.bg-card');
            loginForm.classList.add('hidden');
            var success = document.getElementById('login-success');
            if (success) success.classList.remove('hidden');
        });
    }
}

/* ============================================================
   SMOOTH SCROLL (same-page anchors)
   ============================================================ */
function initSmoothScroll() {
    document.addEventListener('click', function (e) {
        var a = e.target.closest('a[href^="#"]');
        if (!a) return;
        var id = a.getAttribute('href');
        if (id === '#' || id.length < 2) return;
        var target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
    injectShell();
    initTheme();
    initMobileMenu();
    initScroll();
    initReveal();
    initFaq();
    initTabs();
    initForms();
    initSmoothScroll();
});
