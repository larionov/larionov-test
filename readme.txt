** Building and running **
(I tested it on the freshly installed Ubuntu 14.04 Server.)

First, you need to install node and npm:

  sudo apt-get install npm nodejs-legacy

Then building prerequisites:
  sudo npm install -g yo bower gulp sass

Unpack larionov-test.zip or	git clone https://github.com/larionov/larionov-test.git

Next go to the unpacked directory and run
  cd larionov-test
  bower install && npm install

In order to build and run development version you shuld run:

  gulp serve

Release version:
  gulp build:dist && gulp serve:dist

Then open your browser and go to http://localhost:3000/ and it should be working.