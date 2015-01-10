** Building and running **
(I tested it on the freshly installed Ubuntu 14.04 Server.)

First, you need to install node and npm:

  sudo apt-get install npm nodejs-legacy gem

Then building prerequisites:

  sudo gem install sass
  sudo apt-get install ruby-sass
  sudo npm install -g yo bower gulp sass

Next go to the unpacked directory and run
  cd larionov-test
  bower install && npm install

In order to build and run development version you shuld run:

  gulp build && gulp serve

Release version:
  gulp build:dist && gulp serve:dist

Then open your browser and go to http://localhost:3000/ and it should be working.