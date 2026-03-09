import React, { useState } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export default function EventModal({ isOpen, onClose, onAdd }) {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        link: "",
        type: "upcoming",
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!imageFile) {
            setError("Please upload an event image");
            setLoading(false);
            return;
        }

        try {
            const token = localStorage.getItem("token");

            const dataToSend = new FormData();
            dataToSend.append("title", formData.title);
            // Combine date and time for the display
            const formattedDate = new Date(formData.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
            }) + `, ${formData.time}`;

            dataToSend.append("date", formattedDate);
            dataToSend.append("link", formData.link);
            dataToSend.append("type", formData.type);
            dataToSend.append("image", imageFile);

            const response = await fetch("/api/events", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: dataToSend,
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Failed to add event");
            }

            onAdd(data.event);
            onClose();
            resetForm();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({ title: "", date: "", time: "", link: "", type: "upcoming" });
        setImageFile(null);
        setImagePreview(null);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
            <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Add New Event</h2>

                {error && (
                    <div className="bg-red-900/20 border border-red-900/50 text-red-500 px-4 py-3 rounded-lg text-sm mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-tight">Event Name</label>
                        <Input
                            required
                            placeholder="e.g. Beyond Boundaries: Azure AI"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 uppercase tracking-tight">Date</label>
                            <Input
                                required
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="appearance-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 uppercase tracking-tight">Time</label>
                            <Input
                                required
                                type="time"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-tight">Event Banner</label>
                        <div
                            className="relative group border-2 border-dashed border-zinc-800 rounded-xl p-4 transition hover:border-purple-500/50 hover:bg-purple-500/5 cursor-pointer"
                            onClick={() => document.getElementById('image-upload').click()}
                        >
                            <input
                                id="image-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {imagePreview ? (
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                        <Upload className="text-white" size={32} />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-6 text-zinc-500 gap-2">
                                    <ImageIcon size={40} />
                                    <p className="text-sm">Click to upload image</p>
                                    <p className="text-xs">PNG, JPG or JPEG up to 5MB</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-tight">Luma Link</label>
                        <Input
                            required
                            placeholder="https://luma.com/..."
                            value={formData.link}
                            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition mt-4 uppercase shadow-lg shadow-purple-600/20"
                    >
                        {loading ? "Creating Event..." : "Create Event"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
