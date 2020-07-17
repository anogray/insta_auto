require("fs")
require("chromedriver");
let {email,password}= require("../credentials.json");
let userpost = "virat.kohli";
let swd = require("selenium-webdriver");
const { resolve } = require("path");
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
        for(let i = 0; i<= 2;i++)
         {  
             //t++;
             console.log(`number of rows ${i}`);
        //     let b = onecard(totalRows[i])
        //     return totalRows;
         }
        // let RowsArray = Promise.all(totalRows)
        // //let userClickP = totalRows[0].click();
        
        // return RowsArray//Promise.all(totalRows);
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
        console.log("Inside click issue ")
        let clkLikeBtn = clkLiked.click();
        return clkLikeBtn;
    })
    .then(function(){
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
       // return clkLikeBtn;
        resolve();
    })
    // .then(function(RowsArray){

    //     let t =0;
    //      for(let i = 0; i< RowsArray.length;i++)
    //      {  
    //          t++;
    //          console.log(`number of rows ${i}`);
    //     //     let b = onecard(totalRows[i])
    //     //     return totalRows;
    //      }
    //      return t;
        
    // })
    // .then(function (AllRows){
    //     let rows = AllRows[0];
    //     for(let i = 0 ;i<rows.length; i++)
    //     {
    //         console.log(`number of columns in a row ${i}`);
    //     }
    //     return AllRows

    // })
    // // .then(function (){
    //     let url = driver.get(`https://www.instagram.com/${userpost}`);
    //     return url;
    // })
    .catch(function(err){
        console.log("Here errrors ")
        console.log(err);
    })
  
//    function onecard(onecard)
//    {
//     return new Promise(function (resolve, reject) {

//         let onerow = driver.findElements(swd.By.css(".v1Nh3.kIKUG._bz0w"));
//         //onerow[0].then(function(){
//             onerow.then(function(){
//                 let userClickP = onerow[0].click();
//                 console.log("prinintng clicking 1 row 1 col")
//                 resolve()
//                 return userClickP
//             })
            
            
           
        
//     })
//    }