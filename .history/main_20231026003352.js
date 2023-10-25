// 팝업 닫기 기능
document.querySelectorAll('.day_close input').forEach((closeBtn, index) => {
    closeBtn.addEventListener('change', function() {
        if (this.checked) {
            this.closest('.common_modal').style.display = 'none';
            this.checked = false; // 체크를 해제합니다.
            sessionStorage.removeItem('hideModal' + index); // 해당 팝업의 세션스토리지 정보를 삭제합니다.
        }
    });
});

// 하루동안 보지 않기 기능
document.querySelectorAll('.day_off input').forEach((dayOffBtn, index) => {
    dayOffBtn.addEventListener('change', function() {
        if (this.checked) {
            let d = new Date();
            d.setDate(d.getDate() + 1);
            sessionStorage.setItem('hideModal' + index, d.getTime());
            this.closest('.common_modal').style.display = 'none'; // 팝업을 바로 닫습니다.
        }
    });

    const hideTime = sessionStorage.getItem('hideModal' + index);
    if (hideTime) {
        const now = new Date().getTime();
        if (now < hideTime) {
            dayOffBtn.closest('.common_modal').style.display = 'none';
        } else {
            sessionStorage.removeItem('hideModal' + index);
            dayOffBtn.closest('.common_modal').style.display = 'block';
        }
    } else {
        dayOffBtn.closest('.common_modal').style.display = 'block';
    }
});
