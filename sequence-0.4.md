sequenceDiagram
    Participants:
        browser
        server
    
    browser->server: POST https://fullstackexampleapp.herokuapp.com/new_note
    server->browser: 302 status code

    browser->server: GET https://fullstackexampleapp.herokuapp.com/notes
    server->browser: 200 Status Code OK
    
    browser->server: GET https://fullstackexampleapp.herokuapp.com/style.css
    server->browser: 200 Status Code OK

    browser->server: GET https://fullstackexampleapp.herokuapp.com/index.js
    server->browser: 200 Status Code OK

    Note: browser executes JS that requests JSON from server
    browser->server: GET https://fullstackexampleapp.herokuapp.com/data.json
    server->browser: [{ data }]

    Note: browser executes event handler to display JSON
