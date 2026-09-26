"use client"

import { CheckCheck, DotIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function HomePostPreview({ title, desc, date, author, read, path }: { title: string, desc: string, date: Date, author: string, read: Boolean, path: string }) {
    const router = useRouter();
    return (
    <div className={"w-full p-3 h-50 rounded-md border border-white/20 flex flex-col cursor-pointer hover:bg-white/5 transition-colors" + (read ? " text-gray-400" : "")} onClick={()=>router.push(path)}>
        <div className="flex-initial pb-2 border-b border-white/20">
            <h1 className="text-2xl font-semibold text-left">{title}</h1>
        </div>
        <div className="flex-auto text-justify pt-2 opacity-80 text-sm">{desc}</div>
        <div className="flex justify-between flex-end">
            <p>{author}</p>
            <p className="flex items-center justify-center align-baseline">
                {read ? <span className="pr-1"><CheckCheck className="w-5 h-5" /></span> : <DotIcon className="text-red-500 w-5 h-5"/>}
                <span>{date.toLocaleDateString()}</span>
            </p>
        </div>
    </div>
    );
}