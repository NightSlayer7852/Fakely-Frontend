// src/components/Sidebar.jsx

import React from 'react';

export default function Sidebar({ reviews, onSearchChange, searchTerm, isListLoading }) {
    const displayReviews = reviews || [];

    return (
        <div className={`w-75 bg-base-300 border-r border-base-300 flex flex-col h-full  p-4 shadow-lg`}>

            <div className="mb-6 pb-2">
                <h3 className={`text-lg font-semibold text-primary mb-2`}>Search Reviews</h3>
                <input
                    type="text"
                    placeholder="Filter by title or content..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={`input input-primary`}
                />
            </div>
            <h3 className={`text-lg font-semibold mb-3 pb-1 text-primary`}>Your Past Reviews</h3>

            <div className="grow overflow-y-auto">

                {isListLoading && <p className={`text-center text-accent`}>Loading reviews...</p>}

                {!isListLoading && displayReviews.length === 0 && (
                    <p className={`text-secondary-content text-sm italic`}>
                        No matching reviews found.
                    </p>
                )}

                <ul className="space-y-3">
                    {displayReviews.map((review) => {
                        const uniqueModalId = `review_modal_${review.id}`;

                        return (
                            <li
                                key={review.id}
                                className={`p-3 text-sm rounded-lg bg-secondary shadow-sm hover:bg-accent cursor-pointer transition-colors border border-base-300 text-accent-content`}
                                onClick={() => document.getElementById(uniqueModalId).showModal()}
                            >
                            <p className={`font-bold text-secondary-content truncate`}>{review.title}</p>
                            <p className={`text-secondary-content truncate`}>{review.text.substring(0, 40)}...</p>
                            
                                
                                <dialog id={uniqueModalId} className="modal ">
                                    <div className="modal-box ">
                                        <div className='motion-scale-in-[0.5] motion-translate-x-in-[-40%] motion-translate-y-in-[37%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate'>
                                        <h3 className="font-bold text-lg">{review.title}</h3>
                                        <p className="py-4">{review.text}</p>
                                        <p className="text-xs text-primary">
                                            Fake status: {review.is_fake ? 'DETECTED' : 'Genuine'}
                                            </p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </li>
                        );
                    })}
                </ul>

            </div>

        </div>
    );
}