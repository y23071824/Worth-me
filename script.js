
document.addEventListener("DOMContentLoaded", () => {
  const calendarGrid = document.getElementById("calendar-grid");
  const detailSection = document.getElementById("day-detail");
  const selectedDateLabel = document.getElementById("selected-date");

  function generateCalendar(days = 30) {
    calendarGrid.innerHTML = "";
    for (let i = 1; i <= days; i++) {
      const cell = document.createElement("div");
      cell.textContent = i;
      cell.className = "calendar-cell";
      cell.style.border = "1px solid #ccc";
      cell.style.padding = "1em";
      cell.style.textAlign = "center";
      cell.style.cursor = "pointer";
      cell.onclick = () => {
        selectedDateLabel.textContent = `2025-05-${String(i).padStart(2, '0')}`;
        detailSection.classList.remove("hidden");
      };
      calendarGrid.appendChild(cell);
    }
  }

  document.getElementById("close-detail").onclick = () => {
    detailSection.classList.add("hidden");
  };

  generateCalendar();
});
