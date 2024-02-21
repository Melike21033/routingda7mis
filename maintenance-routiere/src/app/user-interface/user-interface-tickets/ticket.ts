// ticket.ts
import { utilisateur } from './utilisateur';

export interface Ticket {
    id: number;
    description: string;
    localisation: string;
    date_creation: Date;
    date_resolution: Date | null;
    priority: string;
    status: string;
    image: string;
    utilisateur: utilisateur; // Utilisateur associé au ticket
}
