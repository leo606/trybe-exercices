from http.server import SimpleHTTPRequestHandler, HTTPServer
import ssl

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain("cert.pem", keyfile="key.pem")

address = ("0.0.0.0", 8003)
httpd = HTTPServer(address, SimpleHTTPRequestHandler)
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

httpd.serve_forever()
