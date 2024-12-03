document.addEventListener('DOMContentLoaded', function() {
    // اختيار جميع العناصر في الصفحة
    const elements = document.querySelectorAll('*');
  
    // إضافة كلاس "fade-in" لجميع العناصر
    elements.forEach(element => {
      element.classList.add('fade-in');
    });
  
    // التحقق من وجود عناصر مرئية عند تحميل الصفحة
    window.addEventListener('scroll', function() {
      elements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          element.classList.add('visible');
        }
      });
    });
  
    // التحقق من الحالة الأولية عند تحميل الصفحة
    elements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });
  