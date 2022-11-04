(()=>{function e(){const e=new Date,t={localDate:new Date,prevMonthLastDate:null,calWeekDays:["일","월","화","수","목","금","토"],calMonthName:["1","2","3","4","5","6","7","8","9","10","11","12"],daysInMonth:function(e,t){return new Date(t,e,0).getDate()},firstDay:function(){return new Date(e.getFullYear(),e.getMonth(),1)},lastDay:function(){return new Date(e.getFullYear(),e.getMonth()+1,0)},firstDayNumber:function(){return t.firstDay().getDay()+1},lastDayNumber:function(){return t.lastDay().getDay()+1},getPreviousMonthLastDate:function(){return new Date(e.getFullYear(),e.getMonth(),0).getDate()},navigateToPreviousMonth:function(){e.setMonth(e.getMonth()-1),t.attachEventsOnNextPrev(),t.disableIfThisMonth()},navigateToNextMonth:function(){e.setMonth(e.getMonth()+1),t.attachEventsOnNextPrev(),t.disableIfThisMonth()},navigateToCurrentMonth:function(){let a=t.localDate.getMonth(),n=t.localDate.getFullYear();e.setMonth(a),e.setYear(n),t.attachEventsOnNextPrev()},disableIfThisMonth:function(){let a=document.querySelector(".calendar .calendar-prev a");e.getFullYear()==t.localDate.getFullYear()&&e.getMonth()==t.localDate.getMonth()?(a.classList.add("disable"),a.removeEventListener("click",t.navigateToPreviousMonth)):a.classList.remove("disable")},displayYear:function(){document.querySelector(".calendar .calendar-year-label").innerHTML=e.getFullYear()+"."},displayMonth:function(){document.querySelector(".calendar .calendar-month-label").innerHTML=t.calMonthName[e.getMonth()]},selectDate:function(e){const t=document.querySelector(".calendar-selected"),n=document.querySelector(".calendar-button");t&&t.classList.toggle("calendar-selected"),e.target.parentNode.classList.add("calendar-selected"),n.classList.add("active-button"),n.addEventListener("click",a)},plotSelectors:function(){document.querySelector(".calendar").innerHTML+='<div class="calendar-inner"><div class="calendar-controls">\n        <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>\n        <div class="calendar-year-month">\n        <div class="calendar-year-label"></div>\n        <div class="calendar-month-label"></div>\n        </div>\n        <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>\n        </div>\n        <div class="calendar-body"></div></div>'},plotDayNames:function(){for(let e=0;e<t.calWeekDays.length;e++)document.querySelector(".calendar .calendar-body").innerHTML+=`<div>${t.calWeekDays[e]}</div>`},plotDates:function(){document.querySelector(".calendar .calendar-body").innerHTML="",t.plotDayNames(),t.displayMonth(),t.displayYear();let a=1,n=0;t.prevMonthLastDate=t.getPreviousMonthLastDate();let l=[],o=t.daysInMonth(e.getMonth()+1,e.getFullYear()),r=t.firstDayNumber();e.getFullYear()==t.localDate.getFullYear()&&e.getMonth()==t.localDate.getMonth()&&(r+=t.localDate.getDay()+1);for(let e=1;e<o;e++)e<t.firstDayNumber()?(n+=1,document.querySelector(".calendar .calendar-body").innerHTML+='<div class="prev-dates"></div>',l.push(t.prevMonthLastDate--)):r!==t.firstDayNumber()&&e<r?document.querySelector(".calendar .calendar-body").innerHTML+=`<div class="prev-dates">${a++}</div>`:document.querySelector(".calendar .calendar-body").innerHTML+=`<div class="number-item" data-num=${a}><a class="dateNumber" href="#">${a++}</a></div>`;for(let e=0;e<n+1;e++)document.querySelector(".calendar .calendar-body").innerHTML+=`<div class="number-item" data-num=${a}><a class="dateNumber" href="#">${a++}</a></div>`;t.highlightToday(),t.plotPrevMonthDates(l),t.plotNextMonthDates()},attachEvents:function(){let e=document.querySelector(".calendar .calendar-prev a"),a=document.querySelector(".calendar .calendar-next a"),n=document.querySelectorAll(".calendar .dateNumber");e.addEventListener("click",t.navigateToPreviousMonth),a.addEventListener("click",t.navigateToNextMonth);for(var l=0;l<n.length;l++)n[l].addEventListener("click",t.selectDate,!1)},highlightToday:function(){let a=t.localDate.getMonth()+1,n=e.getMonth()+1;t.localDate.getFullYear()===e.getFullYear()&&a===n&&document.querySelectorAll(".number-item")&&document.querySelectorAll(".number-item")[0].classList.add("calendar-today")},plotPrevMonthDates:function(e){e.reverse();for(let t=0;t<e.length;t++)document.querySelectorAll(".prev-dates")&&(document.querySelectorAll(".prev-dates")[t].textContent=e[t])},plotNextMonthDates:function(){let e=document.querySelector(".calendar-body").childElementCount;if(e>42){let a=49-e;t.loopThroughNextDays(a)}e>35&&e<=42&&t.loopThroughNextDays(42-e)},loopThroughNextDays:function(e){if(e>0)for(let t=1;t<=e;t++)document.querySelector(".calendar-body").innerHTML+=`<div class="next-dates">${t}</div>`},attachEventsOnNextPrev:function(){t.plotDates(),t.attachEvents()},init:function(){t.plotSelectors(),t.plotDates(),t.attachEvents(),t.disableIfThisMonth()}};t.init()}let t;function a(e){const t=document.querySelector(".modal");e.target.disabled=!0,setTimeout((()=>{e.target.disabled=!1}),2400),t.classList.add("modal-on");const a=()=>{t.classList.remove("modal-on"),t.classList.remove("modal-timer")};setTimeout((()=>{t.classList.add("modal-timer"),setTimeout(a,2e3)}),200)}document.querySelector("calendar-button");const n=(e,t,a)=>{const n=document.createElement(e);return t&&n.classList.add(t),n.innerHTML=a,n},l=((()=>{const a=document.querySelector("#content");(()=>{const e=[n("h4","","home"),n("h4","","menu"),n("h4","","book")],t=n("div","","");e.forEach((e=>t.appendChild(e)));const l=n("div","moon",""),o=n("div","","");o.appendChild(l),o.appendChild(t);const r=n("div","nav","");r.appendChild(o),a.appendChild(r)})(),(()=>{const e=n("h1","",""),t=n("span","logo","Butter<br>PamPam");e.appendChild(t);const l=n("div","home","");l.appendChild(e),a.appendChild(l)})(),(()=>{const e=n("div","menu-board",""),t=n("div","menu-content",""),l=[["COFFEE","","","","HOT","COLD","에스프레소","2.5","2.5","아메리카노","3.0","3.0","카페 라떼","4.0","4.5","바닐라 라떼","4.5","5.0","카푸치노","4.5","5.0","카페모카","5.0","5.5"],["BEVERAGES","","","","HOT","COLD","허니밀크","3.5","4.0","초코 라떼","4.5","5.0","그린티 라떼","4.5","5.0","로얄 밀크티","5.0","5.5","아이스티","","3.5"],["FRUIT TEA","","","","HOT","COLD","자몽티","3.5","4.0","레몬티","3.5","4.0","생강티","3.5","4.0","유자티","3.5","4.0"]];for(let e=0;e<3;e++){const a=n("div","","");for(let t=0;t<l[e].length;t++)a.appendChild(n("p","",l[e][t]));t.appendChild(a)}e.appendChild(t);for(let t=0;t<=3;t++)e.appendChild(n("div","",""));const o=n("div","menu","");o.appendChild(e),a.appendChild(o)})(),(()=>{const l=n("div","calendar",""),o=n("button","calendar-button","reserve"),r=n("div","modal","reserved!"),d=n("div","","");d.appendChild(l),d.appendChild(o),d.appendChild(r);const c=n("div","book","");c.appendChild(d),a.appendChild(c),t=new e})()})(),e=>{const t=[document.querySelector(".home"),document.querySelector(".menu"),document.querySelector(".book")],a=document.querySelector("body");switch(e.target.innerHTML){case"home":a.classList.remove("shade"),t[0].style.left="0",t[1].style.left="100vw",t[2].style.left="200vw";break;case"menu":a.classList.add("shade"),t[0].style.left="-100vw",t[1].style.left="0",t[2].style.left="100vw";break;case"book":a.classList.add("shade"),t[0].style.left="-200vw",t[1].style.left="-100vw",t[2].style.left="0"}});[...document.querySelectorAll(".nav h4")].forEach((e=>e.addEventListener("click",l)))})();