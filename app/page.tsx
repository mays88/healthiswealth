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
        description: "Hand-cut, preserved natural flavor",
    },
    {
        id: 6,
        name: "Brooklyn Biltlong Jerky",
        img: BrooklynJerky,
        description: "Never Cooked, Naturally Tender",
    },
    {
        id: 7,
        name: "Hint Water",
        img: Hint,
        description: "Water Infused with Fruit Essences",
    },
    {
        id: 8,
        name: "Poppi Prebiotic Soda",
        img: Poppi,
        description: "Soda's Back, but Better",
    },
    { id: 9, name: "RxBar", img: RxBar, description: "Less is more delicious" },
    {
        id: 10,
        name: "Organic Fruit Chews",
        img: OrgChews,
        description: "Twisted Fruit Bites",
    },
    {
        id: 11,
        name: "Prevail Jerky",
        img: PrevailJerky,
        description: "No preservatives, no compromise",
    },
    {
        id: 12,
        name: "OliPop",
        img: OliPop,
        description: "Healthy Meets Delicious",
    },
    {
        id: 13,
        name: "That's It Bars",
        img: ThatsItBars,
        description: "Real Fruit Bars",
    },
    {
        id: 14,
        name: "Pure Organic Fruit Bars",
        img: PureOrgBars,
        description: "Too good to be this good",
    },
    {
        id: 15,
        name: "StoneyField Smoothies",
        img: StoneySmoothies,
        description: "Good on purpose",
    },
    {
        id: 16,
        name: "LesserEvil Popcorn",
        img: LesserEvil,
        description: "Simple Acts, Clean Snacks",
    },
    {
        id: 17,
        name: "Smash Foods Jam",
        img: SmashFoods,
        description: "Reinvented jam",
    },
    {
        id: 18,
        name: "Seven Sunday Snackies",
        img: SevenSunday,
        description: "Eat Real Food",
    },
    {
        id: 19,
        name: "All Wello Juice",
        img: AllWello,
        description: "Organic, All Natural",
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const heroText: Variants = {
    hidden: { opacity: 0, y: -8 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "circOut" },
    },
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
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
            {/* NAVBAR */}
            <motion.nav
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-gray-200">
                <div className="flex items-center justify-between px-4 sm:px-6 py-3">
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
                className="w-full h-full relative overflow-hidden pt-28 pb-12 px-4">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={heroText}
                        className="w-full">
                        <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.youtube.com/embed/APj9YQ5J0mo"
                                allowFullScreen
                                title="YouTube Video Player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="w-full h-full"
                            />
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-6 text-black/80">
                            Health Is Wealth
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-black/60 max-w-2xl mx-auto">
                            Modern vending with smart, healthy options for
                            schools, offices, gyms, and community spaces.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg shadow font-medium">
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PRODUCT SCROLLER */}
            <section id="products" className="py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-extrabold">
                        Curated Healthy Picks
                    </motion.h2>
                    <p className="text-gray-600 mt-2 max-w-xl">
                        Hand-picked snacks and drinks designed to fuel focus and
                        wellness.
                    </p>

                    <div className="mt-8 relative">
                        {/* Left button */}
                        <button
                            onClick={() => scroll(-1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hidden sm:block">
                            ‹
                        </button>

                        {/* Horizontal scroll */}
                        <div
                            ref={rowRef}
                            className="overflow-x-auto no-scrollbar px-2 scroll-smooth">
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex gap-6 py-6">
                                {products.map((p) => (
                                    <motion.div
                                        key={p.id}
                                        variants={fadeUp}
                                        className="min-w-[200px] sm:min-w-[240px] bg-white rounded-2xl shadow p-4">
                                        <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                                            <Image
                                                src={p.img}
                                                alt={p.name}
                                                width={400}
                                                height={400}
                                                className="w-full h-full object-cover"
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

                        {/* Right button */}
                        <button
                            onClick={() => scroll(1)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hidden sm:block">
                            ›
                        </button>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeUp}
                        viewport={{ once: true }}>
                        <Image
                            src={Owner}
                            alt="Owner"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}>
                        <h3 className="text-2xl sm:text-3xl font-extrabold">
                            About Us
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We make healthy choices easier by bringing smart
                            vending solutions to schools, fitness centers, and
                            workplaces. Transparent labeling, allergy-friendly
                            options, and contactless tech included.
                        </p>

                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                            <li>• Locally-sourced when possible</li>
                            <li>• Touchless payments</li>
                            <li>• Routine restock & hygiene checks</li>
                            <li>• Flexible partnership terms</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.h3
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl font-extrabold">
                        Contact & Requests
                    </motion.h3>

                    <p className="mt-2 text-gray-600">
                        Tell us about your location and we’ll recommend the
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

                        <div className="mt-4 flex flex-wrap gap-3">
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
                <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Health Is Wealth — Healthy
                    vending solutions
                </div>
            </footer>
        </main>
    );
};

export default Page;
