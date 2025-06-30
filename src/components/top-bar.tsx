import React from 'react';
import { cn } from '@/lib/utils';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';


interface Props {
    className?: string;
    categorise: Array <{name:string; id:number }>
}

export const TopBar: React.FC<Props> = (props) => {
    const { className,categorise } = props;
    return (
        <Container className={cn(" sticky top-2 flex justify-between", className)}>

            <Categories  items={categorise} />
            <SortPopup />
        </Container>
    );
}