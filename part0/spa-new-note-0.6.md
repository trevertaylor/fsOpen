sequenceNewNote
    Participants: 
        browser
        server
    
    browser->server: GET https://fullstackexampleapp.herokuapp.com/spa
    server->browser: 201 Status Code Created

    SPA applications don't need to send further http requests and stay on same page