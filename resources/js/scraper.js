
const cheerio = require('cheerio');

const fetch = require("node-fetch");

const proxyurl = "https://cors-anywhere.herokuapp.com/";

async function getLink(url_page) {
    var links = []
    var _url = proxyurl+url_page
    const response = await fetch(_url);
    const body = await response.text();
    const $ = cheerio.load(body);
    jQuery(".content-iframe").empty()
    $('.tab-video-item li').each(function() {
        var src = $(this).data('server');
        console.log("url encontrada => ", src)
        links.push({ url: src })

        jQuery(".content-iframe").append(`<iframe style="margin-right: 50px;"  title="Inline Frame Example"  width="300" height="200" src="${src}"> </iframe>`)

    });

    jQuery(".spinner-border").hide()  
    jQuery(".sr-only").show()  
}

$(document).ready(function() {
    jQuery("#button-scraper").on("click", function() {  
        jQuery(".spinner-border").show()  
        jQuery(".sr-only").hide()  
        var link = jQuery("#search").val()
        getLink(link)
    })
})



