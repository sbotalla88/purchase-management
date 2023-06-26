import React from 'react';

const ComingSoonPage = () => {
    return (
        <div className="w-full  flex flex-col items-center  p-4 sm:p-8">
            <h3 className="mt-5 sm:mt-10 text-sub-heading text-xl md:text-2xl 3xl:text-3xl font-bold text-center">
                {'Coming Soon!'}
            </h3>
            {/* <p className="text-sm 3xl:text-xl text-body mt-2 text-center">
                <Link href="/location-events" className="ps-1 text-accent transition-colors hover:text-accent-hover">
                    {'Location events'}
                </Link>
            </p> */}
        </div>
    );
};

export default React.memo(ComingSoonPage);
