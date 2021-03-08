
from http.server import SimpleHTTPRequestHandler, HTTPServer
import json
from valothread import ValoThread


#
# Global variable state
#
valothread = ValoThread()
valothread.start()


class OwnRequestHandled(SimpleHTTPRequestHandler):
    def __init__(self, request, client_address, server):
        super().__init__(request, client_address, server, directory='html')

    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, HEAD, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Max-Age', '86400')
        super().end_headers()


    def do_GET(self):
        print(self.requestline)
        if(self.path == '/rest/state'):
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            #self.wfile.write(json.dumps(state).encode())
            self.wfile.write(valothread.getStateJSON())
            self.wfile.flush()
        else:
            super().do_GET()


    def do_POST(self):
        print(self.requestline)
        content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
        post_data = self.rfile.read(content_length) # <--- Gets the data itself
        data = json.loads(post_data.decode('utf-8'))
        if self.path == '/rest/state':
            valothread.changeState(data)
        elif self.path == '/rest/color':
            valothread.changeColor(data)
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(valothread.getStateJSON())
        self.wfile.flush()


    def do_OPTIONS(self):
        print(self.requestline)
        print(self.command)
        print(self.path)
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()



def server():
    server_address = ('', 8080)
    httpd = HTTPServer(server_address, OwnRequestHandled)
    httpd.serve_forever()


if __name__ == '__main__':
    server()

