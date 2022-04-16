 function setDarkMode(isDark) {
        var darkBtn = document.getElementById(&#39;darkBtn&#39;)
        var lightBtn = document.getElementById(&#39;lightBtn&#39;)

        if(isDark) {
            lightBtn.style.display = &quot;flex&quot;
            darkBtn.style.display = &quot;none&quot;
        } else {
            lightBtn.style.display = &quot;none&quot;
            darkBtn.style.display = &quot;flex&quot;
        }

        document.body.classList.toggle(&quot;darkmode&quot;);
    }

//check localstorage
if(localStorage.getItem(&#39;preferredTheme&#39;) == &#39;dark&#39;) {
    setDarkMode(true)
}

function setDarkMode(isDark) {
    var darkBtn = document.getElementById(&#39;darkBtn&#39;)
    var lightBtn = document.getElementById(&#39;lightBtn&#39;)

    if(isDark) {
        lightBtn.style.display = &quot;flex&quot;
        darkBtn.style.display = &quot;none&quot; 
    //tambahan localstorage
        localStorage.setItem(&#39;preferredTheme&#39;, &#39;dark&#39;);
    } else {
        lightBtn.style.display = &quot;none&quot;
        darkBtn.style.display = &quot;flex&quot;
     //tambahan localstorage
        localStorage.removeItem(&#39;preferredTheme&#39;);
    }

    document.body.classList.toggle(&quot;darkmode&quot;);
}
