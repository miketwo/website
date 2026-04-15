REDIRECTS = {
    "/learn/mocks": "https://youtu.be/smPbDqGjFAI",
    "/blog": "https://miketwo.github.io/",
}


def app(environ, start_response):
    path = environ.get("PATH_INFO", "")
    destination = REDIRECTS.get(path)

    if destination is None:
        start_response(
            "404 Not Found",
            [("Content-Type", "text/plain; charset=utf-8")],
        )
        return [b"Not Found"]

    start_response(
        "302 Found",
        [
            ("Location", destination),
            ("Content-Type", "text/plain; charset=utf-8"),
        ],
    )
    return [b"Redirecting"]
