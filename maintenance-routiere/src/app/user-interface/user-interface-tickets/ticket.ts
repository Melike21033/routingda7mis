// ticket.ts
export interface Ticket {
    id: number;
    description: string;
    localisation: string;
    date_creation: Date;
    date_resolution: Date | null; // Peut être null si le ticket n'est pas encore résolu
    priority: string;
    status: string;
    image:string;
    userId:number;
  }
