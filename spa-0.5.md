sequenceSPA
    Participants: 
        browser
        server
    
    browser->server: GET https://fullstackexampleapp.herokuapp.com/spa
    server->browser: 200 Status Code OK

    browser->server: GET https://fullstackexampleapp.herokuapp.com/style.css
    server->browser: 200 Status Code OK

    browser->server: GET https://fullstackexampleapp.herokuapp.com/spa.js
    server->browser: 200 Status Code OK

    Note: browser executes JS that requests JSON from server
    browser->server: GET https://fullstackexampleapp.herokuapp.com/data.json
    server->browser: [{ data }]

    Note: browser executes event handler to display JSON