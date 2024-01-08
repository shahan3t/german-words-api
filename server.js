const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000
app.use(cors())


const germanVerbs = require('./top_100_verbs.json');
const germanNouns = require('./top_100_nouns.json');
const germanAdj = require('./top_100_adjectives.json');
const unknown = {
    "Translation": "unknown",
    "Example": "unknown",
    "Example translation": "unknown"
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:word', (req, res)=>{
    const germanWord = req.params.word.toLowerCase().trim()
    console.log(germanWord)
    if(germanVerbs[germanWord]){
        res.json(germanVerbs[germanWord])
    } else if(germanNouns[germanWord]){
        res.json(germanNouns[germanWord])
    } else if(germanAdj[germanWord]){
        res.json(germanAdj[germanWord])
    } else {
        res.json(unknown)
    } 
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta go catch it`)
})
//----------------