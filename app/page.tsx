// app/page.tsx
"use client";

import { FC, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import BlackEdition from "@/products/BlackEdition.png";
import Noka from "@/products/Noka.png";
import Chompz from "@/products/chomps.png";
import Essentia from "@/products/essentia.png";
import Hint from "@/products/Hint.png";
import Poppi from "@/products/poppi.png";
import Owner from "@/products/owner.png";
import SevenSunday from "@/products/7sunday.png";
import BrooklynJerky from "@/products/BrooklynJerky.png";
import RxBar from "@/products/RxBar.png";
import AllWello from "@/products/allwello.png";
import LesserEvil from "@/products/lesserevil.png";
import OliPop from "@/products/olipop.png";
import OrgChews from "@/products/organicchews.png";
import PrevailJerky from "@/products/prevailjerky.png";
import PureOrgBars from "@/products/pureorganicfruitbars.png";
import SalmonJerky from "@/products/salmonjerky.png";
import SmashFoods from "@/products/smashfoods.png";
import StoneySmoothies from "@/products/stoneysmoothies.png";
import ThatsItBars from "@/products/thatsitbars.png";
import MidBanner from "@/products/midbanner.png";

const products = [
    {
        id: 1,
        name: "Huel - Black Edition",
        img: BlackEdition,
        description: "No prep, no blender, no slowing down.",
    },
    {
        id: 2,
        name: "Noka - Superfood Smoothie",
        img: Noka,
        description: "Healthy snacks for adults and kids",
    },
    {
        id: 3,
        name: "Chomps - Beef Stick",
        img: Chompz,
        description: "Grassfed and Finished Beef",
    },
    {
        id: 4,
        name: "Essentia - Hydroboost",
        img: Essentia,
        description: "Supercharged Hydration",
    },
    {
        id: 5,
        name: "KAIMANA Salmon Jerky",
        img: SalmonJerky,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 6,
        name: "Brooklyn Biltlong Jerky",
        img: BrooklynJerky,
        description: "Soda's Back, but Better",
    },
    {
        id: 7,
        name: "Hint - Fall in love with water",
        img: Hint,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 8,
        name: "Poppi - Prebiotic Soda",
        img: Poppi,
        description: "Soda's Back, but Better",
    },
    {
        id: 9,
        name: "RxBar",
        img: RxBar,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 10,
        name: "Organic Fruit Chews",
        img: OrgChews,
        description: "Soda's Back, but Better",
    },
    {
        id: 11,
        name: "Prevail Jerky",
        img: PrevailJerky,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 12,
        name: "OliPop",
        img: OliPop,
        description: "Soda's Back, but Better",
    },
    {
        id: 13,
        name: "That's It Bars",
        img: ThatsItBars,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 14,
        name: "Pure Organic Fruit Bars",
        img: PureOrgBars,
        description: "Soda's Back, but Better",
    },
    {
        id: 15,
        name: "StoneyField Organic Smoothie",
        img: StoneySmoothies,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 16,
        name: "Lesserevil Popcorn",
        img: LesserEvil,
        description: "Soda's Back, but Better",
    },
    {
        id: 17,
        name: "Smash Foods",
        img: SmashFoods,
        description: "Soda's Back, but Better",
    },
    {
        id: 18,
        name: "SevenSunday Cereal Snackies",
        img: SevenSunday,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 19,
        name: "All Wello Cold Pressed Juice",
        img: AllWello,
        description: "Soda's Back, but Better",
    },
];

const container: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const heroText: Variants = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } },
};

