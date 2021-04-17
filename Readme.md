## Introduction

this repo was made for the sole reason of solving a quick project that was asked for during my first master degree school year.

## How to Start the final exercice

I injected a start script in the package.json file, so in order to start the project you need to

1.  **Run : yarn install**

2.  **In index.js, specify which function you want to execute**

3.  **If needed, specify the id of a note in the noteId variable**

4.  **Run : Node index.js**

## Answering the Questions :

1.  Question 1 : To "Post" data, we first need to prepare the object,

    1.  We will be adding a note, so we will be sending a "post" request to the following endpoint : `localhost:3000/notes`
    2.  Since its a note, the object would be as follow (all attributes are required):

            {
            	"value": "my awesome note",
            	"color": "#111d5e",
            	"createdAt": "Sat Apr 17 2021 10:39:05 GMT+0000 (UTC)",
            	"owner": "6073232d7cde19b9c27093bc"
            }

    3.  we will be sending json data, therefore, the "d" and "H" flag would be mendatory

            -d : to send the specified data (stored the json in a separate file, called it using @)
            -H : to include the headers we would be specifiying (Content-Type: application/json)
            -X : to specify the request method.

        the request using cUrl : `curl -d "@post.json" -H "Content-Type: application/json" -X POST http://localhost:3000/notes 4) store the id that was returned along with the body`

2.  Question 2 : to update a note, we will do the following :

    1.  we will be updating a note, so we will be sending a "put" request to a specific (and exisiting note), therefore, the endpoint would look like this              `localhost:3000/notes/:id`

    2.  The object would be as follow (since the put request overwrite the old data with whatever is in the request body, we should keep all arguments required) 

            {
            	"value": "my awesome updated note",
            	"color": "#111d5e",
            	"createdAt": "Sat Apr 17 2021 10:39:05 GMT+0000 (UTC)",
            	"owner": "6073232d7cde19b9c27093bc"
            }


    3.  we will be sending json data, therefore, the "d" and "H" flag would be mendatory

            -d : to send the specified data (stored the json in a separate file, called it using @)
            -H : to include the headers we would be specifiying (Content-Type: application/json)
            -X : to specify the request method. the request using cUrl (taking the id as UDC0Sal) :
                curl -d "@put.json" -H "Content-Type: application/json" -X PUT http://localhost:3000/notes/UDC0Sal

3.  Question 3 : to only display the request headers, we should use the I flag, therefore, the request would look like :
            `curl -I localhost:3000/notes`
