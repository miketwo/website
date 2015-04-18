# Personal Website

A place for me to play with Google App Engine, in preparation for applying to
KA. This is hosted live at http://miketwo.net

I started the project in Django, but that was overkill for what I'm trying to
do. So I've rewritten it using a template I found on Styleshout and raw html.
Content and presentation are not separated, which is fine for something this
basic. If I start adding a bunch of features I can switch to an MVC layout to
make things easier to maintain.

# Features
- custom 404 page
- mobile-friendly
- animated skill bars

# Development

To start a development instance, run from the project root
```
dev_appserver.py .
```

To deploy, run the `deploy.sh` script.
