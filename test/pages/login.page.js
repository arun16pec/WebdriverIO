module.exports=new class loginPage {
      get userName(){
        return ($ ("//input[@name='username']"))
    }
     get Password(){
        return  ($("//input[@name='password']"))
    }
     get ClickButton(){
        return  ($("//button[contains(@class,'login')]"))
    }
   openURL(){
    browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  }
   
}  