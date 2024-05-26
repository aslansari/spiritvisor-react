import Link from 'next/link';

export function FlavorButton({ params }: { params: { id: string, title: string}}) {
    const id = params.id;
    const title = params.title;
    return (
        <Link
            href={`/${id}`}
            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
            <button >{`${title}`}</button>
        </Link>
    );
}