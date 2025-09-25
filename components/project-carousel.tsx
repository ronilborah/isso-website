"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Project = {
    title: string;
    image: string;
    longDescription?: string;
};

export const ProjectCarousel = ({
    projects,
    autoplay = false,
}: {
    projects: Project[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleThumbnailClick = (index: number) => {
        setActive(index);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 6000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    return (
        <div className="relative w-full bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden rounded-3xl border border-border/50">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 z-10" />

            {/* Main content */}
            <div className="relative z-20 flex flex-col min-h-[600px] lg:min-h-[700px]">
                {/* Top section - Main carousel */}
                <div className="flex-1 flex flex-col lg:flex-row">
                    {/* Left side - Project info */}
                    <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="space-y-6"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center gap-3"
                                >
                                    <p className="text-muted-foreground text-sm font-medium tracking-wide">
                                        Featured Project
                                    </p>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
                                >
                                    {projects[active].title.split(' ').map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.4 + (index * 0.1),
                                                duration: 0.6,
                                                ease: "easeOut"
                                            }}
                                            className="inline-block mr-3"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.h1>

                                {projects[active].longDescription && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-lg"
                                    >
                                        {projects[active].longDescription.split('\n').map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                {index < projects[active].longDescription!.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </motion.div>
                                )}


                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex gap-4 mt-8"
                        >
                            <button
                                onClick={handlePrev}
                                className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                <IconArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                <IconArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right side - Project image */}
                    <div className="flex-1 relative flex items-center justify-center p-8">
                        <div className="relative w-full max-w-lg">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
                                    <img
                                        src={projects[active].image}
                                        alt={projects[active].title}
                                        className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/10 border border-border/20"
                                        draggable={false}
                                    />

                                    {/* Spotlight effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/30 rounded-2xl" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Background geometric shapes */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/10 rounded-full blur-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>
        </div>
    );
};