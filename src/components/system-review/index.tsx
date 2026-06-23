import { twJoin } from 'tailwind-merge';

import SecuritySystemReviewSection from './review-section';
import SecuritySystemCheckoutSection from './checkout-section';

const SecuritySystemReview = () => {
    return (
        <div className="bg-bg-3 space-y-1.25 rounded-[10px] pt-4">
            <span
                className={twJoin(
                    'text-text-3 block px-4 text-[12px] leading-[100%] font-medium tracking-[1.6px] uppercase',
                    'max-custom-xl:hidden',
                )}
            >
                Review
            </span>

            <div
                className={twJoin(
                    'space-y-2.5 p-5 pb-8',
                    'max-custom-xl:grid max-custom-xl:grid-cols-[5fr_4.4fr] max-custom-xl:gap-13',
                    'max-md:block',
                )}
            >
                <div className="space-y-2.5">
                    <div className="space-y-1.25">
                        <h2
                            className={twJoin(
                                'text-[22px] leading-[100%] font-semibold tracking-[0.6px]',
                                'max-custom-xl:text-[28px]',
                                'max-md:text-[22px]',
                            )}
                        >
                            Your security system
                        </h2>

                        <p
                            className={twJoin(
                                'text-text-1/75 text-[14px] leading-[130%] font-medium tracking-[0.6px]',
                                'max-custom-xl:text-[16px]',
                                'max-md:text-[13px]',
                            )}
                        >
                            Review your personalized protection system designed to keep what matters most safe.
                        </p>
                    </div>

                    <div className="space-y-2.5">
                        <SecuritySystemReviewSection itemType="cameras" label="cameras" />
                        <SecuritySystemReviewSection itemType="sensors" label="sensors" />
                        <SecuritySystemReviewSection itemType="accessories" label="accessories" />
                        <SecuritySystemReviewSection itemType="plans" label="plan" />
                    </div>
                </div>

                <SecuritySystemCheckoutSection />
            </div>
        </div>
    );
};

export default SecuritySystemReview;
