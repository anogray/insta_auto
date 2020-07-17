require("fs")
require("chromedriver");
let {email,password}= require("../credentials.json");
let userpost = "virat.kohli";
let swd = require("selenium-webdriver");
const { rejects } = require("assert");
let browser = new swd.Builder();

let driver = browser.forBrowser("chrome").build();

let searchBoxG;

let driverPromise = driver.get("https://www.instagram.com/");
driverPromise
    .then(function () {
        // implicit timeout 
        let findTimeOutP = driver.manage().setTimeouts({
            implicit: 10000
        });
        return findTimeOutP;
    })
    .then(function (){
        let inputBoxPromise1 = driver.findElements(swd.By.css("input[aria-label]"));
        //let sendBox = inputBoxPromise1
        //return inputBoxPromise
        return inputBoxPromise1;        
    })
    .then(function(name_password){
        
        //let mailbox = name_password[0];
        //let passbox = name_password[1];
        let inputBoxWillBeFilledP = name_password[0].sendKeys(email);
        let passwordWillBeFilledP = name_password[1].sendKeys(password);
        return Promise.all([inputBoxWillBeFilledP, passwordWillBeFilledP]);
    })
    .then(function(){
        let LogInP = driver.findElement(swd.By.css("button.sqdOP.L3NKy.y3zKF"));
        return LogInP;
    })
    .then(function (LogInClick){
        let LogInClickP = LogInClick.click();
        return LogInClickP;
    })
    .then(function(){
        let searchbox =  driver.findElement(swd.By.css(".XTCLo.x3qfX"));
        searchBoxG = searchbox;
        return searchbox;
    })
    .then(function (searchboxe){
        let searchboxP = searchboxe.sendKeys(userpost);
        //searchboxP.sendKeys(swd.Key.ENTER);
        //searchboxP.sendKeys(swd.Key.ENTER);
        searchBoxG = searchboxP;
        return searchboxP

    })
    .then(function(){
        let userF = driver.findElements(swd.By.css(".yCE8d"));
        //sendKeys(swd.Key.ENTER);
        return userF
    })
    .then(function(userClick){
        let userClickP = userClick[0].click();
        return userClickP;

    })
    .then(function (){
        //let row_col = driver.findElements(swd.By.css(".v1Nh3.kIKUG._bz0w"));
        let sendlike = driver.findElements(swd.By.css(".v1Nh3.kIKUG._bz0w"));
        
       return sendlike
    })
    .then(function(gotlike){
        let likeP = gotlike[0].click();
        //setTimeout(function(){console.log("waiting 3sec ")  }, 3000);
    })
    .then(function(){
        let findTimeOutP = driver.manage().setTimeouts({
            implicit: 5000
        });
        return findTimeOutP;
    }).then(function(){
        //setTimeout(function(){console.log("2nd waiting 3sec ")  }, 3000);
        let clkLike = driver.findElement(swd.By.css("span.fr66n"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n

        //let clkLike = driver.findElement(swd.By.css("div.Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n
        return clkLike
    })
    .then(function(clkLiked){
        console.log("Inside 1st click issue ")
        let clkLikeBtn = clkLiked.click();
        for(let i=0;i<2;i++)
        {
         likepost();
        }
        return clkLikeBtn;
    })
/*     .then(function(){
        //setTimeout(function(){console.log("2nd waiting 3sec ")  }, 3000);
        let clkLike = driver.findElement(swd.By.css("._65Bje.coreSpriteRightPaginationArrow"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n

        //let clkLike = driver.findElement(swd.By.css("div.Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n
        return clkLike
    })
    .then(function(clkLiked){
        console.log("Inside next like ")
        let clkLikeBtn = clkLiked.click();
        return clkLikeBtn;
    })
    .then(function(){
        //setTimeout(function(){console.log("2nd waiting 3sec ")  }, 3000);
        let clkLike = driver.findElement(swd.By.css("span.fr66n"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n

        //let clkLike = driver.findElement(swd.By.css("div.Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n
        return clkLike
    })
    .then(function(clkLiked){
        console.log("Inside next second like ")
        let clkLikeBtn = clkLiked.click();
        return clkLikeBtn;
    }) */
    
    .catch(function(err){
        console.log("Here errrors ")
        console.log(err);
        return clkLikeBtn;
        })

  
            
function likepost(){
    return new Promise(function (resolve, reject) {

        let fxnNextPage = driver.findElement(swd.By.css("._65Bje.coreSpriteRightPaginationArrow"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n
        fxnNextPage.then(function(){
            let nextPage = fxnNextPage.click();//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n
    
            return nextPage
        })
        .then(function(){
            let clkLike = driver.findElement(swd.By.css("span.fr66n"));//button.wpO6b svg._8-yf5 //button.wpO6b // svg[aria-label=Like]//.span.fr66n button.wpO6b //.span.FY9nT.fr66n
    
            return clkLike
        })
        .then(function(clkLiked){
            console.log("Inside FXn  second like ")
            let clkLikeBtn = clkLiked.click();
           return clkLikeBtn;
        })
        .then(function(){
            console.log("FXN LAst Resolved ")
            resolve();
        })
        .catch(function(err){
            
            console.log(err);
            reject();
        })

    })
}

