import http.server
import socketserver

PORT = 3001

# credit: https://gist.github.com/mdonkers/63e115cc0c79b4f6b8b3a6b797e485c7


class HttpRequestHandler(http.server.BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header("content-type", "text/html")
        self.end_headers()

    def do_GET(self):
        self._set_response()
        self.wfile.write("hello world".encode("utf-8"))

    def do_POST(self):
        self._set_response()
        self.wfile.write("hello world".encode("utf-8"))


handler = HttpRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("server serving at port", PORT)
    httpd.serve_forever()
