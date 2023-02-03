// hide()   display - none
// show()   display - block
// fadeIn() display - block
// fadeOut()    display - none
// slideDown()  display - block
// slideUp()    display - none
// slideToggle()   display == block => display = none 
                // (display == none =>  display = blcok)

// let func = ()=> {
// console.log("hello");
// }

// setTimeout( func , 4000 )

function F(){

    function f1() {
        $('img').css({ "margin-top" : "100px", "transition" : "1s", "margin-left" : "100px"})
    }
    
    f1()
    
    function f2() {
        $('img').css({ "margin-top" : "200px", "transition" : "1s", "margin-left" : "300px"})
    }
    setTimeout(f2 , 700)
    
    function f3() {
        $('img').css({ "margin-top" : "100px", "transition" : "1s", "margin-left" : "500px"})
    }
    setTimeout(f3 , 1400)
    
    function f4() {
        $('img').css({ "margin-top" : "200px", "transition" : "1s", "margin-left" : "700px"})
    }
    
    setTimeout(f4 , 2100)
    
    function f5() {
        $('img').css({ "margin-top" : "100px", "transition" : "1s", "margin-left" : "900px"})
    }
    
    setTimeout(f5 , 2800)
    
    function f6() {
        $('img').css({ "margin-top" : "200px", "transition" : "1s", "margin-left" : "1100px"})
    }
    
    setTimeout(f6 , 3600)
    
    function f7() {
        $('img').css({ "margin-top" : "100px", "transition" : "1s", "margin-left" : "1300px"})
    }
    
    setTimeout(f7 , 4400)
    
    function f8() {
        $('img').css({ "margin-top" : "200px", "transition" : "1s", "margin-left" : "1535px"})
    }
    
    setTimeout(f8 , 5200)
}

F()

setInterval(F , 5000)