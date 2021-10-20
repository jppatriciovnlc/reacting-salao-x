


const Mock = () => {

    var dt = new Date();

    var month = dt.getMonth() + 1;
    var year = dt.getFullYear();
    var daysInMonth = new Date(year, month, 0).getDate();
    
    const weekDay = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',    
    ]
        


    const data = {
        totalAgendamentos: 0,
        manicureAgendamentos: 0,
        podologaAgendamentos: 0,
        agendamentos:[],
        agendamentosDetalhes: []

    }

    for(let i = 0; i < daysInMonth; i++){
        let auxPodologa = Math.floor(Math.random() * 4 + 2);
        let auxManicure = Math.floor(Math.random() * 3 + 3);
        let aux = {
            name: `${i+1}`,
            Podologa : auxPodologa,
            Manicure: auxManicure,
            Total: auxPodologa + auxManicure,
        }
        data.agendamentos.push(aux)
        
    }
    data.agendamentos.map((item) => {
        data.manicureAgendamentos += item.Manicure;
        data.podologaAgendamentos += item.Podologa;
        data.totalAgendamentos += item.Total

        return null
    })

    data.agendamentos.map((dia) => {
        for(let i = 0; i< dia.Podologa; i++){
            let date = new Date(dt.getFullYear(),dt.getMonth(),dia.name)   
            let aux = {
                day: weekDay[date.getDay()],
                date: date,      //`${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`,
                time: '08:00',
                client: `Cliente ${i+1}`,
                service: 'Podóloga'
            }
            data.agendamentosDetalhes.push(aux)
        }
        for(let i = 0; i< dia.Manicure; i++){           
            let date = new Date(dt.getFullYear(),dt.getMonth(),dia.name)   
            let aux = {
                day: weekDay[date.getDay()],
                date: date,      //`${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`,
                time: '08:00',
                client: `Cliente ${i+1}`,
                service: 'Manicure'
            }
            data.agendamentosDetalhes.push(aux)
        }

        return null

    })

    return data

}
export default Mock