export class Project {
    id: string;
    title: string;
    description: string;
    technology: string;
  
    constructor(id: string, title: string, description: string, technology: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.technology = technology;
    }
  }