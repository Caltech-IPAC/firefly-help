## Using Docker development environment

This is an alternative to setting up local dependencies.  Using Docker, the only dependency is Docker itself.  
Follow instructions [here](https://docs.docker.com/get-docker/) to install Docker Desktop.


#### Mac user
Install instructions is here: https://docs.docker.com/docker-for-mac/install/

On macOS, only shared paths are accessible by Docker.  
Your source files need to be included in shared paths.  

You can configure shared paths from `Docker -> Preferences... -> Resources -> File Sharing.`  
See https://docs.docker.com/docker-for-mac/osxfs/#namespaces for more info.  

Unlike Docker on Linux, any file system changes need to be passed between the host and container via Docker for Mac, which 
can soon add a lot of additional computational overhead.  
For this reason, you will see slightly slower performance when running on MacOS


## Quick Start

#### Build

To build the application, run this command in the project root's directory.    

     docker compose run <project-name>

The predefined projects are listed in `docker-compose.yml` under `services`.  
In this case, there is only `firefly`.

#### Run

Firefly help is a web application.  To run it, point your web browser to the built `index.html`.  
You can find this under the `./build/${project-name}/index.html`, i.e. `./build/firefly/index.html`
