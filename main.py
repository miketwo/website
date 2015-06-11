import webapp2

application = webapp2.WSGIApplication([
    webapp2.Route('/learn/mocks', webapp2.RedirectHandler,
                  defaults={'_uri': 'https://youtu.be/smPbDqGjFAI'}),
], debug=False)
