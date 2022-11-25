const puppeteer= require('puppeteer')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://github.com/pittcsc/Summer2023-Internships")
    const data = await page.$$eval('table tr td a', tds => tds.map((td) => {
        return td.href;
      }));
    //   var arr = [];
	// 	for (var i = 0; i < data.length/3; i++) {
    //         if (!data[i*3+2].split(" ").includes("Closed")) {
    //             arr.push({name:data[i*3], location:data[i*3+1], details: data[i*3+2]})
    //         }           
    //     }
    console.log(data);

    await browser.close()
}

start()