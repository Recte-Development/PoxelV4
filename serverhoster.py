from http.server import HTTPServer, SimpleHTTPRequestHandler
import mimetypes

# Add .wasm MIME type if not present
mimetypes.add_type('application/wasm', '.wasm')

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add your CORS headers, etc.
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")

        if self.path.endswith(".js"):
            self.send_header("Content-Type", "application/javascript")
            self.send_header("Content-Encoding", "identity")
        # Do NOT override Content-Encoding for .js.br or .wasm files

        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

if __name__ == "__main__":
    port = 8080
    print(f"Serving on http://127.0.0.1:{port}")
    httpd = HTTPServer(('127.0.0.1', port), CustomHandler)
    httpd.serve_forever()
