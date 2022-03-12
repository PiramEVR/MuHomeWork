import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import Box from '@mui/material/Box';
import s from './SuperRange.module.css'
import Slider from "@mui/material/Slider";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, value,  onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (event: Event, newValue: number | number[],) => {
        // onChange && onChange() // сохраняем старую функциональность

        onChangeRange && onChangeRange(newValue as number)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <Box sx={{width: 300}}>
            <Slider
                value={value}
                valueLabelDisplay="auto"
                onChange={onChangeCallback}
            />
        </Box>
    )
}

export default SuperRange
