# instaimages
### Clone repository
```
$ git clone https://github.com/alli5723/instaimages.git
$ cd instaimages
```
### Run npm install to download necessary dependencies
```
$ npm install
```
### Run file by hosting on a web server.

## Option 1
E.g. If on mac or linux system with default php installation, you can host using php webserver by running
```
$ php -S localhost:8011 -t ./
```
The file would now be available via http://localhost:8011/

## Option 2
Alternatively, on a system that has node installed, you can follow instructions indicated in this post
https://stackoverflow.com/a/8427954/3396528
```
$ npm install connect serve-static
```
Create server.js file with the following content
```
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
```
And run
```
$ node server.js
```
The file would now be available via http://localhost:8080/
