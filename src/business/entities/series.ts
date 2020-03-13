
export class Series {
    constructor(
        private id: string,
        private title: string,
        private debut_date: Date,
        private image: string,
        private sinopse: string,

        ){ }
        
        public getId(): string {
            return this.id;
        }
        
        public setId(id: string): void {
            this.id = id;
        }
        
        public getTitle(): string {
            return this.title;
        }
        
        public setTitle(title: string): void {
            this.title = title;
        }
        
        public getDebut_date(): Date {
            return this.debut_date;
        }
        
        public setDebut_date(debut_date: Date): void {
            this.debut_date = debut_date;
        }

        public getSinopse(): string {
            return this.sinopse;
        }
        
        public setSinopse(sinopse: string): void {
            this.sinopse = sinopse;
        }
        
        public getImage(): string | undefined {
            return this.image;
        }
        
        public setImage(image: string): void {
            this.image = image;
        }
    }