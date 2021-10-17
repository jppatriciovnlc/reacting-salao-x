import { PieChart, Pie, Cell, ResponsiveContainer, Legend  } from 'recharts';



const LocalPieChart = (props) => {

    

    const data = props.data;

     
      
    const COLORS = ["#07ea27", "#072fea"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return(
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={1200} height={1200}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="45%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    margin={ 5, 5, 5, 5 }
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            <Legend />
        </PieChart>
        </ResponsiveContainer>
        
    )


}
export default LocalPieChart