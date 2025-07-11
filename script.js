document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('giftBox');
    const voucherContainer = document.getElementById('voucherContainer');
    const surpriseSound = document.getElementById('surpriseSound');

    // Tạo hiệu ứng bong bóng bay
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        document.body.appendChild(bubble);

        const size = Math.random() * 60 + 20; // Kích thước từ 20px đến 80px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang
        bubble.style.top = `${Math.random() * 100}vh`; // Vị trí ngẫu nhiên theo chiều dọc
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`; // Thời gian animation từ 5s đến 15s
        bubble.style.opacity = `${Math.random() * 0.5 + 0.3}`; // Độ mờ từ 0.3 đến 0.8

        setTimeout(() => {
            bubble.remove(); // Xóa bong bóng sau một thời gian
        }, parseFloat(bubble.style.animationDuration) * 1000);
    }

    // Tạo nhiều bong bóng khi trang tải
    for (let i = 0; i < 15; i++) {
        createBubble();
    }

    giftBox.addEventListener('click', () => {
        // Ẩn hộp quà
        giftBox.style.display = 'none';

        // Hiển thị voucher với hiệu ứng
        voucherContainer.classList.add('active');

        // Phát âm thanh
        if (surpriseSound) {
            surpriseSound.play().catch(e => console.error("Lỗi khi phát âm thanh:", e));
        }
    });
});