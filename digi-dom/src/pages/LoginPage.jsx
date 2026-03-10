import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import { LogIn, Mail, Lock, AlertCircle } from "lucide-react"

function LoginForm() {
    const [searchParams] = useSearchParams()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
        } else if (errorParam === 'use_local_signin') {
            setError("This account was registered manually. Please sign in with your email and password.")
        } else if (errorParam === 'account_exists') {
            setError("An account already exists with this Google account. Please sign in.")
        } else if (errorParam === 'oauth_failed') {
            setError("Unable to sign in with Google. Please try again.")
        }
    }, [searchParams])

    const handleSignIn = async (e) => {
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

        try {
            const API_URL = import.meta.env.VITE_API_URL || "";
            const response = await fetch(`${API_URL}/api/auth/signin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Sign in failed")
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = "/"
        } catch (err) {
            console.error("Auth error", err)
            setError(err.message || "An error occurred during sign in")
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleLogin = () => {
        const API_URL = import.meta.env.VITE_API_URL || "";
        window.location.href = `${API_URL}/api/auth/google?signup=false`
    }

    return (
        <div
            className="h-screen overflow-hidden bg-black flex items-center justify-center p-4 pt-24 relative"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
            {/* Background glow effects */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] rounded-full bg-pink-600/5 blur-[100px] pointer-events-none" />

            {/* Modal Card */}
            <div className="relative w-full max-w-md bg-[#0e0e0e] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-8 space-y-6 z-10">

                {/* Header */}
                <div className="text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-3">
                        <LogIn className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
                    <p className="text-sm text-white/50">Sign in to continue your journey with Digital Dominators.</p>
                </div>

                {/* Error */}
                {error && (
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-colors text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="password" className="text-sm font-medium text-white/80">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-colors text-sm"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-11 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center gap-3">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-xs text-white/30 uppercase tracking-widest font-medium">or</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Google */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
                >
                    <img src="/icons/google-logo.png" alt="Google" width={18} height={18} />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-white/40">
                    Don't have an account?{" "}
                    <Link to="/sign-up" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="text-white">Loading...</div>}>
                <LoginForm />
            </Suspense>
        </>
    )
}