const Page: FC = () => {
    const rowRef = useRef<HTMLDivElement | null>(null);

    const scroll = (dir: number) => {
        if (!rowRef.current) return;
        const width = rowRef.current.clientWidth;
        rowRef.current.scrollBy({
            left: dir * (width * 0.6),
            behavior: "smooth",
        });
    };

    return (
        <main className="min-h-screen bg-linear-to-b from-white to-gray-50 text-gray-900">
            {/* NAVBAR */}
            <motion.nav
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-gray-200">
                <div className="flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold shadow">
                            HIW
                        </div>
                        <div>
                            <span className="block font-semibold text-sm">
                                Health Is Wealth
                            </span>
                            <span className="block text-xs text-gray-500">
                                Healthy vending solutions
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-6 items-center text-sm">
                        <a href="#products" className="hover:text-gray-700">
                            Products
                        </a>
                        <a href="#about" className="hover:text-gray-700">
                            About
                        </a>
                        <a href="#contact" className="hover:text-gray-700">
                            Contact
                        </a>
                        <a
                            href="#contact"
                            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:brightness-95">
                            Order a Machine
                        </a>
                    </div>
                </div>
            </motion.nav>

            {/* HERO */}
            <section
                id="hero"
                className="w-full h-full relative overflow-hidden mb-10">
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-white/0 " />

                <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={heroText}
                        className="max-w-2xl mt-24">
                        <iframe
                            src="https://www.youtube.com/embed/APj9YQ5J0mo" // Replace VIDEO_ID with the actual YouTube video ID
                            allowFullScreen
                            title="YouTube Video Player" // Add a descriptive title for accessibility
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="w-full h-[250px] sm:h-[500px] md:h-[400px] lg:h-[600px]"
                        />
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black/80 drop-shadow-lg ">
                            Health Is Wealth
                        </h1>
                        <p className="mt-4 text-lg text-black/50 max-w-xl drop-shadow">
                            Modern vending, curated for healthy choices. We
                            install and manage smart vending machines stocked
                            with organic, high-protein, and low-sugar snacks for
                            schools, offices, gyms, and community spaces.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 bg-black text-white/90 px-5 py-3 rounded-lg font-medium shadow hover:scale-[1.01] transition">
                                Get a Quote
                            </a>
                            {/* <a
                                href="#products"
                                className="inline-flex items-center gap-3 border border-black/60 text-black px-4 py-3 rounded-lg backdrop-blur-sm hover:opacity-90 transition">
                                See Products
                            </a> */}
                        </div>
                    </motion.div>
                </div>

                {/* subtle overlay graphic */}
                <motion.div
                    aria-hidden
                    initial={{ opacity: 0.08, scale: 1 }}
                    animate={{ opacity: 0.08, scale: 1.02 }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"
                />
            </section>

            {/* PRODUCTS ROW */}
            <section id="products" className="">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold text-gray-800">
                        Curated Healthy Picks
                    </motion.h2>
                    <p className="mt-2 text-gray-600 max-w-2xl">
                        Hand-picked snacks and drinks designed to fuel focus and
                        wellness.
                    </p>

                    <div className="mt-8 relative">
                        <button
                            aria-label="scroll left"
                            onClick={() => scroll(-1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow">
                            ‹
                        </button>

                        <div
                            ref={rowRef}
                            className="overflow-x-auto no-scrollbar scroll-smooth px-4">
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex gap-6 py-6 items-stretch">
                                {products.map((p) => (
                                    <motion.div
                                        key={p.id}
                                        variants={fadeUp}
                                        className="min-w-[220px] bg-white rounded-2xl shadow-md p-4 shrink-0">
                                        <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100">
                                            <Image
                                                src={p.img}
                                                alt={p.name}
                                                className="w-full h-full object-cover"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <h3 className="mt-3 font-semibold text-gray-800">
                                            {p.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {p.description}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-sm font-medium text-green-600">
                                                In machine
                                            </span>
                                            <button className="text-sm bg-green-600 text-white px-3 py-1 rounded-lg">
                                                Select
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        <button
                            aria-label="scroll right"
                            onClick={() => scroll(1)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow">
                            ›
                        </button>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeUp}
                        viewport={{ once: true }}>
                        <Image
                            src={Owner}
                            alt="Owner"
                            className="rounded-2xl shadow-lg w-full h-[-50%] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="">
                        <h3 className="text-2xl font-extrabold">About Us</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Health Is Wealth was founded to make healthy choices
                            easier and more accessible. As a community-focused
                            operator, we partner with schools, fitness centers,
                            and local businesses to offer transparent nutrition
                            labeling, allergy-friendly options, and smart
                            payment tech.
                        </p>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                            <li>• Locally-sourced selections when possible</li>
                            <li>• Cashless & contactless payments</li>
                            <li>• Routine restock & hygiene checks</li>
                            <li>• Flexible partnership terms</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.h3
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl font-extrabold">
                        Contact & Requests
                    </motion.h3>
                    <p className="mt-2 text-gray-600">
                        Tell us about your location and we&apos;ll recommend the
                        right machine and product mix.
                    </p>

                    <motion.form
                        initial="hidden"
                        whileInView="show"
                        variants={container}
                        viewport={{ once: true }}
                        className="mt-6 bg-white rounded-2xl p-6 shadow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.input
                                variants={fadeUp}
                                placeholder="Full name"
                                className="p-3 border rounded-lg"
                            />
                            <motion.input
                                variants={fadeUp}
                                placeholder="Email"
                                type="email"
                                className="p-3 border rounded-lg"
                            />
                            <motion.select
                                variants={fadeUp}
                                className="p-3 border rounded-lg">
                                <option>Inquiry Type</option>
                                <option>Place a Machine</option>
                                <option>Request Product Mix</option>
                                <option>Partnership</option>
                            </motion.select>
                            <motion.input
                                variants={fadeUp}
                                placeholder="Location (City, School, Office)"
                                className="p-3 border rounded-lg"
                            />
                        </div>

                        <motion.textarea
                            variants={fadeUp}
                            placeholder="Message"
                            rows={5}
                            className="w-full mt-4 p-3 border rounded-lg"
                        />

                        <div className="mt-4 flex gap-3">
                            <motion.button
                                variants={fadeUp}
                                type="submit"
                                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow">
                                Send Request
                            </motion.button>
                            <motion.button
                                variants={fadeUp}
                                type="button"
                                className="px-6 py-3 border rounded-lg">
                                Call: (555) 123-4567
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 border-t">
                <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Health Is Wealth — Healthy
                    vending solutions • Privacy • Terms
                </div>
            </footer>
        </main>
    );
};

export default Page;
