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
            sessionStorage.setItem('hideModal' + index, 'true');
            this.closest('.common_modal').style.display = 'none'; // 팝업을 바로 닫습니다.
        }
    });

    if (sessionStorage.getItem('hideModal' + index) === 'true') {
        dayOffBtn.closest('.common_modal').style.display = 'none';
    } else {
        dayOffBtn.closest('.common_modal').style.display = 'block';
    }
});

