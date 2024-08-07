export default function PageHeader({ title }) {
    return (
        <>
        <h1 className="text-xl font-bold my-2">{title}</h1>
        <div className="border-t-2 border-solid border-gray-300 my-2"></div>
        </>
    );
}