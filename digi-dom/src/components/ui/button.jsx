import React from "react"

export const Button = ({ className = "", variant = "default", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    }

    // Custom classes for the specific look if primary/accent aren't defined in CSS
    const customStyles = variant === "default"
        ? "bg-purple-600 text-white hover:bg-purple-700"
        : "border border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white"

    return (
        <button
            className={`${baseStyles} ${customStyles} ${className} px-4 py-2`}
            {...props}
        />
    )
}
