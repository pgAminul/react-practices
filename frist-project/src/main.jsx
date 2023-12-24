import React from 'react';
import ReactDOM from 'react-dom/client';

// variable access system in jsx
let currentTime = getTime();

function getTime() {
  const nowTime = new Date();
  const hr = nowTime.getHours();
  const mnt = nowTime.getMinutes();
  const scnd = nowTime.getSeconds();


  return `${hr}:${mnt < 10 ? '0' + mnt:mnt}:${scnd < 10 ? '0' + scnd:scnd}`;
}
setInterval(()=>{
  currentTime= getTime();
  render();
})
let currentDate = TodayDate();

function TodayDate() {
  const tooday = new Date();
  const yeear = tooday.getFullYear();
  const moonth = tooday.getMonth()+1;
  const daate = tooday.getDate();


  return `${yeear}:${moonth < 10 ? '0' + moonth:moonth}:${daate < 10 ? '0' + daate:daate}`;
}


function render() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='header'>
      <div>
        <h1>Aminul Islam</h1>
      </div>
      <div className="time">
      <p>now time is {currentTime}</p>
      <p>today date is {currentDate}</p>
      </div>
    </div>
  );
}

// Initial render
render();
