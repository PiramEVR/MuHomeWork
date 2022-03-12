import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    // const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as [number, number]);
    };
    return (
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    )
}

export default SuperDoubleRange
