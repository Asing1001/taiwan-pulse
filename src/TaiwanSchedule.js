import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TaiwanTimeline from "./TaiwanTimeline";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const days = [{
  title:'Nov. 8 (Tue) - DAY1・MEDIA TOUR（Taipei）',
  schedules: [{
    time: '18:00', 
    title: 'Dinner & Local government meeting', 
    location: 'My灶 (Zao)', 
    description: `The Chinese character pronounced "Zao" indicates the stove to cook on, the owner means to say "My Kitchen" when naming the restaurant, fun fact here: it sounds like “don’t go" in Taiwanese dialog, which also says how delicious the dishes here taste. The Michelin recommended diner has a vintage interior design that creates Taiwan's street atmosphere in the 1960s. Under the streetlamp that shines the light from the past, it feels just like the good old days 50 years ago. Chef chooses the best ingredients and seasons lightly, to bring out the earthy taste of the food.`,
    image: ''
  },{
    time: '20:00', 
    title: 'Check-in', 
    location: 'Taipei Humble Boutique Hotel ', 
    description: `The newest business hotel from My Humble House Group. With 111 guest rooms, the building appearance is designed by RDAI, the French firm of architecture (Hermès’ contract architecture team). Each guest room is equipped with both Shower space and bathtub, private gym, swimming pool and sauna inside the hotel. Food and beverage department co-constructed with Michelin starred chef Kin. The hotel combines sustainable concepts and is a golden rated building that complies with the EEWH (Ecology, Energy saving, Waste reduction, Health); bottled water is not provided in guest rooms, instead, each floor provides fresh water from a NATURA water carbonator. Other consumables like toothbrushes, cups and such are made of recyclable material, and soup comes with a zipper bag for you to take home.`,
    image: 'D1寒居酒店2.jpeg'
  },]
},
{
  title:'Nov. 9 (Wed) - DAY2・MEDIA TOUR（Taipei→Kaohsiung）',
  schedules: [{
    time: '07:30', 
    title: 'Meeting up at lobby', 
    location: 'Take HSR to Kaohsiung', 
    description: `Take HSR (08:31AM) to Kaohsiung (10:05AM)`,
    image: 'D1My灶.jpeg'
  },{
    time: '10:40', 
    title: 'Touring & Local government meeting', 
    location: 'Kaohsiung Exhibition Center', 
    description: `Opened in 2014, Kaohsiung Exhibition Center (KEC) is the first multifunctional waterfront. With over 25,000 m2 of indoor and outdoor exhibition space and large variety of conference rooms accommodating between 20 to 2,000 people, with a capacity of up to 4,000 attendees at one time, KEC is the premier multi-purpose venue in Taiwan, ideal for hybrid events. In 2021, KEC was selected as implement venue importing “Cultural Technology: Innovative 5G Vertical Application Project” and has transformed into a 5G high-tech multifunctional venue where can deliver various innovative 5G industrial technology demonstrations, applications, and services. By setting Venue as a Platform, Technologies as Services, and promoting relevant businesses in the exhibition center, KEC aims become a platform featuring innovative 5G AIoT technology applications and business development opportunities.`,
    image: 'D2高雄展覽館.jpg'
  },{
    time: '12:20', 
    title: 'Thomas Chien Restaurant', 
    location: 'Thomas Chien', 
    description: `Michelin Guide recommendation. Not only has Chef Chien got culinary acumen and all the classic French techniques, but he also cares for his carbon footprint and sustainability of food sources. By eating here, you'll be supporting small local farms and fishing communities. His set menus use mostly local, seasonal ingredients and his lunch menus change monthly to keep them fresh. From time to time, top guest chefs are invited from overseas to broaden diners' gastronomic horizons.`,
    image: 'D2Thomas Chien.jpg'
  },{
    time: '13:50', 
    title: 'Touring', 
    location: 'TAI Urban Resort', 
    description: `The newest five-star hotel, opened in 2022, built under cooperation of the Bureau of Cultural Affairs from Kaohsiung City Government and Chanyee Hotelday Co., LTD. World’s only library co-constructed five-star hotel that promotes delicate travel and reading culture. The world’s only high-altitude-transparent-infinity pool on floor 24, the transparent design brings an illusion of the pool floating in the sky above Kaohsiung city, along with the same high-altitude bar: Bar Kao, in which you can enjoy a 360-degree view. There are 208 guest rooms, the hotel also facilitates a bookstore from a Taiwan brand Blue & Book, a gym club, a spa with all kinds of beauty services (cosmetic, manicure, massage and more.) and a Liquor & Cigar bar.`,
    image: 'D2承億-1.jpg'
  },{
    time: '15:30', 
    title: 'Sustainable tour', 
    location: 'Organic Cacao Farm', 
    description: `Cacao is one of the ingredients that has the longest food trace; they have to be nurtured in warm and moist rain-forest weather near the equator, while the main cacao market is mainly in Europe/North America. However, here in Taiwan, we grow our cacao right at where we sell the product, we could even connect the cacao making process unto a Six-grade industry. From estate, cacao daily consumables, to tourism, our low-carb production chain is a miracle in the global cacao industry. An hour drive from the Kaohsiung Exhibition Hall, "Bella Queen Cacao" grows their cacao by natural farming, they utilize cold-pressed extracted cocoa butter and active constituents to develop a series of cosmetic and skincare products.`,
    image: 'D2可可園-1.jpg'
  },{
    time: '18:00', 
    title: 'Dinner', 
    location: 'Kaohsiung Marriott Hotel', 
    description: `Opened in 2021, Kaohsiung Marriott Hotel sits right at Heart of Love River (Ruyi Lake). It is a modern building designed under the theme of a Harbor City, introducing the harbor capital of Taiwan. The hotel building has a total of 31 floors, 700 well-spaced guest rooms, an indoor pool of 25x10 meters, surrounded by 8 spa pools of different sizes and water-temperature. A high-floor wedding ballroom connected to an outdoor space that could contain up to 300 individuals, suitable for MICE (Meetings, Incentives, Conferences, Exhibitions). For transportation, Both Kaohsiung airport and Kaohsiung high-speed rail station (Zuoying Station) are within a 20-minute ride, and the lush Aozihdi Forest Park is just a stroll away.`,
    image: 'D2高雄萬豪1.jpg'
  },
  {
    time: '20:30', 
    title: 'Check-in', 
    location: 'Kaohsiung Marriott Hotel', 
    description: `Kaohsiung is a harbor city, we proudly present our guests fresh sea food straight from the ocean, and the best sea view at the top of the hotel building. After a meal we will arrange a hotel show room visit to see the conference rooms and ballrooms from 8th to 11th floor, total interior space will be over 30 thousand square meters, over which the highlight will be the major ballroom on the 8th floor: spaced 2800 square meters, 11 meters to the ceiling, 220 big tables capacity, with a giant LED monitor in the middle of the ballroom (28x6 meters) equipped also with the best surrounding sound system, easily digest any huge business event or wedding party. Two floating halls and an outdoor marriage notary space.`,
    image: 'D2高雄萬豪2.jpg'
  },]
},{
  title:'Nov. 10 (Thu) - DAY3・MEDIA TOUR（Kaohsiung→Tainan）',
  schedules: [{
    time: '09:30', 
    title: 'Meeting-up', 
    location: 'Bus transport', 
    description: `Bus transport`,
    image: ''
  },{
    time: '10:00', 
    title: 'Touring & Local government meeting', 
    location: 'Tainan Convention & Exhibition Center ', 
    description: `Located in Tainan City's High Speed Rail Industrial Zone, it accommodates 600 standard-sized booths and offers 11 conference rooms of various sizes. The Center officially opens in the first half of 2022.`,
    image: 'D3tainanConvention.jpg'
  },{
    time: '11:45', 
    title: 'Lunch', 
    location: 'Just Café', 
    description: `The hotel restaurant provides a fresh and multi-choice breakfast menu, light breakfast like bread, salad, fruit, with specially added old city (Fucheng) street food. As for the brand-new lunch and dinner project, the menu is built by a star rated Chef from Silks Place Tainan. Interior is designed in nostalgic old Taiwan Fucheng style: red brick and dark-blue tiles.`,
    image: 'D3十鼓捷食藝2.jpg'
  },{
    time: '13:00', 
    title: 'Just Sleep Tainan Ten-Drum (Sight visit, not accommodation for the day)', 
    location: 'Hotel Show-room', 
    description: `Brand new hotel opened in 2021, the 9th hotel of the “Just sleep” collection in Taiwan under the Silks Hotel Group. Under two years construction and over 25 million US dollar investment. With the name Ten-Drum, which is an art group that speaks Taiwanese culture through drum art. This profoundly humane building blends elements from a modern hotel with local cultural character, it is only a 15-minute ride away from both downtown and the high-speed railway Tainan station. The only hotel in Taiwan built under a vintage sugar factory theme; the 129 units, including 113 guest rooms and 16 suites, are in 8 different room-type for your choice. The hotel is equipped with multi-purpose conference rooms and ballrooms, the multi-purpose ballroom space at the top of the building is highly recommended for business meetings and small banquets.`,
    image: 'D3十鼓捷絲旅2.jpg'
  },{
    time: '14:00', 
    title: 'Team Building', 
    location: 'Traditional Incense Experience', 
    description: `The incense maker in the 100-year-old “Wu Wan-Chun” incense represents Taiwanese philosophy of life. Incense creates humble dialog between the mortals and the gods. In this course, Mr. Wu, the 4th generation, will teach you how to hand make incense by team work.`,
    image: 'D3wuwan.jpeg'
  },{
    time: '18:00', 
    title: 'Dinner', 
    location: 'Silks Place Pavilion', 
    description: `This restaurant in the hotel Silks Place Tainan provides a private suite with 20 individual capacities. Roasted duck 7 ways is their signature dish, alongside Fucheng (old town) A-Sha dish. A-Sha is an old expression that indicates dishes which only rich people can afford due to the precious and expensive ingredients; the restaurant wishes to contribute to a trend of Fucheng cuisine. Related administration invited an old Taiwanese cuisine successor to coach in the kitchen.The team led by executive chef Wei-Chiang Lu strives to recreate the fine Fucheng A-Sha feast, leading the guest back to Taiwanese cuisine's glorious history.`,
    image: 'D3Thomas Chien.jpg'
  },
  {
    time: '20:30', 
    title: 'Check-in', 
    location: 'Silks Place Tainan', 
    description: `Silks Place Tainan owns 1692 units at its guest’s choice. It is a business/resort combined 5-star hotel, with the only conference hall/ballroom in Taiwan that could contain up to a thousand guests. The hotel functions in both resort mode and business mode. Breakfast provided by the hotel kitchen serves Tainan specialties, such as sticky rice topped with minced pork and Danzai noodles, giving business travelers a chance to have a bite of Tainan’s local taste if the time is too short to go out to the streets. The hotel sits at a cultural area of Tainan city, guests could walk to the business circle around Confucian Temple. Shopping mall nearby for guests to visit, along with all other commercial features.`,
    image: 'D3台南晶英2.jpg'
  },]
}]
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          {days.map((_, i)=>(
            <Tab key={i} label={`Day ${i+1}`} {...a11yProps(i)} />
          ))}          
        </Tabs>
      </Box>
      
      {days.map((day, i) => (<TabPanel key={i} value={value} index={i}>
        <TaiwanTimeline {...day}/>
      </TabPanel>))}
    </Box>
  );
}

