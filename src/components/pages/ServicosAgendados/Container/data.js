//--> Lista de dados para preencher a lista de serviços agendados de maneira estática (Testes).

const DadosLista = [
    {
        title: 'Até 1 Hora para o Atendimento',
        data: [
            {
                Cliente: 'Julia Gomes', 
                Servico: 'Manicure',
                Horario: '14:00'
            },
            {
                Cliente: 'Amanda da Cunha', 
                Servico: 'Pedicure',
                Horario: '14:20'
            },
            {
                Cliente: 'Marilda Costa',
                Servico: 'Depilação Facial',
                Horario: '14:40'
            }
        ]
    },
    {
        title: 'Até 2 Horas para o Atendimento',
        data: [
            {
                Cliente: 'Andréia Cardoso',
                Servico: 'Corte de Cabelo',
                Horario: '15:00'
            }, 
            {
                Cliente: 'Fabiola da Silva',
                Servico: 'Corte de Cabelo',
                Horario: '15:30'
            },
            {
                Cliente: 'José Fernandes',
                Servico: 'Corte de Cabelo',
                Horario: '15:50'
            }
             
        ]
    }
];

export default DadosLista;