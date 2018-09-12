# Friend-Finder

### Overview:

The objective of this assignment was to build a friend finder web application. To do this, node was used to build a server, as well as, deploy various routes for the server to follow. The home route would lead to the home page, and the api route was linked to hardcoded data and the survey page. In the survey page, the user was input their information, that would be pushed into the hardcoded friends array, and answer ten questions. Depending on how they answered said questions, a friend from the friends array would be presented to the user as their best match, and therefore new best friend.

### Design Notes:

* Friend-Finder had to include two routes:
    *Home route
        *Would lead to the homepage
        *Was also default page
    *Api route
        *Connected to survey page and friends.js
        *Was responsible for friends match logic
        *Had both app.get and app.post elements

### Technologies Used:

* Javascript
* Node
* Express
* Body-Parser
* Server

###Deployed Link
https://github.com/tywi6665/Friend-Finder