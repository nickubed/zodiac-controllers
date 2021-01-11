const express = require('express')
const app = express()
const layouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(layouts)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/air', (req, res) => {
    let airSigns = ['aquarius', 'gemini', 'libra']
    let airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('elementDisplay', {
        signs: airSigns,
        traits: airTraits
    })
})

app.get('/earth', (req, res) => {
    let earthSigns = ['taurus', 'virgo', 'capricorn', 'myDog']
    let earthTraits = ['grounded', 'helpful', 'practical', 'realistic']
    res.render('elementDisplay', {
        signs: earthSigns,
        traits: earthTraits
    })
})

app.get('/fire', (req, res) => {
    let fireSigns = ['aries', 'leo', 'sagittarius']
    let fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('elementDisplay', {
        signs: fireSigns,
        traits: fireTraits
    })
})

app.get('/water', (req, res) => {
    let waterSigns = ['pisces', 'leo', 'sagittarius']
    let waterTraits = [
        'private',
        'mysterious',
        'psychic',
        'charming',
        'emotional',
        'sensitive'
    ]
    res.render('elementDisplay', {
        signs: waterSigns,
        traits: waterTraits
    })
})


app.listen(3000, () => {
    console.log('Working! 3000')
})