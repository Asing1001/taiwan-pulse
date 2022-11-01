const fs = require('fs')
const { join } = require('path')
const content = fs.readFileSync(join(__dirname, 'trip2.txt'), 'utf-8')
const result = content.split(/\r\nDAY\d・.*\r\n/m).map((day, dayNum) => {
  const [_, ...rest] = day.split(/(\d{2}:\d{2})\r\n/)
  const data = { title: `Day${dayNum+1}`, schedules:[] }
  for (let index = 0; index < rest.length; index += 2) {
    const time = rest[index]
    const [title, location, description, image] = rest[index + 1].split('\r\n')
    data.schedules.push({ time, title, location, description, image })
  }
  return data
})

console.log(JSON.stringify(result, null, 2));