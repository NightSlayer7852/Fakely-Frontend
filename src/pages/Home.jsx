import React from "react";
import { Shield, Eye, CheckCircle, AlertTriangle } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-full">
                            <Shield className="w-16 h-16 text-white" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Fakely</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">
                        Your go-to platform for authentic content verification.
                    </p>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Detect deepfakes, verify media authenticity, and protect yourself from misinformation with our advanced AI-powered detection system.
                    </p>
                    <div className="mt-10">
                        <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Start Detecting Now
                        </button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                        <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                            <Eye className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Advanced Detection
                        </h3>
                        <p className="text-gray-600">
                            Utilize cutting-edge AI algorithms to identify manipulated images, videos, and audio with high accuracy.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                        <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                            <CheckCircle className="w-8 h-8 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Instant Verification
                        </h3>
                        <p className="text-gray-600">
                            Get real-time results on content authenticity within seconds. Fast, reliable, and easy to use.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
                        <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                            <AlertTriangle className="w-8 h-8 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Risk Assessment
                        </h3>
                        <p className="text-gray-600">
                            Receive detailed reports with confidence scores and highlighted suspicious areas in your media.
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-10 text-white">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">99.2%</div>
                            <div className="text-orange-100">Detection Accuracy</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">500K+</div>
                            <div className="text-orange-100">Files Analyzed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">&lt;3s</div>
                            <div className="text-orange-100">Average Processing Time</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Ready to verify your content?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Join thousands of users protecting themselves from fake content.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                            Learn More
                        </button>
                        <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all shadow-md">
                            Upload File
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}