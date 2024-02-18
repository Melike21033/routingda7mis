// user-interface-dashboard.component.ts
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { UserInterfaceTicketsService } from '../user-interface-tickets/user-interface-tickets.service';
import { Ticket } from '../user-interface-tickets/ticket';

@Component({
  selector: 'app-user-interface-dashboard',
  templateUrl: './user-interface-dashboard.component.html',
  styleUrls: ['./user-interface-dashboard.component.css']
})
export class UserInterfaceDashboardComponent implements AfterViewInit {
  @ViewChild('priorityChart') priorityChartRef!: ElementRef;
  @ViewChild('statusChart') statusChartRef!: ElementRef;

  constructor(private ticketService: UserInterfaceTicketsService) {}

  ngAfterViewInit(): void {
    this.ticketService.getAllTickets().subscribe(tickets => {
      this.createPriorityChart(tickets);
      this.createStatusChart(tickets);
    });
  }

  createPriorityChart(tickets: Ticket[]): void {
    const priorityLabels = tickets.map(ticket => ticket.priority);
    const priorityData = this.countOccurrences(priorityLabels);

    const priorityChart = new Chart(this.priorityChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: Object.keys(priorityData),
        datasets: [{
          data: Object.values(priorityData),
          backgroundColor: ['#252323', '#36A2EB', '#FFCE56'], // Couleurs pour les différentes priorités
        }]
      },
    });
  }

  createStatusChart(tickets: Ticket[]): void {
    const statusLabels = tickets.map(ticket => ticket.status);
    const uniqueStatuses = Array.from(new Set(statusLabels));

    const statusDataSets = uniqueStatuses.map(status => {
      const statusCount = statusLabels.filter(label => label === status).length;
      return {
        label: status,
        data: [statusCount],
        backgroundColor: this.getRandomColor(), // Fonction pour obtenir une couleur aléatoire
      };
    });

    const statusChart = new Chart(this.statusChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Status'],
        datasets: statusDataSets,
      },
      options: {
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });
  }

  countOccurrences(array: any[]): { [key: string]: number } {
    return array.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
