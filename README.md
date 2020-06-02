## About Firefly Help

Firefly is an [open source](https://github.com/Caltech-IPAC/firefly/) framework of archive components. 
It provides an interactive web user interface for astronomers. 


#### Prerequisites
 -  [Gradle 4.x] (https://gradle.org/downloads)
    Gradle is an open source build automation system.

 -  [Node v12+] (https://nodejs.org/) 
    Javascript interpreter for command line environment, used for development tools

 -  [HTMLDoc] (https://www.msweet.org/htmldoc/)
    HTML to PDF generator. 
 

## Quick Start

In the project directory, you can run:

### `gradle build`

Builds the help application to the `build` folder.  
The generated static content is in `build/firefly` folder.    
The artifacts is a zip file containing the content of `build/firefly` in the `build/dist` folder. 


### `gradle run`

Builds and launch the help application in the default browser.


## Learn More




### Creating Table of Content

[see](src/toc.js)

### Extending Firefly Help

This section describe how you can fork `Firefly Help` to add custom content

### Deployment

Firefly Help is static HMTL files intended to be served by a web server.  Simply down the extracted zip file into the DocumentRoot.  
