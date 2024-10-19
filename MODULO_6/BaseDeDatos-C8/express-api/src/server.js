import express from "express";
import path from "path";

export class Server {

    constructor({port, routes, public_path = "public"}) {
        this.port = port;
        this.routes = routes;
        this.public_path = public_path;
        this.app = express();
    }

    async start() {

        this.app.use(express.json());
        
        this.app.use(this.routes);
        
        this.app.get('*', (req, res) => {
            const dirname = path.resolve();
            const indexPath = path.join(dirname, `/${this.public_path}/index.html`);
            
            res.sendFile(indexPath);
        });
        
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}/`);
        });
        
    }

}