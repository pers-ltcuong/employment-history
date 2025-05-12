// Hàm kiểm tra khi phần tử vào màn hình
function handleScroll() {
  const elements = document.querySelectorAll('.slide-in');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
}

// Gọi hàm mỗi khi cuộn trang
window.addEventListener('scroll', handleScroll);

// Kiểm tra ngay khi trang tải
document.addEventListener('DOMContentLoaded', handleScroll);
