import React, { useState } from 'react';

/**
 * @param {{ brand: string, links: { label: string, href: string }[] }} props
 */
const NavbarBasic = ({ brand, links = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <nav
                className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"
                aria-label="Main navigation"
            >
                <span className="text-xl font-semibold text-indigo-600">{brand}</span>

                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-gray-700 hover:text-indigo-600 transition"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-gray-600"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <ul className="flex flex-col p-4 gap-4">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="block text-gray-700 hover:text-indigo-600"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default NavbarBasic;
