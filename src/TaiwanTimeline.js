import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

export default function OppositeContentTimeline({ title, schedules }) {
  return (
    <React.Fragment>
      <Timeline
        sx={{
          paddingRight: 0,
          paddingLeft: 1,
          mt: 1,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {schedules.map(({ title, time, location, image, description }, i) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <TimelineDot />
              {i !== schedules.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ px: 2 }}>
              <Accordion>
                <AccordionSummary                
                  expandIcon={ <ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box sx={{flexWrap: 'wrap', display:'flex'}}>
                    <Box sx={{ display:'flex'}}>
                    <Typography sx={{ flexShrink: 0 }}>
                      {time}
                    </Typography>
                    <Typography sx={{ ml: 2 }}>{location}</Typography>
                    </Box>
                    <div style={{width:'100%'}}></div>
                    <Typography sx={{ color: 'text.secondary'}}>{title}</Typography>
                  </Box>
                </AccordionSummary>
                {description &&<AccordionDetails>
                  {image && <CardMedia
                    component="img"
                    image={`/trip/${image}`}
                    alt="Live from space album cover"
                  />}
                  <Typography>{description}</Typography>
                </AccordionDetails>}
              </Accordion>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
}
