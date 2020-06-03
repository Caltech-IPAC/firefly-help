## About Firefly Help

Firefly Help is an open source development framework for creating help content.  It's used by [Firefly](https://github.com/Caltech-IPAC/firefly-help/)
and other Firefly-based applications.


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

### File Structure

    app/
       public/
         index.html
       src/
         toc/
           toc_creator.js        
    html/
      firefly/
        images/


`app` directory contains source code needed to create the Help application.  
`index.html` is the default page hosting this application.  Modify this customize the page.
`toc` stands for table of contents.  `toc_creator.js` is where you define your table of content.

`html` directory contains help content.  It is further divided into subdirectory to allow multiple Help applications.
It is recommended to separate images into an `images` subdirectory


### Creating Table of Content

[see](app/src/toc/toc_creator.js)

### Extending Firefly Help

This section describe how you can fork `Firefly Help` to add custom content

### Deployment

Firefly Help is static HMTL files intended to be served by a web server.  Simply down the extracted zip file into the DocumentRoot.  
