// 팝업 닫기 기능
document.querySelectorAll('.day_close input').forEach((closeBtn) => {
    closeBtn.addEventListener('change', function() {
        if (this.checked) {
            this.closest('.common_modal').style.display = 'none';
            this.checked = false; // 체크를 해제합니다.
        }
    });
});

// 하루동안 보지 않기 기능
document.querySelectorAll('.day_off input').forEach((dayOffBtn, index) => {
    dayOffBtn.addEventListener('change', function() {
        if (this.checked) {
            let d = new Date();
            d.setDate(d.getDate() + 1);
            localStorage.setItem('hideModal' + index, d.getTime());
            this.closest('.common_modal').style.display = 'none'; // 팝업을 바로 닫습니다.
        }
    });

    const hideTime = localStorage.getItem('hideModal' + index);
    if (hideTime) {
        const now = new Date().getTime();
        if (now < hideTime) {
            dayOffBtn.closest('.common_modal').style.display = 'none';
        } else {
            localStorage.removeItem('hideModal' + index);
        }
    }
});
