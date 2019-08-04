function monthName(month) {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return monthList[month];
}

function createCalendar(date = new Date()) {
  const container = document.getElementById('news-table').appendChild(document.createElement('div'));
  container.className = 'table-container';

  const monthYear = container.appendChild(document.createElement('div'));
  monthYear.className = 'month-year';

  const prevYear = monthYear.appendChild(document.createElement('dev'));
  prevYear.className = 'prev-month';
  prevYear.innerHTML = '<';

  const curYear = monthYear.appendChild(document.createElement('dev'));
  curYear.className = 'cur-month';
  const month = curYear.appendChild(document.createElement('div'));
  month.className = 'month';
  month.innerHTML = monthName(date.getMonth());
  const year = curYear.appendChild(document.createElement('div'));
  year.className = 'year';
  year.innerHTML = date.getFullYear();

  const nextYear = monthYear.appendChild(document.createElement('dev'));
  nextYear.className = 'next-month';
  nextYear.innerHTML = '>';
}

createCalendar();