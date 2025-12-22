import React, { useState } from 'react';
import Button from '../ui/Button';

/**
 * @param {{ brand: string, links: { label: string, href: string }[] }} props
 */
const NavbarWithCTA = ({ brand, links = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600">{brand}</span>
                    </div>
                    <div className="hidden md:ml-10 md:flex md:space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="sm">Log in</Button>
                        <Button variant="primary" size="sm">Get started</Button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 pb-2 border-t border-gray-100 space-y-2">
                            <Button variant="ghost" size="md" className="w-full justify-center">Log in</Button>
                            <Button variant="primary" size="md" className="w-full justify-center">Get started</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarWithCTA;
