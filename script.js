// تبديل المظهر
const themeBtn = document.getElementById("themeBtn");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// تحميل الإعدادات المحفوظة
if (localStorage.getItem("theme") === "dark" || (prefersDark && !localStorage.getItem("theme"))) {
    document.body.classList.add("dark");
    themeBtn.textContent = "🌙";
} else {
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    }
});

// إضافة تأثير الموجات عند الضغط على الأزرار
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.classList.add("ripple");
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});
