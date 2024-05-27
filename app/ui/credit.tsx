import Link from 'next/link';
import Image from "next/image";

export function Credit() {
    return (
        <div className="flex flex-row items-center gap-1">
            <Link href="https://bento.me/aslansari" target='_blank'>
                <span className="text-sm text-gray-500"> created by <span className="text-gray-900 font-medium">Aslan</span> with </span>
            </Link>
            <Image className="hover:animate-bounce" src="/heart-sharp.svg" alt="Heart Logo" width={16} height={16} />
        </div>
    );
}