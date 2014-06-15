.PHONY: all build

all: build

build: node_modules

# if package.json changes, install
node_modules: package.json
	npm install
	touch $@

test: build
	npm test

clean:
	rm -rf node_modules
