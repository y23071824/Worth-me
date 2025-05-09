
function switchTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function saveMood(emoji) {
  const today = new Date().toISOString().split('T')[0];
  const moodLog = JSON.parse(localStorage.getItem('moodLog') || '{}');
  moodLog[today] = (moodLog[today] || '') + emoji;
  localStorage.setItem('moodLog', JSON.stringify(moodLog));
  alert('已記錄情緒：' + emoji);
}

function saveDiary() {
  const date = document.getElementById('diary-date').value;
  const text = document.getElementById('diary-text').value;
  if (!date || !text) {
    alert('請輸入日期與日記內容');
    return;
  }
  const diaryLog = JSON.parse(localStorage.getItem('diaryLog') || '{}');
  diaryLog[date] = text;
  localStorage.setItem('diaryLog', JSON.stringify(diaryLog));
  alert('日記已儲存');
  displayDiary();
}

function displayDiary() {
  const entries = JSON.parse(localStorage.getItem('diaryLog') || '{}');
  const container = document.getElementById('saved-entries');
  container.innerHTML = '<h3>我的日記紀錄</h3>';
  for (const date in entries) {
    container.innerHTML += '<p><strong>' + date + '：</strong>' + entries[date] + '</p>';
  }
}
window.onload = displayDiary;
