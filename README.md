## About Firefly Help

Firefly Help is an open source template for creating help content.  It's used by [Firefly](https://github.com/Caltech-IPAC/firefly-help/)
and other Firefly-based applications.


#### Prerequisites
 -  [Gradle 4.x] (https://gradle.org/downloads)
    Gradle is an open source build automation system.

 -  [Node v12+] (https://nodejs.org/) 
    Javascript interpreter for command line environment, used for development tools

 -  [HTMLDoc] (https://www.msweet.org/htmldoc/)
    HTML to PDF generator. 
 

## Quick Start

This template is designed for multiple projects.  However, `firefly-help` has only one project.  
To list the projects, run `gradle projects`.


In the root directory, you can run:

### `gradle build`

Builds the help application(s) to the `build` directory.
The artifact is a zip file in `build/dist` directory.  
Zip files are named in the format `${project}_help.zip`, one for each project.


### `gradle run`

Builds and launch the help application in the default browser.  
If you have multiple projects, prepend `run` with the project's name, like this: `gradle firefly:run`


### `gradle install`

Builds and installs the help application to an existing web server.  This requires setting `install_dir` either via environment or
as a property set on the command line, like this:  `gradle -Pinstall_dir=/var/www/html install`


## Learn More

### File Structure

    app/
       public/
         index.html
       src/
         toc/
           toc_creator.js        
    html/
      ${project}/
        images/


`app` directory contains source code needed to create the Help application.  
`index.html` is the default page hosting this application.
`toc` stands for table of contents.  `toc_creator.js` is where you define your table of content.

`html` directory contains help content.  It is further divided into subdirectory to allow multiple projects.
It is recommended to separate images into an `images` subdirectory


### What's in this template?

- Help content for Firefly UI components and Firefly's API.
- Source code, dependencies, and scripts needed to creates a single page application for viewing help content.
- Generate PDF from the HTML pages.


### Small changes to this template

To make small changes to this template, create a github `fork` of this repository.  
Remember, you are directly editing the template, any update to the `base`(firefly-help) may
require merging on your end when you pull in new updates from `base`.

- Edit `index.html` to decorate the page, like banner.
- Add additional content to `html`
- Update `hmtl/firefly` content as needed.
- Edit `app/src/toc/firefly_toc.js` to add/remove content as needed.


### Creating a new project from this template

To create your own project from this template, create a github `fork` of this repository.

- (optional) Remove `firefly` project

- Add your project to `build.gradle`  

        project(':m_proj') {
            apply from: "${rootDir}/buildScript/help.gincl"
        }

- Add the project to `settings.properties`
    
        include 'm_proj'

- Place your HTML content here: `html/m_proj`

- Create TOC for this project here: `app/src/toc/m_proj_toc.js`    
  To use Firefly's content under `html/firefly`, link the HTML files to your TOC, 
  or use predefined `topics` exported from `app/src/toc/firefly_toc.js` to assemble you own TOC.
  
      import {toc_visualization, toc_tables} from './firefly_toc';
      export const m_proj_toc = [
          {id: 'm_topic', title: 'My Topic', href: 'm_proj/m_topic.html'},
          toc_visualization,
          toc_tables,
      ];

  There are many ways to create a custom TOC from existing topics.    
  See [toc_creator.js](app/src/toc/toc_creator.js) for more details.  
   

- Import the TOC and map it to your project name

      import m_proj from './m_proj_toc';
      export function create(appName) {
          switch (appName) {
              case 'm_proj': 		return {toc:m_proj};
          }
      }

To create multiple projects from this template, repeat the above steps, once for each project.