from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085


class Handler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello world\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # responder ao cliente:
            self.wfile.write(line)

            # printar no console
            print(line.decode("ascii").strip())


if __name__ == "__main__":
    with TCPServer(ADDRESS, Handler) as server:
        server.serve_forever()
