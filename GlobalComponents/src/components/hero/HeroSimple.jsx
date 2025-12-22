import React from "react";
import Button from "../ui/Button";

/**
 * @param {{ title: string, description: string, primaryAction: { label: string, href: string }, secondaryAction: { label: string, href: string } }} props
 */
export default function HeroSimple({
    title,
    description,
    primaryAction,
    secondaryAction,
}) {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {title}
                </h1>

                <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                    {description}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    {primaryAction && (
                        <Button size="lg" href={primaryAction.href}>
                            {primaryAction.label}
                        </Button>
                    )}

                    {secondaryAction && (
                        <Button variant="secondary" size="lg" href={secondaryAction.href}>
                            {secondaryAction.label}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}
