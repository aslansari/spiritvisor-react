
export function Chip({ title }: { title: string }) {
    return (
        <div className="badge badge-ghost py-4 px-4">
            {`${title}`}
        </div>
    );
}