'use client'
import dynamic from "next/dynamic";

const Width = dynamic(()=> import('@/components/Width'), {ssr: false});

export default function WidthClient(){
  return <Width/>
}