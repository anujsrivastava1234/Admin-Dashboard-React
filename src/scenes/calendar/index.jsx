import React from 'react'
import { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography, colors, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvent, setCurrentEvent] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt('Please enter the title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }

        const handleEventClick = (selected) => {
            if (window.confirm(`Are you sure  you want to delete this event '${selected.event.title}'`)) {
                selected.event.remove();
            }
        }
    }

    return (
        <Box m='20px'>
            <Header title='CALENDAR' subTitle='Full Calendar Internactive Page' />
            <Box display='flex' justifyContent='space-between'>
                {/* Calendar Side Bar */}
                <Box flex='1 1 20%' backgroundColor={colors.primary[400]} p='15px' borderRadius='4px'>

                </Box>
            </Box>
        </Box>
    )

}



export default Calendar
