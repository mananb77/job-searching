const express = require('express');
// const axios = require("axios");
const cors = require('cors');
const puppeteer= require('puppeteer')


const port = 5000;
const app = express();

app.use(express.json());
app.use(cors({origin: '*'
}));

/* TODO: Replace this with your own API key */
const API_KEY = "";

// work on API calls
app.get("/info", async function(req, res) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://github.com/pittcsc/Summer2023-Internships")
    const data = await page.$$eval('table tr td', tds => tds.map((td) => {
        return td.innerText;
      }));
    const links= await page.$$eval('table tr td a', tds => tds.map((td) => {
        return td.href;
      }));
      var arr = [];
		for (var i = 0; i < data.length/3; i++) {  
            arr.push({name:data[i*3], location:data[i*3+1], details: data[i*3+2],link:links[i]})          
        }
        var last = arr.filter(obj=> !obj.details.split(" ").includes("Closed"))
    res.json(last)
    console.log(links);
    await browser.close()
});
app.get("/name", async function(req, res) {
  const name = req.query.name
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://github.com/pittcsc/Summer2023-Internships")
  const data = await page.$$eval('table tr td', tds => tds.map((td) => {
      return td.innerText;
    }));
  const links= await page.$$eval('table tr td a', tds => tds.map((td) => {
      return td.href;
    }));
    var arr = [];
  for (var i = 0; i < data.length/3; i++) {  
          arr.push({name:data[i*3], location:data[i*3+1], details: data[i*3+2],link:links[i]})          
      }
      var last = arr.filter(obj=> !obj.details.split(" ").includes("Closed"))
      var lastLast = last.filter(elem => elem.name.toLowerCase().includes(name))
  res.json(lastLast)
  console.log(links);
  await browser.close()
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});

       
      