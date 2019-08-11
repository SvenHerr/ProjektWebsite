
function addCommas(t) 
{ 
    return String(t).replace(/(\d)(?=(\d{3})+$)/g, "$1,") 
} 

function jsonp(t, e) { 
    var r = document.createElement("script"); r.src = t + "?callback=" + (e ? e : "callback"), head.insertBefore(r, head.firstChild) 
} 

function callback(t) { 
    switch (type) { case "watch": "2" === v ? (counter.innerHTML = addCommas(t.data.subscribers_count), counter.setAttribute("aria-label", counter.innerHTML + " watchers" + labelSuffix)) : (counter.innerHTML = addCommas(t.data.stargazers_count), counter.setAttribute("aria-label", counter.innerHTML + " stargazers" + labelSuffix)); break; case "star": counter.innerHTML = addCommas(t.data.stargazers_count), counter.setAttribute("aria-label", counter.innerHTML + " stargazers" + labelSuffix); break; case "fork": counter.innerHTML = addCommas(t.data.network_count), counter.setAttribute("aria-label", counter.innerHTML + " forks" + labelSuffix); break; case "follow": counter.innerHTML = addCommas(t.data.followers), counter.setAttribute("aria-label", counter.innerHTML + " followers" + labelSuffix) 
}

"true" === count && "undefined" !== counter.innerHTML && (counter.style.display = "block") 
} var params = function () { for (var t, e = [], r = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), a = 0; a < r.length; a++)t = r[a].split("="), e.push(t[0]), e[t[0]] = t[1]; return e 
}(), user = params.user, repo = params.repo, type = params.type, count = params.count, size = params.size, v = params.v, head = document.getElementsByTagName("head")[0], button = document.getElementById("gh-btn"), mainButton = document.getElementById("github-btn"), text = document.getElementById("gh-text"), counter = document.getElementById("gh-count"), labelSuffix = " on GitHub"; switch (button.href = "https://github.com/" + user + "/" + repo + "/", type) 
{ 
    case "watch": "2" === v ? (mainButton.className += " github-watchers", text.innerHTML = "Watch", counter.href = "https://github.com/" + user + "/" + repo + "/watchers") : (mainButton.className += " github-stargazers", text.innerHTML = "Star", counter.href = "https://github.com/" + user + "/" + repo + "/stargazers"); break; case "star": mainButton.className += " github-stargazers", text.innerHTML = "Star", counter.href = "https://github.com/" + user + "/" + repo + "/stargazers"; break; case "fork": mainButton.className += " github-forks", text.innerHTML = "Fork", button.href = "https://github.com/" + user + "/" + repo + "/fork", counter.href = "https://github.com/" + user + "/" + repo + "/network"; break; case "follow": mainButton.className += " github-me", text.innerHTML = "Follow @" + user, button.href = "https://github.com/" + user, counter.href = "https://github.com/" + user + "/followers" 
}

button.setAttribute("aria-label", text.innerHTML + labelSuffix), "large" === size && (mainButton.className += " github-btn-large"), jsonp("follow" === type ? "https://api.github.com/users/" + user : "https://api.github.com/repos/" + user + "/" + repo);
