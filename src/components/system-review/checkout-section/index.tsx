import { twJoin } from 'tailwind-merge';

import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import PriceCard from '@/components/ui/price-card';

import useSecuritySystemStore from '@/store/security-system';

import SatisfactionBadgeImg from '@/assets/images/satisfaction-badge.png';

const SecuritySystemCheckoutSection = () => {
    const saveSecuritySystem = useSecuritySystemStore((state) => state.saveSecuritySystem);
    const totalPrice = useSecuritySystemStore((state) => state.totalPrice);
    const totalDiscount = useSecuritySystemStore((state) => state.totalDiscount);
    const totalPriceWithDiscount = Number((totalPrice - totalDiscount).toFixed(2));

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                <div
                    className={twJoin(
                        'flex gap-4',
                        'flex-row items-center justify-between',
                        'max-custom-xl:flex-col max-custom-xl:items-stretch',
                        'max-md:flex-row max-md:items-center max-md:justify-between',
                    )}
                >
                    <div className="flex items-center gap-6.25">
                        <div
                            className={twJoin(
                                'aspect-square w-19.5 shrink-0',
                                'max-custom-xl:w-32.75',
                                'max-lg:w-19.5',
                            )}
                        >
                            <img className="block" src={SatisfactionBadgeImg} alt="satisfaction-badge" />
                        </div>

                        <p
                            className={twJoin(
                                'hidden text-[18px] leading-[110%] font-normal tracking-[0.6px]',
                                'max-custom-xl:block',
                                'max-lg:text-[14px]',
                                'max-md:hidden',
                            )}
                        >
                            <span className="block pb-4 font-semibold">30-day hassle-free returns</span>
                            If you're not totally in love with the product, we will refund you 100%.
                        </p>
                    </div>

                    <div
                        className={twJoin(
                            'flex items-center justify-between gap-2',
                            'flex-col items-end',
                            'max-custom-xl:flex-row max-custom-xl:items-center',
                            'max-md:flex-col max-md:items-end',
                        )}
                    >
                        <Badge className="rounded-[3px] p-1.25">as low as $19.19/mo</Badge>

                        <PriceCard
                            price={totalPrice}
                            salePrice={totalPriceWithDiscount}
                            className="flex-row! gap-2!"
                            strikethroughPriceClassName="text-[18px]! leading-5! font-medium! tracking-[0.25%]!"
                            activePriceClassName="text-[24px]! leading-8! font-bold! tracking-[-0.13%]!"
                        />
                    </div>
                </div>

                <div className="space-y-1 pt-2.5">
                    <p
                        className={twJoin(
                            'text-highlighted-3 text-center text-[12px] leading-[100%] font-bold tracking-[-0.06px]',
                            'max-custom-xl:text-[14px] max-custom-xl:font-semibold',
                            'max-custom-sm:text-[12px] max-custom-sm:font-bold',
                        )}
                    >
                        Congrats! You’re saving ${totalDiscount} on your security bundle!
                    </p>

                    <Button className="font-tt-norms-pro bg-bg-2 w-full rounded-sm px-4 py-3.25 text-[14px] leading-[100%] font-bold text-white">
                        Checkout
                    </Button>
                </div>
            </div>

            <button
                className="text-text-3 w-full cursor-pointer text-center text-[14px] font-normal tracking-[-0.02px] italic underline"
                onClick={saveSecuritySystem}
            >
                save my system for later
            </button>
        </div>
    );
};

export default SecuritySystemCheckoutSection;
