document.getElementById('button').addEventListener('click', movie)

let age = 18

let day = ''

function movie () {
  age = document.getElementById('input').value
  age = parseInt(age)
  day = document.getElementById('hello').value
  if ((age < 18) && (day === 'Monday' || day === 'Friday')) {
    document.getElementById('answer').innerHTML = 'Time for school'
  } else if ((age >= 18)  && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Friday' || day === 'Thursday')) { 
    document.getElementById('answer').innerHTML = 'Time for work'
  } else if ((age >= 18)  && (day === 'Sunday' || day === 'Saturday')) {
     document.getElementById('answer').innerHTML = 'Time to relax for the weekend'
  }
   document.getElementById('movie').innerHTML = 'Thank for verifying your age and day of the week!'
}
