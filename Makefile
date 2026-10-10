IMAGE ?= hugomods/hugo:exts
UID_GID := $(shell id -u):$(shell id -g)
DOCKER := docker run --rm -v "$$PWD":/src -w /src -p 1313:1313 --user $(UID_GID) -e HOME=/tmp

.PHONY: deps dev build preview clean

deps:
	$(DOCKER) npm install

dev:
	$(DOCKER) hugo server --bind 0.0.0.0 --disableFastRender

build:
	$(DOCKER) sh -c "hugo --minify && npx pagefind --site public"

preview:
	$(DOCKER) sh -c "hugo --minify && npx pagefind --site public && npx http-server public -p 1313 -c-1"

clean:
	rm -rf public resources hugo_stats.json
