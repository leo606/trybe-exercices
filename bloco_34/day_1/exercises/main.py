from socketserver import UDPServer, BaseRequestHandler


class HandlerUDP(BaseRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        data = self.request[0].strip()
        socket = self.request[1]
        print("{} wrote:".format(self.client_address[0]))
        print(data)
        socket.sendto(data.upper(), self.client_address)


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    with UDPServer((HOST, PORT), HandlerUDP) as server:
        server.serve_forever()
