"use client"


import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FilterGroup } from './filter-group';
import { Title } from './title';
import { FilterPrice } from './filter-price';
import { getIngredients } from '@/services/ingredients';
import { Ingredient } from '@prisma/client';
import { Value } from '@radix-ui/react-select';
import { useSet } from 'react-use';


interface Props {
    className?: string;
}

export const Filter: React.FC<Props> = (props) => {
    const { className } = props;
    const [prices, setPrices] = React.useState([0, 5000]);
    const [ingredients, setIngridents] = React.useState<Ingredient[]>([]);

    const [selectedIngredients,{toggle: setSeletcedIngredients}] = useSet(new Set<number>())
    const [size,{toggle: setSize}] = useSet(new Set<number>())

    const [type,{toggle: setType}] = useSet(new Set<number>())



    React.useEffect(() => {
        getIngredients().then((data) => setIngridents(data))
    }, [])

    const niceIngredients = ingredients.map(el => ({
        name: el.name,
        value: el.id
        
        
    }))
console.log(selectedIngredients);
    return (
        <div className={cn("flex flex-col gap-5 ", className)}>

            <Title size={'m'}>
                Филтрация
            </Title>
            <FilterPrice value={prices} setValue={setPrices} />
            <FilterGroup items={[{ name: 30, value: "маленькая" }, { name: 40, value: "средная" }, { name: 50, value: "большая" }]} title={'Размеры:'} setSelected={setSize} selected={size} />
            
            <FilterGroup items={[{ name: "Традиционное", value: 1 }, { name: "Тонкое", value: 2 }]} title={'Тип Теста:'} setSelected={ setType} selected={type} />
            <FilterGroup items={niceIngredients} title={'Ингридиенты:'} setSelected={setSeletcedIngredients } selected={selectedIngredients} />
        </div>
    );
}