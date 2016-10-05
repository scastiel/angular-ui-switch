NPM=./node_modules/.bin

all:

compile: js css

publish: npm bower

js:
	@echo "Minifying javascript ..."
	@$(NPM)/babel angular-ui-switch.js > angular-ui-switch.babel.js
	@$(NPM)/uglifyjs angular-ui-switch.babel.js --compress --mangle --comments > angular-ui-switch.min.js
	@rm angular-ui-switch.babel.js

css:
	@echo "Minifying css ..."
	@$(NPM)/minify angular-ui-switch.css > angular-ui-switch.min.css

npm:
	@echo "Publishing as npm ..."
	npm publish

bower:
	@echo "Publishing as bower ..."
	bower register angular-ui-switch git@github.com:xpepermint/angular-ui-switch.git
