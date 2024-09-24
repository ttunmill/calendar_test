document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Tool Bar 목록 document : https://fullcalendar.io/docs/toolbar
        headerToolbar: {
            // left: 'prevYear,prev,next,nextYear today',
            // center: 'title',
            // right: 'dayGridMonth,dayGridWeek,dayGridDay'
            left: 'title',
            right: 'prev,next',
        },
        locale: "ko",
        selectable: true,
        selectMirror: true,
        navLinks: true, // can click day/week names to navigate views
        // editable: true,
        businessHours: true, // display business hours
        selectable: true,
        
        select: function(arg) {
            var title = prompt('일정 추가');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: arg.start,
                    end: arg.end,
                    allDay: arg.allDay
                })
            }
            calendar.unselect()
        },
        eventClick: function(arg) {
            /* if (confirm('Are you sure you want to delete this event?')) {
                arg.event.remove()
            } */
        },
        datesSet: function(info) {
            const currentMonth = new Date().getMonth();
            const viewMonth = info.start.getMonth();

            const nextBtn = document.querySelector(".fc-next-button");
            const prevBtn = document.querySelector(".fc-prev-button");

            if (viewMonth > currentMonth) {
                nextBtn.disabled = true;
            } else {
                nextBtn.disabled = false;
            }

            if(viewMonth < currentMonth) {
                prevBtn.disabled = true;
            } else {
                prevBtn.disabled = false;
            }
        },
        
        dayMaxEvents: true, // allow "more" link when too many events
        // 이벤트 객체 필드 document : https://fullcalendar.io/docs/event-object
        events: [
            {
            title: 'All Day Event',
            start: '2024-09-01'
            },
            {
            title: 'Long Event',
            start: '2024-09-07',
            end: '2024-09-10'
            },
            {
            groupId: 999,
            title: 'Repeating Event',
            start: '2024-09-09T16:00:00'
            },
            {
            groupId: 999,
            title: 'Repeating Event',
            start: '2024-09-16T16:00:00'
            },
            {
            title: 'Conference',
            start: '2024-09-11',
            end: '2024-09-13'
            },
            {
            title: 'Meeting',
            start: '2024-09-12T10:30:00',
            end: '2024-09-12T12:30:00'
            },
            {
            title: 'Lunch',
            start: '2024-09-12T12:00:00'
            },
            {
            title: 'Meeting',
            start: '2024-09-12T14:30:00'
            },
            {
            title: 'Happy Hour',
            start: '2024-09-12T17:30:00'
            },
            {
            title: 'Dinner',
            start: '2024-09-12T20:00:00'
            },
            {
            title: 'Birthday Party',
            start: '2024-09-13T07:00:00'
            },
            {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2024-09-28'
            }
        ],

        // tooltip 이벤트
        /* eventDidMount: function(info) {
            tippy(info.el, {
                content: info.event._def.title,
                placement: "bottom",
                offset: [0, 0],
                interactive: true,
            })
        } */
        eventDidMount: function(info) {
            tippy(info.el, {
                // content: '<strong>' + info.event.title + '</strong><p><span><i class="fa-regular fa-clock-three"></i> 일정</span>' + startDate + endDate + '<br />'+timeDate+'</p>' + descriptionList,
                content: '<strong>' + info.event.title + '</strong>',
                placement : 'bottom',
                theme: 'light',
                arrow: true,
                trigger: 'click',
                allowHTML: true,
                animation: 'fade',
                interactive: true,
                // hideOnClick: false,
            });
        },
    });
    calendar.render();
});

