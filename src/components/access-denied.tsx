import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './ui';
import Image from 'next/image';

interface Props {
     className?: string;
}

export const AccessDenied: React.FC<Props> = (props) => {
     const {className} = props;
     return (
        <div className={
            cn("flex items-center justify-between gap-10 px-20 py-16 min-h-screen bg-white",className)}>
            <div className='flex items-center gap-4 justify-start max-[900px]:justify-center'>
                <h1 className='font-weight-800 font-size-40 color-[#000]'>Доступ запрещён</h1>
                <p className='font-weight-400 font-size-20 color-[#999] '>Данную страницу могут просматривать только авторизованные пользователи</p>
                <Link href={'/'}>На главную</Link>
                <Button>Обновить</Button>
            </div>
            <div>
                <Image className='w-full h-auto'  src={'/close.png'} alt={''} width={320} height={379} />
            </div>
        </div>
    );
}