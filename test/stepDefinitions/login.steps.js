const { Given,When,Then }= require("@wdio/cucumber-framework")
const loginPage=require("../pages/login.page")
// loginPage=new loginPage();
Given(/^open the ORANGE HRM Portal URL$/,async()=>{
     await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   loginPage.openURL()
    await browser.maximizeWindow();
}
)
Then(/^enter the login details and submit$/,async()=>{
   // let username=await($ ("//input[@name='username']"))
   // await username.setValue('Admin')
   // let password=await $("//input[@name='password']")
   // await password.setValue('admin123')
   // let button=await await $("//button[contains(@class,'login')]")
   // await button.click()
   await loginPage.userName.setValue('Admin')
   await loginPage.Password.setValue('admin123')
   await loginPage.ClickButton.click()
   
})