"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
// import { H1 } from "../design-system/formatting";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Body, H1 } from "../../design-system/formatting";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CALENDARDATA = [
  {
    id: "3",
    title: "CTF Showdown",
    start: "2025-06-06",
    description:
      "Test your skills against other cybersecurity enthusiasts in epic 1v1 showdowns at 14:00!",
  },
  {
    id: "4",
    title: "Malware Analysis Workshop",
    start: "2025-06-10",
    description:
      "Get hands on experience in malware analysis and vulnerability exploitation!",
  },
];

type SelectedEvent = {
  title: string;
  date: string;
  description: string;
};

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(
    null
  );

  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      date: new Date(clickInfo.event.start).toLocaleDateString(), // convert date object into string
      description: clickInfo.event.extendedProps.description,
    });
  };

  return (
    <div className="bg-white">
      <Navbar />
      <Body>
        <H1>Upcoming Events</H1>

        <div className="flex flex-col md:flex-row gap-2 p-3 sm:p-15">
          {/* Calendar with all events */}
          <div className="w-full md:w-2/3">
            <style jsx>{`
              :global(.fc-toolbar-title) {
                font-size: 1rem !important;
              }
              :global(.fc-toolbar) {
                flex-wrap: nowrap !important;
                gap: 0.25rem !important;
              }
              :global(.fc-button-group) {
                display: flex !important;
                flex-wrap: nowrap !important;
              }
              @media (max-width: 1100px) {
                :global(.fc-toolbar-title) {
                  font-size: 1rem !important;
                }
                :global(.fc-button) {
                  padding: 0.25rem 0.5rem !important;
                  font-size: 0.8rem !important;
                }
              @media (max-width: 920px) {
                :global(.fc-toolbar-title) {
                  font-size: 0.7rem !important;
                }
                :global(.fc-button) {
                  padding: 0.2rem 0.3rem !important;
                  font-size: 0.7rem !important;
                }
              }
              @media (max-width: 500px) {
                :global(.fc-col-header-cell-cushion) {
                  font-size: 0.6rem !important;}
                }
              }
              @media (max-width: 360px) {
                :global(.fc-col-header-cell-cushion) {
                  font-size: 0.5rem !important;}
                }
              }
            `}</style>
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                listPlugin,
                interactionPlugin,
              ]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev,next,today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,listMonth",
              }}
              events={CALENDARDATA}
              eventClassNames={() => "cursor-pointer"}
              eventClick={handleEventClick}
              height="auto"
              buttonText={{
                today: "Today",
                dayGridMonth: "Month",
                timeGridWeek: "Week",
                listMonth: "🚨 Upcoming",
              }}
            />
          </div>

          {/* Event details on the right side (or on the bottom) */}
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg">
            {selectedEvent ? (
              <div>
                <h2 className="text-xl font-bold text-black">
                  {selectedEvent.title}
                </h2>
                <p className="text-black">{selectedEvent.date}</p>
                <p className="mt-2 text-black">{selectedEvent.description}</p>
              </div>
            ) : (
              <p className="text-gray-500">Click on an event to see details.</p>
            )}
          </div>
        </div>
      </Body>
      <Footer />
    </div>
  );
};

export default Calendar;
