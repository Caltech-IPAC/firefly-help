## About Firefly Help

Firefly Help is an open source template for creating help content.  It's used by [Firefly](https://github.com/Caltech-IPAC/firefly/)
and other Firefly-based applications.

#### What's in this template?

- Reusable help content for Firefly UI components.
- Source code, dependencies, and scripts needed to creates a single page application for viewing the help content.
- Dynamically generate a PDF from the HTML pages used.

#### Dev Dependencies
 -  [Gradle 8.10](https://gradle.org/downloads)
    Gradle is an open source build automation system.

 -  [Node v18](https://nodejs.org/) 
    Javascript interpreter for command line environment, used for development tools

 -  [HTMLDoc](https://www.msweet.org/htmldoc/)
    HTML to PDF generator. 
 
**Note:**  To avoid setting up a local development environment, you can use Docker.  Instructions for 
Docker is here [README-docker.md](./README-docker.md)  


## Quick Start

This template is designed for multiple projects.  However, `firefly-help` has only one project.  
To list the projects, run `gradle projects`.

#### `git clone https://github.com/Caltech-IPAC/firefly-help`

Clone this repository into `firefly-help` directory.  
In the root directory, you can run:

#### `gradle build`

Builds the help application(s) to the `build` directory.
The artifact is a zip file in `build/dist` directory.  
Zip files are named in the format `${project}_help.zip`, one for each project.


#### `gradle run`

Builds and launch the help application in the default browser.  
If you have multiple projects, prepend `run` with the project's name, like this: `gradle firefly:run`


#### `gradle install`

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
        img/


`app` directory contains source code needed to create the Help application.  
`index.html` is the default page hosting this application.
`toc` stands for table of contents.  `toc_creator.js` is where you define your table of content.

`html` directory contains help content.  It is further divided into subdirectory to allow multiple projects.
It is recommended to separate images into an `img` subdirectory


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

- (optional) Remove `firefly` project from `build.gradle`

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
  See below for an example.  
   
- Import the TOC and map it to your project name

      import m_proj from './m_proj_toc';
      export function create(appName) {
          switch (appName) {
              case 'm_proj': 		return {toc:m_proj};
          }
      }

To create multiple projects from this template, repeat the above steps, once for each project.


### Adding Custom Variables

This template can consume variables declared in props as if they were declared locally in your JS files. 
Properties may come from environment, command line, or in your build file, like this:

    ext.appConfig = {
        REACT_APP_my_var = 'Default value for this prop'
        environments {
            dev {
                REACT_APP_my_var = "Value if built with -Penv=dev"
            }
        }
    }

 
Any properties starting with `REACT_APP_` and can be used in your JavaScript code or in `index.html`.  
For example, `REACT_APP_my_var` variable will be exposed in your JS as `process.env.REACT_APP_my_var`.  
To use it in `index.html`, enclose the variable with `%`, like this:
    
    <title>%REACT_APP_my_var%</title>
    

### How to create `Table of Content` 

First, let's define the data structure of TOC:

    /**
     * @typedef [HelpItem] TOC
     */
    
    /**
     * @typedef {object} HelpItem
     * @prop {string}   id      unique ID of the help item
     * @prop {string}   title   title of this item
     * @prop {string}   href    link to html content for this help item
     * @prop {string}   hidden  default true.  When true, entry will not be shown in the navigation tree.
     * @prop {object}   style   additional style to apply to this item
     * @prop [HelpItem] items   array of help items.  This is used to build the table of contents
     */

`TOC` is an array of `HelpItem`.  `HelpItem`, similar to `TreeNode` in a tree data structure, contains information 
about the current help entry, with optional sub-entries as `items`.  Using just these 2 data structures, you 
can completely customize your Table of Content.

    - overview
    - topic-1
      - item-1-1
      - sub-topic-1-2
        - item-1-2-1
        - item-1-2-2
      - item-1-3
    - topic-2
      - item-2-1
      - item-2-2
    - item-3


### How to reuse existing Topics

`TOC` is a simple JavaScript object.  There are many ways to manipulate the object.  Below are just a few examples.


Given, from `app/src/toc/firefly_toc.js`:


    export const toc_privacy = {
        id: 'privacy',
        title: 'IRSA Privacy Notice',
        href: 'firefly/privacy.html'
    };
    
    export const toc_user = {
        id: 'user',
        title: 'User Registration',
        href: 'firefly/user.html'
    };
    
    export const toc_tables = {
        id: 'tables',
        title: 'Tables',
        href: 'firefly/tables.html',
        items: [
            {
                id: 'tables.tableoptions',
                title: 'Table Options',
                href: 'firefly/tables.html#tableoptions',
                hidden: true,
            },
            {
                id: 'tables.header',
                title: 'Table Header',
                href: 'firefly/tables.html#header',
            },
            {
                id: 'tables.columns',
                title: 'Table Columns',
                href: 'firefly/tables.html#columns',
            },
            {
                id: 'tables.filters',
                title: 'Table Filters',
                href: 'firefly/tables.html#filters',
            },
            {
                id: 'tables.save',
                title: 'Saving Tables',
                href: 'firefly/tables.html#save',
            },
            {
                id: 'tables.catalogs',
                title: 'Catalogs',
                href: 'firefly/tables.html#catalogs',
            },
            {
                id: 'basics.catalogs',
                title: 'Catalogs',
                href: 'firefly/tables.html#catalogs',
                 hidden: true,
            },
        ]
    };


I want to use these predefined topics from Firefly to create my `helloworld` TOC.

    import {toc_privacy, toc_user, toc_tables} from './firefly_toc';
    
    export const toc_about = {
        id: 'about',
        title: 'About Hello World',
        href: 'helloworld/about.html'
    };
    
    const myToc = [toc_about, toc_tables, toc_user, toc_privacy];
    
    
This is straight forward.  But, what if I need to add my additional project's specific content to `toc_tables`?

    const myTableToc = {
        id: 'tables',
        title: 'Hello World Tables',
        href: 'helloworld/tables.html',         // notice this is pointing to my content
        items: [
            {
                id: 'helloworld.table_dd',
                title: 'Hello World: data definitions',
                href: 'helloworld/tables.html#table_dd',        // add a HelpItem before generic Firefly Help
            },
            ...toc_tables.items,
            {
                id: 'helloworld.searches',
                title: 'Example Searches',
                href: 'helloworld/example-searches.html',       // add some example searches after
            },
        ]
    }    