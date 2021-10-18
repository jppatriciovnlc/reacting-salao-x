


const Mock = () => {
    const data = {
        totalAgendamentos: 0,
        manicureAgendamentos: 0,
        podologaAgendamentos: 0,
        agendamentos:[]

    }

    for(let i = 0; i < 30; i++){
        let auxPodologa = Math.floor(Math.random() * 4 + 2);
        let auxManicure = Math.floor(Math.random() * 3 + 3);
        let aux = {
            name: `Dia ${i+1}`,
            Podologa : auxPodologa,
            Manicure: auxManicure,
            Total: auxPodologa + auxManicure
        }
        data.agendamentos.push(aux)
    }
    data.agendamentos.map((item) => {
        data.manicureAgendamentos += item.Manicure;
        data.podologaAgendamentos += item.Podologa;
        data.totalAgendamentos += item.Total

        return null
    })


    return data

}
export default Mock