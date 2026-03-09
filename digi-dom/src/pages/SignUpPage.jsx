import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"

function SignUpForm() {
    const [searchParams] = useSearchParams()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return {
            isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar,
            message: password.length < minLength
                ? "Password must be at least 8 characters"
                : !hasUpperCase || !hasLowerCase
                    ? "Password must contain uppercase and lowercase letters"
                    : !hasNumbers
                        ? "Password must contain at least one number"
                        : !hasSpecialChar
                            ? "Password must contain at least one special character"
                            : ""
        };
    };

    useEffect(() => {
        const errorParam = searchParams.get('error')
        if (errorParam === 'no_account') {
            setError("No account exists with this Google account. Please sign up first.")
        } else if (errorParam === 'local_account_exists') {
            setError("An account already exists with this email. Please sign in manually with your password.")
        } else if (errorParam === 'account_exists') {
            setError("An account already exists with this Google account. Please sign in instead.")
        } else if (errorParam === 'oauth_failed') {
            setError("Unable to sign up with Google. Please try again.")
        }
    }, [searchParams])

    const handleSignUp = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            setIsLoading(false);
            return;
        }

        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            setError(passwordValidation.message);
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Registration failed")
            }

            window.location.href = "/login"
        } catch (err) {
            console.error("Registration error", err)
            setError(err.message || "An error occurred during registration")
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleSignUp = () => {
        window.location.href = "/api/auth/google?signup=true"
    }

    return (
        <div className="flex min-h-screen pt-16 bg-black text-white" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
            {/* Left side - Visuals */}
            <div className="relative hidden lg:flex w-1/2 items-center justify-center overflow-hidden border-r border-zinc-800">
                <img
                    src="/signup-banner.png"
                    alt="Sign up banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side - Sign up form */}
            <div className="w-full lg:w-1/2 flex items-start justify-center px-8 py-8 md:p-12 bg-black overflow-y-auto h-[calc(100vh-4rem)]">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
                        <p className="mt-2 text-zinc-400">Welcome to Digital Dominators! Join the community to access events, resources, and exclusive updates.</p>
                    </div>

                    {error && (
                        <div className="bg-red-900/20 border border-red-900/50 text-red-500 px-4 py-3 rounded-lg text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium">
                                    First Name
                                </label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="John"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium">
                                    Last Name
                                </label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <p className="text-xs text-zinc-500 mt-1">
                                Must be 8+ characters with uppercase, lowercase, number, and special character
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-sm font-medium">
                                Confirm Password
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-11 text-base font-semibold shadow-md mt-4"
                        >
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="px-2 bg-black text-zinc-500 font-medium">Or register with</span>
                        </div>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        className="w-full h-11 gap-2 border-zinc-800 hover:bg-zinc-900"
                        onClick={handleGoogleSignUp}
                    >
                        <img src="/icons/google-logo.png" alt="Google" width={20} height={20} />
                        Google
                    </Button>

                    <p className="text-center text-sm text-zinc-400 pb-8">
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-500 hover:underline font-medium">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function SignUpPage() {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="text-white">Loading...</div>}>
                <SignUpForm />
            </Suspense>
        </>
    )
}
