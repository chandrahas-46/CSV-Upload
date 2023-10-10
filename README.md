# CSV-Upload
CSV upload is a Node.js web application, which helps user to upload csv file and view data in table form with searching and sorting functionality.
It is built using HTML, CSS, Javascript, Bootstrap, Node.js, Express.js, and MongoDB for data storage.
### Local Server Url: http://localhost:3000/

## Features
  - Upload any csv file into the system
  - Display a list of all uploaded csv files
  - When the user selects a file, display all the data (with column headers) in a table on the page (frontend)
  - There is a search box which searches on the front end itself and displays the matching rows of the table only
  - (empty search box displays all the data). (you can put a search on any one column)
  - DIFFERENT CSV FILES WITH DIFFERENT COLUMN HEADERS CAN BE UPLOADED, TABLE HEADERS ARE DYNAMIC
  - There is sorting button (ascending and descending) for each column on the front end
  - There is a validation on the front end and server side on being able to upload only csv type of files
  - Pagination of the data displayed in the table to a max of 100 records per page

## Packages dependencies :<br />
  - express<br/>
  - ejs<br/>
  - express-ejs-layouts <br/>
  - dotenv<br/>
  - mongoose<br/>
  - multer <br/>
  - papaparse <br />
