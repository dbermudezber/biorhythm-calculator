import { CartesianGrid, Line, LineChart,ReferenceLine,ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorhythmsSeries } from "../lib/biorhythms";

function BiorhythmChart({birthDate, targetDate}) {
    const series = calculateBiorhythmsSeries(birthDate, targetDate, 15);
    return (
        <ResponsiveContainer width = "100%" height={200}>
            <LineChart data = {series}>
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <XAxis dataKey ="date"
                    ticks = {[series[3].date, series[15].date, series[27].date]}
                />
                <ReferenceLine x= {series[15].date}/>
                <Line dataKey = "physical" stroke = "green"
                    dot = {false} type = 'natural'
                />
                <Line dataKey =  "emotional" stroke = "red"
                    dot = {false} type = 'natural'
                />
                <Line dataKey = "intellectual" stoke = "blue"
                    dot = {false} type = 'natural'
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorhythmChart