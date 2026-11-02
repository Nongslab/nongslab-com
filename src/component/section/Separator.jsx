import React from 'react';

const Separator = () => {
    const words = ['Web Development', 'UI/UX Design', 'Web Applications', 'SEO Strategy', 'Workflow Automation', 'Data Management'];
    const repeated = [...words, ...words, ...words, ...words];

    return (
        <div className="relative py-5 overflow-hidden border-y border-border">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex whitespace-nowrap" style={{ animation: 'marqueeScroll 30s linear infinite' }}>
                {repeated.map((word, i) => (
                    <React.Fragment key={`${word}-${i}`}>
                        <span className="text-xl md:text-3xl font-bold text-primary/60 mx-6 md:mx-10 select-none">{word}</span>
                        <span className="text-xl md:text-3xl text-primary/20 self-center select-none">&#9670;</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Separator;
