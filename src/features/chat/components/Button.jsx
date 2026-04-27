export default function Button({ toogleOpen , isOpen }) {
    return (
        <div
            className="fixed bottom-4 right-4 z-50"
            onClick={() => toogleOpen(!isOpen)}
        >
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 shadow-lg transition-colors hover:bg-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10v2H7V9zm6 5H7v-2h6v2zm4-6H7V6h10v2z" />
                </svg>
            </button>
        </div>
    )
}
