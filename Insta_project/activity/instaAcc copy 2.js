require("fs")
require("chromedriver");
let {email,password}= require("../credentials.json");
let userpost = "virat.kohli";
let swd = require("selenium-webdriver");
const { rejects } = require("assert");
let browser = new swd.Builder();

let driver = browser.forBrowser("chrome").build();

let postsliked = 0;

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
        //clicking for the post username click from search box
        let userClickP = userClick[0].click();
        return userClickP;

    })
    .then(function (){
        //let row_col = driver.findElements(swd.By.css(".v1Nh3.kIKUG._bz0w"));
        let sendlike = driver.findElements(swd.By.css(".v1Nh3.kIKUG._bz0w"));
        
       return sendlike
    })
    .then(function(gotlike){
        console.log("This is for opening first post")
        let likeP = gotlike[0].click();
        //setTimeout(function(){console.log("waiting 3sec ")  }, 3000);
        return likeP
    })
    .then(function(){
        let findTimeOutP = driver.manage().setTimeouts({
            implicit: 5000
        });
        return findTimeOutP;
    })
    .then(function(){
        let f1Promise = likepost();
        postsliked++;
        console.log(`Calling  post`)
        for (let i = 1; i <= 3; i++) {
            postsliked++;
            // count=count+1
            f1Promise = f1Promise.then(function () {
                return likepost();
            })
        }
        console.log(`Finally Called number of Posts Liked : ${postsliked}  `)
        let lstQuestWillBeSolvedP = f1Promise;
        return lstQuestWillBeSolvedP;
    })
    .catch(function(err){
        console.log("Here errrors ")
        console.log(err);
        return clkLikeBtn;
        })

  
            
function likepost(){
    return new Promise(function (resolve, reject) {
        
        
        let clkLike = driver.findElement(swd.By.css("span.fr66n"));
       
        clkLike.then(function(){
            console.log(`Inside ${postsliked} "likepost()" FUNCTION click issue `)
            //for clikcing like button
            let clkLikeBtn = clkLike.click();
            return clkLikeBtn;
        })

        let fxnNextPage = driver.findElement(swd.By.css("._65Bje.coreSpriteRightPaginationArrow"));
            fxnNextPage.then(function(){
            let nextPage = fxnNextPage.click();
            return nextPage
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

