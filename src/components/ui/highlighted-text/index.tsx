import type React from 'react';

const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
    const words = text.split(' ').filter((word) => !!word);

    return words.map((word, idx) => {
        const match = word.match(/%%(.*)%%/);

        return (
            <span key={idx} className={match ? 'text-highlighted-1' : undefined}>
                {match ? match[1] : word}
                {idx === words.length - 1 ? '' : ' '}
            </span>
        );
    });
};

export default HighlightedText;
