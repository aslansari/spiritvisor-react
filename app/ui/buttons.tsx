import Link from 'next/link';

export function FlavorButton({ params }: { params: { id: string, title: string}}) {
    const id = params.id;
    const title = params.title;
    return (
        <Link href={`flavor/${id}`} className='btn btn-primary text-base-100'>
            <button>{`${title}`}</button>
        </Link>
    );
}