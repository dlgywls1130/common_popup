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

// 쿠키 설정 함수
function setCookie(name, value, hours) {
    let date = new Date();
    date.setTime(date.getTime() + (hours*60*60*1000));
    let expires = "expires="+date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// 쿠키 가져오기 함수
function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

document.querySelectorAll('.day_off input').forEach((dayOffBtn, index) => {
    dayOffBtn.addEventListener('change', function() {
        if (this.checked) {
            setCookie('hideModal' + index, 'true', 24); // 24시간 동안 쿠키 설정
            this.closest('.common_modal').style.display = 'none';
        }
    });

    if (getCookie('hideModal' + index) === 'true') {
        dayOffBtn.closest('.common_modal').style.display = 'none';
    } else {
        dayOffBtn.closest('.common_modal').style.display = 'block';
    }
});
