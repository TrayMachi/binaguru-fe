import {
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    CheckCircle,
    GraduationCap,
    Lightbulb,
    Play,
    Star,
    Target,
    Users,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { getAsset } from "~/lib/getAsset";

export default function LandingModule() {
    const features = [
        {
            icon: <Brain className="w-12 h-12 text-tosca-500" />,
            title: "Pelatihan Berbasis AI",
            description: "Sistem pembelajaran adaptif yang menyesuaikan dengan kebutuhan dan kemampuan setiap guru.",
        },
        {
            icon: <Users className="w-12 h-12 text-tosca-500" />,
            title: "Komunitas Kolaboratif",
            description:
                "Bergabung dengan ribuan guru di seluruh Indonesia untuk berbagi pengalaman dan best practices.",
        },
        {
            icon: <BookOpen className="w-12 h-12 text-tosca-500" />,
            title: "RPP Generator",
            description: "Tool canggih untuk membuat Rencana Pelaksanaan Pembelajaran dengan mudah dan cepat.",
        },
        {
            icon: <Award className="w-12 h-12 text-tosca-500" />,
            title: "Sertifikasi Resmi",
            description: "Dapatkan sertifikat yang diakui untuk setiap pelatihan yang berhasil Anda selesaikan.",
        },
    ];

    const stats = [
        { number: "10,000+", label: "Guru Terdaftar" },
        { number: "500+", label: "Kursus Tersedia" },
        { number: "95%", label: "Tingkat Kepuasan" },
        { number: "50+", label: "Kota Terjangkau" },
    ];

    const testimonials = [
        {
            name: "Sari Indrayani",
            role: "Guru SD Negeri 1 Jakarta",
            content:
                "BinaGuru benar-benar mengubah cara saya mengajar. Platform ini sangat mudah digunakan dan materinya sangat relevan.",
            rating: 5,
        },
        {
            name: "Ahmad Rizki",
            role: "Guru SMP Negeri 5 Bandung",
            content:
                "Fitur RPP Generator sangat membantu saya dalam menyiapkan pembelajaran. Hemat waktu dan lebih efektif.",
            rating: 5,
        },
        {
            name: "Dewi Lestari",
            role: "Guru SMA Negeri 3 Surabaya",
            content:
                "Komunitas di BinaGuru sangat supportif. Saya bisa belajar dari pengalaman guru-guru lain di seluruh Indonesia.",
            rating: 5,
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tosca-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-tosca-100/20 to-yellow-100/20 dark:from-gray-800/20 dark:to-gray-700/20"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-tosca-100 dark:bg-tosca-900 text-tosca-700 dark:text-tosca-300 text-sm font-medium mb-6">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            Platform Edukasi Terdepan
                        </div>

                        <h1 className="font-suez text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900 dark:text-white mb-6">
                            Bangun masa depan pendidikan bersama <span className="text-yellow-500">Bina</span>
                            <span className="text-tosca-500">Guru</span>
                        </h1>

                        <p className="font-space text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            BinaGuru hadir untuk mempercepat transformasi guru dengan teknologi, pelatihan berbasis AI,
                            dan komunitas kolaboratif yang powerful.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <Link to="/course">
                                <Button size="default" className="w-full sm:w-auto text-lg px-8 py-4">
                                    <Play className="w-5 h-5 mr-2" />
                                    Mulai Pelatihan
                                </Button>
                            </Link>
                            <Link to="/rpp">
                                <Button
                                    variant="secondary"
                                    size="default"
                                    className="w-full sm:w-auto text-lg px-8 py-4"
                                >
                                    <Target className="w-5 h-5 mr-2" />
                                    Buat RPP
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-tosca-500" />
                                <span>Gratis untuk memulai</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-tosca-500" />
                                <span>Sertifikat resmi</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-tosca-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-suez text-3xl md:text-4xl lg:text-5xl text-tosca-600 dark:text-tosca-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="font-space text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-suez text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                            Mengapa Memilih <span className="text-tosca-500">BinaGuru</span>?
                        </h2>
                        <p className="font-space text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Platform komprehensif yang dirancang khusus untuk mengembangkan kompetensi guru di era
                            digital
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="font-space text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="font-space text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-suez text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                            Kata Mereka Tentang <span className="text-tosca-500">BinaGuru</span>
                        </h2>
                        <p className="font-space text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Ribuan guru telah merasakan transformasi dalam cara mengajar mereka
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="font-space text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="font-space font-bold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </div>
                                    <div className="font-space text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-tosca-500 to-tosca-600 dark:from-tosca-600 dark:to-tosca-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-suez text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                        Siap Untuk Memulai Transformasi?
                    </h2>
                    <p className="font-space text-lg md:text-xl text-tosca-100 mb-8 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan guru lainnya dan rasakan pengalaman belajar yang tidak akan pernah
                        Anda lupakan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register">
                            <Button variant="secondary" size="default" className="w-full sm:w-auto text-lg px-8 py-4">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Daftar Sekarang
                            </Button>
                        </Link>
                        <Link to="/course">
                            <Button
                                variant="ghost"
                                size="default"
                                className="w-full sm:w-auto text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-tosca-600"
                            >
                                Lihat Kursus
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
