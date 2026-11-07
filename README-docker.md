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

    git clone https://github.com/Caltech-IPAC/firefly-help
    cd firefly-help
    docker compose up [--build]

The above commands will create firefly-help repository with the latest changes then 
build and run it locally on port 3000.  To test, point browser to http://localhost:3000/

By default, docker-compose will build the image if one does not exists.  Once image is built, it will use
the existing image and will not attempt to build again.  Use **--build** to force a build before starting 
the container.  This is needed when you're made changes to the source and wanted to rebuild before starting.

