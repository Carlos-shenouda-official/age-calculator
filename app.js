function calculateAge() {
  const date = parseInt(document.getElementById('date').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  // Check if the date is valid
  if (date > 31 ) {
    const ageDiv = document.getElementById('age');
    ageDiv.innerHTML = '';

    // Add the error message
    const ageInfoDiv = document.createElement('div');
    ageInfoDiv.classList.add('resulttt');
    ageInfoDiv.innerHTML = `ERROR: Please enter a valid day `;
    ageDiv.appendChild(ageInfoDiv);

    const videoDiv = document.createElement('div');
    videoDiv.classList.add('resultt');
    videoDiv.innerHTML = '<iframe width="250" height="140" src="y2mate.com - اسب الدين واكفر ياجدعان بهجت صابر _360p.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ageDiv.appendChild(videoDiv);
    return; 
  }

  // Check if the month is valid
  if (month > 12 ) {
    const ageDiv = document.getElementById('age');
    ageDiv.innerHTML = '';

    // Add the error message
    const ageInfoDiv = document.createElement('div');
    ageInfoDiv.classList.add('resulttt');
    ageInfoDiv.innerHTML = `ERROR: Please enter a valid month ` ;
    ageDiv.appendChild(ageInfoDiv);
    
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('resultt');
    videoDiv.innerHTML = '<iframe width="250" height="140" src="y2mate.com - اسب الدين واكفر ياجدعان بهجت صابر _360p.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ageDiv.appendChild(videoDiv);
    return;
  }

  const birthDate = new Date(year, month - 1, date);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.4375;
  const ageInYears = ageInMonths / 12;

  const ageDiv = document.getElementById('age');
  ageDiv.innerHTML = '';

  // Add the sentence "You lived till now..." before the results
  const ageInfoDiv = document.createElement('div');
  ageInfoDiv.classList.add('resultt');
  ageInfoDiv.innerHTML = `YOU LIVED TILL NOW 👀👇 `;
  ageDiv.appendChild(ageInfoDiv);

  const yearsDiv = document.createElement('div');
  yearsDiv.classList.add('result');
  yearsDiv.innerHTML = ` ${ageInYears.toFixed(2)} Year `;
  ageDiv.appendChild(yearsDiv);

  const monthsDiv = document.createElement('div');
  monthsDiv.classList.add('result');
  monthsDiv.innerHTML = ` ${ageInMonths.toFixed(2)} Month `;
  ageDiv.appendChild(monthsDiv);

  const daysDiv = document.createElement('div');
  daysDiv.classList.add('result');
  daysDiv.innerHTML = ` ${ageInDays.toFixed(2)} Day `;
  ageDiv.appendChild(daysDiv);

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('result');
  hoursDiv.innerHTML = ` ${ageInHours.toFixed(2)} Hour `;
  ageDiv.appendChild(hoursDiv);

  const minutesDiv = document.createElement('div');
  minutesDiv.classList.add('result');
  minutesDiv.innerHTML = ` ${ageInMinutes.toFixed(2)} Minute `;
  ageDiv.appendChild(minutesDiv);

  const secondsDiv = document.createElement('div');
  secondsDiv.classList.add('result');
  secondsDiv.innerHTML = ` ${ageInSeconds.toFixed(2)} Second `;
  ageDiv.appendChild(secondsDiv);

  const photoDiv = document.createElement('div');
  photoDiv.classList.add('resultt');
  photoDiv.innerHTML = `<img src="IMG_202303028_193031.png" style="width: 120px; height: auto;">`;
  ageDiv.appendChild(photoDiv);

}
