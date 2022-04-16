 function setDarkMode(isDark) {
        var darkBtn = document.getElementById('darkBtn')
        var lightBtn = document.getElementById('lightBtn')

        if(isDark) {
            lightBtn.style.display = "flex"
            darkBtn.style.display = "none"
        } else {
            lightBtn.style.display = "none"
            darkBtn.style.display = "flex"
        }

        document.body.classList.toggle("darkmode");
    }

//check localstorage
if(localStorage.getItem('preferredTheme') == 'dark') {
    setDarkMode(true)
}

function setDarkMode(isDark) {
    var darkBtn = document.getElementById('darkBtn')
    var lightBtn = document.getElementById('lightBtn')

    if(isDark) {
        lightBtn.style.display = "flex"
        darkBtn.style.display = "none" 
    //tambahan localstorage
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "flex"
     //tambahan localstorage
        localStorage.removeItem('preferredTheme');
    }

    document.body.classList.toggle("darkmode");
}
