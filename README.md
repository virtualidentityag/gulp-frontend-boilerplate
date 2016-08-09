# gulp-frontend-boilerplate

##Introduction

Why we made this and what you can do with this.

##Setup

### 1. Node.js and NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools. In fact node.js even runs a tiny webserver which will enable you to browse the components of the frontend.
**NPM** is the Node Package Manager which will allow us to download and install required components for Node.js with ease.

1. Install as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install NPM and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.

### 2. GIT 

**GIT** is source code management. Linus Torvalds wrote it to manage Linux. 'Nuf said.

1. Install as instructed on <http://www.git-scm.com>. However Windows users generally found the implementation from <https://code.google.com/p/msysgit/> to be more practical.
2. (On Windows) choose "Run Git from the Windows Command Prompt" when asked.
3. Test the installation of GIT by running `git --version` from your command line.

### 3. Gulp

**Gulp** is a task automator running on Node.js. It will do a lot of hard work for us preparing the source code for productive use. Amongst others Gulp combines files, shrinks them, tests code for faults etc.

1. Run 'npm install --global gulp-cli' to install Gulp's command line interface globally. This will put the gulp command in your system path, allowing it to be run from any directory.
2. Test the installation of Gulp by running `gulp --version` from your command line.

### 4. Bower

1. Run `npm install -g bower` from your command line to intall Bower and have it globally available.
2. Test the installation of Bower by entering `bower --version` from your command line.

##Starting

After your are finished with the step before and everything runs fine, run these steps to get your project flow.

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Run `npm install
4. Run `bower install`
5. To
	* **start** the development environment run `gulp serve`
	* **build** the code for production use run `gulp build`

##Custom Configuration

How to set up your personal boilerplate, with dependencies you really need.

##Development

run the boilerplate under `gulp serve` to do the following

###1. Our helpers

**{{= ftf.include(, {}) }}** - Include a html file. You can  pass a json object with own data
**{{= ftf.text(500) }}** - Generate dummy text files with 500 chars
**{{= ftf.renderHbs("demo", "app/_mock/demo.json") }}** - Render a hbs file with json data in your template

@ToDo - add all helper functions



##Build

How to gnenerate a productiv version of your code.
