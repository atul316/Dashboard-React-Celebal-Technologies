// src/components/Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Navbar from './Header';

function Calendar() {
  return (
    <div className="flex">
            <div className="flex-1 p-4">
        {/* <Navbar /> */}
        <h1 className="text-2xl font-bold mb-4">Calendar</h1>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[]}
        />
      </div>
    </div>
  );
}

export default Calendar;
