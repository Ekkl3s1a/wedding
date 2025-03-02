import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqs = [
    {
      question: 'Há algum dress code?',
      answer:
        'Podes escolher a peça que quiseres. Temos apenas um pedido. A cor verde vai ser escolhida para pessoas específicas e por isso pedimos para que não uses nenhuma peça em tons verdes.',
      isOpen: false,
    },
    {
      question: 'A que horas tenho de chegar?',
      answer:
        'A cerimónia é às 16 horas, por isso pedimos-te para que estejas na herdade às 15h30. Sabemos que há atrasos que fazem parte e, por essa razão, pedimos para que venhas com tempo.',
      isOpen: false,
    },
    {
      question: 'Até quando posso confirmar a minha presença?',
      answer:
        'Tens até ao dia 9 de maio para confirmares. Pedimos-te para que nos contactes para um dos nossos números. Se tiveres alguma intolerância alimentar ou alergia a algum alimento avisa-nos também.',
      isOpen: false,
    },
    {
      question: 'Sobre a alimentação.',
      answer:
        'Se tiveres alguma intolerância alimentar ou alergia a algum alimento avisa-nos.',
      isOpen: false,
    },
    {
      question: 'E presentes ? Como posso ajudar?',
      answer:
        'Se quiseres dar dinheiro podes enviar para um dos nossos contactos ou se preferires entregas no dia.',
      isOpen: false,
    },
    {
      question: 'Existe estacionamento disponível?',
      answer: 'Sim, há estacionamento gratuito no local do evento.',
      isOpen: false,
    },
  ];

  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
