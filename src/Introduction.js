import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const introductions = [
  { image: '/intro/WorldTrade.jpg', title: 'Taipei Word Trade Center Hall 1', content: `The TWTC was started in January, 1986 by Taiwan's foremost trade promotion organization, the Taiwan External Trade Development Council (TAITRA), to provide a single, modern venue that would combine exhibition space, conference facilities, offices, and hotel accommodation for international business. TWTC combines every possible service that brings together a vast consulting service on trade-related issues, trading partners, suppliers, and markets.` },
  { image: '/intro/TPEInternational.jpg', title: 'Taipei International Convention Center', content: `The Taipei International Convention Center (TICC) is Taiwan's premier venue for conferences and events. Each year an average of 800 conferences, meetings, and events, held by organizations that made the TICC their venue of choice, attracted more than 500,000 visitors worldwide.` },
  { image: '/intro/Nangang.jpg', title: 'Taipei Nangang Exhibition Center , Hall 1', content: `Taipei Nangang Exhibition Center, Hall 1 is a superimposed purpose-built exhibition complex in Nangang, Taipei, which consists of two exhibition halls one over the other. It is located to the east of the Taipei World Trade Center (TWTC), about 15 minutes' drive from the TWTC along the Huangdong Expressway. This complex, Taiwan's largest trade-show venue has the capacity to host 2,467 standard-size (3x3 meters) booths and occupies an exhibition space of 45,360 square meters. ` },
  { image: '/intro/Nangang International Exhibition Center, Hall2.jpg', title: 'Nangang International Exhibition Center, Hall2', content: `Taipei Nangang Exhibition Center, Hall 2 (TaiNEX 2), a new venue funded by the Ministry of Economic Affairs (MOEA) and operated by Taiwan External Trade Development Council (TAITRA). It offers 156,700 sqm floor space to accommodate 32,000 visitors for exhibitions, conferences, business meetings and events. Combined with the spaces already available in Taipei Nangang Exhibition Center, Hall 1, the total capacity holds more than 5,000 booths and 38 meeting rooms. These two exhibition centers are expected to become the core venues of Taiwan's MICE industry, as well as one of the major convention and exhibition centers in Asia.` },
  { image: '/intro/tainan.jpg', title: 'Tainan Convention & Exhibition Center', content: `ICC Tainan is located at the mid-point of business commuting from the north to the south of Taiwan and near the MITSUI OUTLET PARK of the HSR Tainan Station, meeting the needs of the exhibition, conference, and business travel destinations. Occupying 5.2 hectares of land, the 10,692-square-meter booth area on the first floor can accommodate 600 standard booths and up to 5,000 people in a column-free indoor exhibition space, including one conference room for 800 people, one conference room for 1,000 people, five conference rooms for 100 people, and three conference rooms for 20 people. It is perfect for holding various exhibitions, concerts, award ceremonies, year-end parties, results presentations, and other large-scale events.` },
  { image: '/intro/KaohsiungExhibition.jpg', title: 'Kaohsiung Exhibition Center', content: `Opened in 2014, Kaohsiung Exhibition Center (KEC) is the first multifunctional waterfront. With over 25,000 m2 of indoor and outdoor exhibition space and large variety of conference rooms accommodating between 20 to 2,000 people, with a capacity of up to 4,000 attendees at one time, KEC is the premier multi-purpose venue in Taiwan, ideal for hybrid events. In 2021, KEC was selected as implement venue importing “Cultural Technology: Innovative 5G Vertical Application Project” and has transformed into a 5G high-tech multifunctional venue where can deliver various innovative 5G industrial technology demonstrations, applications, and services. By setting Venue as a Platform, Technologies as Services, and promoting relevant businesses in the exhibition center, KEC aims become a platform featuring innovative 5G AIoT technology applications and business development opportunities.` },
  { image: '/intro/kaohsiungConvention.jpg', title: 'International Convention Center Kaohsiung', content: `The international Convention Center Kaohsiung(ICC Kaohsiung) is conveniently located in downtown Kaohsiung, a city distinguished for its passion and hospitality, and has easy access to four main transportation systems: airport, highway, mass rapid transit, and high-speed rail. It can host meetings for between 20-1500 people and accommodate 380 exhibitions booths.` },
]

export default function Introduction() {
  return (<div>{introductions.map((intro) => (<BasicCard key={intro.title} {...intro} />))}</div>)
}

export function BasicCard({ title, content, image }) {
  return (
    <Card sx={{ minWidth: 275, my: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      {image && <CardMedia
        component="img"
        image={image}
        alt="Live from space album cover"
      />}
    </Card>
  );
}