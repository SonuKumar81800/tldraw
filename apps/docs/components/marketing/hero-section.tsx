import { Button } from '@/components/common/button'
import { Demo } from '@/components/marketing/demo'

export function HeroSection() {
	return (
		<section className="w-full max-w-screen-xl mx-auto md:px-5 flex flex-col items-center pt-8 sm:pt-16">
			<div className="relative">
				<h1 className="relative font-black text-black dark:text-white text-center text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight w-full px-[8px]">
					The infinite&nbsp;canvas&nbsp;SDK
					<br />
					for React developers
				</h1>
				{/* <Underline
                className={cn(
                    'pointer-events-none text-blue-500 absolute',
                    'w-64 left-2 top-[4.1rem]',
                    'sm:w-80 sm:left-auto sm:right-2 sm:top-8',
                    'md:w-[26rem] md:right-4 md:top-11'
                )}
            /> */}
			</div>
			{/* <div className="mt-5 sm:mt-8 flex items-center gap-3">
                <ul className="flex">
                    {avatars.map((avatar, index) => (
                        <li
                            key={index}
                            className="relative size-8 sm:size-10 border-2 border-white dark:border-zinc-950 rounded-full overflow-hidden -ml-2 first-of-type:ml-0"
                        >
                            <Image
                                src={avatar}
                                alt={`Tldraw user ${index}`}
                                fill
                                className="object-cover object-center"
                            />
                        </li>
                    ))}
                </ul>
                <div className="max-w-32 leading-tight text-xs sm:max-w-40 sm:text-sm sm:leading-tight">
                    Loved by <span className="text-black dark:text-white font-semibold">5000+</span>{' '}
                    developers and users.
                </div>
            </div> */}
			<p className="mt-5 sm:mt-8 px-5 text-center text-zinc-800 dark:text-zinc-200 sm:text-lg max-w-xl">
				Whether you need a drop in whiteboard or an engine for your web canvas, the{' '}
				<b>tldraw SDK</b> provides the components, APIs, and services to get you there.
			</p>
			<div className="flex flex-row items-center sm:items-start sm:flex-row gap-x-4 gap-y-2 mt-6 sm:mt-9 flex-wrap justify-center sm:max-width-xl">
				<Button href="/quick-start" caption="Get started" type="black" size="lg" />
				<Button
					href="https://github.com/tldraw/tldraw"
					caption="GitHub"
					type="tertiary"
					size="lg"
					icon="github"
					newTab
				/>
				{/* <div className="pt-2">
                <div className="font-hand text-blue-500 text-lg">or try here</div>
                <ArrowDown className="h-14 text-blue-500 ml-auto -mt-2 -mr-6" animationDelay={1.2} />
            </div> */}
			</div>
			<Demo />
		</section>
	)
}

// const avatars = [
// 	'https://i.pravatar.cc/300?img=1',
// 	'https://i.pravatar.cc/300?img=2',
// 	'https://i.pravatar.cc/300?img=3',
// 	'https://i.pravatar.cc/300?img=4',
// 	'https://i.pravatar.cc/300?img=5',
// ]
