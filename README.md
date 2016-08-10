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

### 2. Gulp

**Gulp** is a task automator running on Node.js. It will do a lot of hard work for us preparing the source code for productive use. Amongst others Gulp combines files, shrinks them, tests code for faults etc.

1. Run `npm install -g gulp-cli` to install Gulp's command line interface globally. This will put the gulp command in your system path, allowing it to be run from any directory.
2. Test the installation of Gulp by running `gulp --version` from your command line.

### 3. Bower

1. Run `npm install -g bower` from your command line to install Bower and have it globally available.
2. Test the installation of Bower by entering `bower --version` from your command line.

### 4. Typings

1. Run `npm install -g typings` from your command line to install Typings and have it globally available.
2. Test the installation of Typings by entering `typings --version` from your command line.


##Starting

After your are finished with the step before and everything runs fine, run these steps to get your project on the road.

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Run `npm install` (`bower install` and `typings install --global` are launched automatically)
4. To
	* **start** the development environment run `gulp serve`
	* **build** the code for production use run `gulp build`

##Custom Configuration

How to set up your personal boilerplate, with dependencies you really need.

###projectConfig.json

This file lets you enable and disable certain tasks as well as specify additional resource folders.

__resource folders__
To add additional resource folders, create the folders and add the paths to the global.resources array.
The path needs to be prepended with a "/" and relative to the app folder.
The default resource folder is "/resources"

__tasks__
To disable certain tasks, simply set the specific task to false. 
At the moment the tasks that can be disabled are: "linting", "iconfont", "angular", "handlebars", "uglify", "cleanCss", "favicons", "cssStats".
Per default all tasks are enabled.

##Development

run the boilerplate with `gulp serve`

###1. Our helpers

**{{= ftf.include(, {}) }}** - Include a html file. You can  pass a json object with own data
**{{= ftf.text(500) }}** - Generate dummy text files with 500 chars
**{{= ftf.renderHbs("demo", "app/_mock/demo.json") }}** - Render a hbs file with json data in your template

@ToDo - add all helper functions

###2. Folder structure

* `/app` is where all of the actual frontend code is stored
* `/app/_assets` holds static placeholder files like images, audio- and video files.
* `/app/_mock` holds files that would be generated dynamically (such as `nav.json`) by the cms implementing the frontend
* `/app/_partials` holds snippets of html code that are reused throughout the frontend
* `/app/resources` holds JavaScript, CSS and other files
* `/test` is where we put automated tests

##Testing

Nightwatch.js is an End-to-End (E2E) testing solution for browser based apps and websites using Selenium to automatically 
perform commands and assertions on DOM elements.

There are two different Gulp Tasks: 'test' for using an external Selenium server and 'test:dev' to start the test on a 
local selenium. The npm packages for 'test:local' are not included in the package.json, so you need to install them manually.

###gulp test

Gulp task for testing on external Selenium server.
Add your settings in the configuration file `/test/nightwatch/nightwatch.js`

`gulp test -url=http://YOURDOMAIN.com`

'-url' can be used in nightwatch tests with 'browser.launch_url'.
Example:
```javascript
module.exports = {
   'Visual Test - Stage Component': function(browser) {
      browser
         .windowMaximize()
         .url(browser.launch_url + '/90demo.01icons.html')
         .waitForElementPresent('body', 3000)
         .assert.title('VIGulpFrontendBoilerplate')
         .end();
   }
};
```

###gulp test:dev

Add your settings in the configuration file `/test/nightwatch/nightwatch.dev.js`
npm packages to install: 
Selenium.jar: `npm install selenium-server-standalone-jar`
GraficMagick: `npm install gm`

Download and install imageMagick: http://www.imagemagick.org

##Build

run the boilerplate with `gulp build`
If everything is correct, you will find a build version of your code in the **dist** directory.
This contains among others a min and concat version of your js and css files

##Important
When you want to add a bower package, make sure its bower.json has defined a main file. Otherwise you have to add a main file to the override section in [this projects bower.json file](./bower.json).
This will trigger the gulp task to only pull out the main files of the packages to prevent storage size overhead.

##Release
There is a gulp task for doing releases. Use gulp release --type=[major,minor,patch,prerelease] will do the following steps for you:
1. update package.json version
2. git commit the changed package.json
3. git push
4. set a GIT tag for this version
5. coming soon: create a diff changelog from last version to this version

##Troubleshooting

###Line-break errors in eslint

If there are line-break errors in eslint, it may be because false line endings set by git.
To prevent this use the git config "core.autocrlf". 
Use the command "git config core.autocrlf false" to prevent windows from using crlf instead of lf.

###gulp serve malloc error (Unix Only)

************** gulp(975,0x104c15000) malloc: *** error for object 0x10164201c: pointer being freed was not allocated *** set a breakpoint in malloc_error_break to debug **************

This is caused by missing sass files. Be sure you've done a bower install before gulp serve.

