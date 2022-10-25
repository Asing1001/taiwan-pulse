import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const introductions = [
  { title: 'Taipei Word Trade Center Hall 1', content: `The TWTC was started in January, 1986 by Taiwan's foremost trade promotion organization, the Taiwan External Trade Development Council (TAITRA), to provide a single, modern venue that would combine exhibition space, conference facilities, offices, and hotel accommodation for international business. TWTC combines every possible service that brings together a vast consulting service on trade-related issues, trading partners, suppliers, and markets.` },
  { title: 'Taipei International Convention Center', content: `The Taipei International Convention Center (TICC) is Taiwan's premier venue for conferences and events. Each year an average of 800 conferences, meetings, and events, held by organizations that made the TICC their venue of choice, attracted more than 500,000 visitors worldwide.` }]

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Introduction() {
  return (<>{introductions.map((intro) => (<BasicCard key={intro.title} {...intro} />))}</>)
}

export function BasicCard({ title, content }) {
  return (
    <Card sx={{ minWidth: 275, my: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          {title}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body1">
          {content}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}