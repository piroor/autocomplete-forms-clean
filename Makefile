.PHONY: xpi

all: xpi

xpi:
	rm -f ./*.xpi
	zip -r -0 autocomplete-forms-clean.xpi manifest.json _locales images scripts icon.png LICENSE -x '*/.*' >/dev/null 2>/dev/null

