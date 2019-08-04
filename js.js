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

  // month-year
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

  // table
  const table = container.appendChild(document.createElement('table'));
  
  weekdays = table.appendChild(document.createElement('tr'));
  weekdays.className = 'weekdays';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Su';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Mo';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Tu';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'We';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Th';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Fr';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Sa';
}

createCalendar();