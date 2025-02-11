//The API has issue with their SSL
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const currentDate = new Date();
const unixDateFirstDay = new Date(currentDate.getFullYear(), 0, 1)
const unixDateLastDay = new Date(currentDate.getFullYear(), 11, 31)

const firstDayDate = ("0" + unixDateFirstDay.getDate()).slice(-2)
const firstDayMonth = ("0" + unixDateFirstDay.getMonth() + 1).slice(-2)
const firstDayYear = unixDateFirstDay.getFullYear()

const lastDayDate = ("0" + unixDateLastDay.getDate()).slice(-2)
const lastDayMonth = ("0" + unixDateLastDay.getMonth() + 2).slice(-2)
const lastDayYear = unixDateLastDay.getFullYear()

export default async function handler(req, res) {

    // res.json(`https://api.elvanto.com/v1/calendar/events/getAll.json?start=${firstDayYear}-${firstDayMonth}-${firstDayDate}&end=${lastDayYear}-${lastDayMonth}-${lastDayDate}&calendar=${process.env.ELVANTO_CALENDAR_ID}&fields[0]=locations&fields[1]=assets`)

    if(req.method === 'GET' && req.query['q'] === process.env.EVENT_QUERY_STRING) {
        try {
            let data = await fetch(`https://api.elvanto.com/v1/calendar/events/getAll.json?start=${firstDayYear}-${firstDayMonth}-${firstDayDate}&end=${lastDayYear}-${lastDayMonth}-${lastDayDate}&calendar=${process.env.ELVANTO_CALENDAR_ID}&fields[0]=locations&fields[1]=assets`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + btoa(process.env.ELVANTO_API + ":x")
                },
            })
        
            let posts = await data.json()
        
            res.json(posts)
        } catch (error) {
            res.status(400).json({message: error})
        }
    }
    else {
        res.status(403).json({message: "Access denied."})
    }
}