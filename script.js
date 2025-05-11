
function saveEntry() {
    const content = document.getElementById('journal').value;
    if (content.trim()) {
        localStorage.setItem('worthMeEntry', content);
        document.getElementById('message').innerText = '已儲存！';
    } else {
        document.getElementById('message').innerText = '請輸入內容再儲存。';
    }
}
window.onload = function() {
    const saved = localStorage.getItem('worthMeEntry');
    if (saved) {
        document.getElementById('journal').value = saved;
    }
}
