import React from "react";
import { X, AlertTriangle } from "lucide-react";
import { Button } from "./button";

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, loading }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
            <div className="relative w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition"
                >
                    <X size={24} />
                </button>

                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-900/20 border border-red-900/50 rounded-full flex items-center justify-center text-red-500">
                        <AlertTriangle size={32} />
                    </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">Delete Event?</h2>
                <p className="text-zinc-400 mb-8">
                    Are you sure you want to delete this event? This action cannot be undone.
                </p>

                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="flex-1 h-11 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900"
                        onClick={onClose}
                        disabled={loading}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="flex-1 h-11 bg-red-600 hover:bg-red-700 text-white font-bold"
                        onClick={onConfirm}
                        disabled={loading}
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
