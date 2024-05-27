
export function Chip({ title }: { title: string }) {
    return (
        <button className="px-4 py-2 bg-slate-300 text-slate-700 text-sm font-medium rounded-full">
            {`${title}`}
        </button>
    );
}