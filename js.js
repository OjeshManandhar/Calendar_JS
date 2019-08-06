function monthName(date) {
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

  return monthList[date.getMonth()];
}

function noOfDays(date) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const year = date.getFullYear();
  const month = date.getMonth();

  if (((year%400 === 0) || (year%100 !== 0 && year%4 === 0)) && (month === 1)) {
    return 29;
  }

  return days[month];
}

function createCalendar(date = new Date()) {
  const container = document.getElementById('news-calendar').appendChild(document.createElement('div'));
  container.className = 'calendar-container';

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
  month.innerHTML = monthName(date);
  const year = curYear.appendChild(document.createElement('div'));
  year.className = 'year';
  year.innerHTML = date.getFullYear();

  const nextYear = monthYear.appendChild(document.createElement('dev'));
  nextYear.className = 'next-month';
  nextYear.innerHTML = '>';

  // table
  const table = container.appendChild(document.createElement('table'));
  table.className = 'calendar-table';
  
  weekdays = table.appendChild(document.createElement('tr'));
  weekdays.className = 'weekdays';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Su';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Mo';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Tu';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'We';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Th';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Fr';
  weekdays.appendChild(document.createElement('td')).innerHTML = 'Sa';

  let week, day, id;
  let prevMon, nextMon, prevMonDate, curMonDate, nextMonthDate;
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  // let sum = noOfDays(date) + firstDay;
  let sum = 28 + firstDay;
  let noOfWeeks = Math.floor(sum/7);
  if (sum%7 !== 0) {
    noOfWeeks++;
  }

  if (date.getMonth() === 0) {
    prevMon = new Date(date.getFullYear() - 1, 11, 1);
  } else {
    prevMon = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  }
  prevMonDate = noOfDays(prevMon) - firstDay + 1;

  if (date.getMonth() === 11) {
    nextMon = new Date(date.getFullYear() + 1, 1, 1);
  } else {
    nextMon = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  }
  nextMonthDate = 1;

  for (var i = 0; i < noOfWeeks*7; i++) {
    if (i%7 === 0) {
      week = table.appendChild(document.createElement('tr'));
      week.className = 'day';
    }
    
    if (i < firstDay) {
      id = `${prevMon.getFullYear()}-${prevMon.getMonth() + 1}-${prevMonDate}`;
      day = week.appendChild(document.createElement('td'));
      day.innerHTML = prevMonDate++;
      day.className = 'disable';
    } else if (i < sum) {
      curMonDate = i - firstDay + 1;
      id = `${date.getFullYear()}-${date.getMonth() + 1}-${curMonDate}`;
      day = week.appendChild(document.createElement('td'));
      day.innerHTML = curMonDate;

      var newDate = new Date();
      // dosent work as it compares time also
      // if (new Date() === new Date(date.getFullYear(), date.getMonth(), curMonDate)) {
      if (
        newDate.getFullYear() === date.getFullYear() &&
        newDate.getMonth() === date.getMonth() &&
        newDate.getDate() === curMonDate
      ) {
        day.className = 'active';
      }
    } else {
      id = `${nextMon.getFullYear()}-${nextMon.getMonth() + 1}-${nextMonthDate}`;
      day = week.appendChild(document.createElement('td'));
      day.innerHTML = nextMonthDate++;
      day.className = 'disable';
    }

    day.id = id;
    day.addEventListener('click', function(e) {
      alert(this.id);
    });
  }
}

// createCalendar(new Date(2019, 0));
createCalendar(new Date());