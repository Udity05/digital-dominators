import React, { useState } from "react";
import { Star, Upload, X, MessageSquare } from "lucide-react";

const AVATAR_OPTIONS = [
    "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix",
    "https://api.dicebear.com/9.x/avataaars/svg?seed=Anita",
    "https://api.dicebear.com/9.x/avataaars/svg?seed=George",
    "https://api.dicebear.com/9.x/avataaars/svg?seed=Mia",
    "https://api.dicebear.com/9.x/avataaars/svg?seed=Oscar",
    "https://api.dicebear.com/9.x/avataaars/svg?seed=Bella"
];

export default function FeedbackModal({ isOpen, onClose, onAuthRequired }) {
    const [rating, setRating] = useState(5);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [selectedAvatar, setSelectedAvatar] = useState("");
    const [customImage, setCustomImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCustomImage(file);
            setImagePreview(URL.createObjectURL(file));
            setSelectedAvatar(""); // Reset preset selection
        }
    };

    const handleAvatarSelect = (url) => {
        setSelectedAvatar(url);
        setCustomImage(null);
        setImagePreview("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !role || !feedback) {
            alert("Please fill in all required fields.");
            return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
            if (onAuthRequired) onAuthRequired();
            return;
        }

        setIsSubmitting(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL || "";
            const formData = new FormData();
            formData.append("name", name);
            formData.append("role", role);
            formData.append("text", feedback);
            formData.append("rating", rating);

            if (customImage) {
                formData.append("image", customImage);
            } else if (selectedAvatar) {
                formData.append("avatar", selectedAvatar);
            }

            const response = await fetch(`${API_URL}/api/testimonials`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                alert("Thank you for your feedback!");
                onClose();
                window.location.reload(); // Refresh to see the new testimonial
            } else {
                alert(data.message || "Failed to submit feedback.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto font-['GoogleSans']">
            <div
                className="relative bg-[#0A0809] border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 text-white"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="text-purple-500" size={28} />
                    <h2 className="text-2xl md:text-3xl font-bold">Share Your Experience</h2>
                </div>
                <p className="text-white/60 mb-8">
                    We'd love to hear about your experience with our community. Your feedback helps us grow.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Rating <span className="text-purple-500">*</span>
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoveredStar(star)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star
                                        size={32}
                                        className={`${(hoveredStar || rating) >= star ? "fill-purple-500 text-purple-500" : "fill-none text-white/20"} transition-colors`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Profile Image <span className="text-purple-500">*</span>
                        </label>
                        <div className="flex flex-col md:flex-row gap-6 mb-4">
                            <div className="w-24 h-24 shrink-0 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center overflow-hidden bg-white/5">
                                {(imagePreview || selectedAvatar) ? (
                                    <img src={imagePreview || selectedAvatar} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <Upload className="text-white/40" size={24} />
                                )}
                            </div>
                            <div className="flex flex-col justify-center gap-3">
                                <span className="text-sm text-white/60">Choose from avatars or upload your own</span>
                                <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 w-fit transition-colors">
                                    <Upload size={16} />
                                    <span className="text-sm font-semibold">Upload Image</span>
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                </label>
                            </div>
                        </div>

                        <p className="text-sm text-white/40 mb-2">Or choose an avatar:</p>
                        <div className="flex flex-wrap gap-3">
                            {AVATAR_OPTIONS.map((url, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => handleAvatarSelect(url)}
                                    className={`block p-0 w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 transition-all ${selectedAvatar === url ? 'border-purple-500 scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={url} alt={`Avatar option ${i}`} className="block w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Your Name <span className="text-purple-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#131112] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Your Role <span className="text-purple-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., Hackathon Teammate, Student, Mentor"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full bg-[#131112] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                    </div>

                    {/* Feedback Textarea */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Your Feedback <span className="text-purple-500">*</span>
                        </label>
                        <textarea
                            placeholder="Share your experience with us..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            rows="4"
                            className="w-full bg-[#131112] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Testimonial"}
                    </button>
                </form>
            </div>
        </div>
    );
}
