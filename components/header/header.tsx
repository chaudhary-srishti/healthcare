
import { useEffect } from 'react'

export default function Header() {

    useEffect(() => {
    }, []);

    return (
        <>
            <main>
                <header className="absolute inset-x-0 top-0 z-50 border-b bg-white">
                    <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                            <img
                                className="h-6 w-auto"
                                src="/favicon.ico"
                                alt=""
                            />
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <a href="/queries" className="text-sm font-semibold leading-6 text-gray-900">Queries</a>
                            <a href="/ontology" className="text-sm font-semibold leading-6 text-gray-900">Ontology</a>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        </div>
                    </nav>
                </header>
            </main>
        </>
    )
}