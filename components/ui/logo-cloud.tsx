import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  name: string;
  url?: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={24} reverse speed={30} speedOnHover={60}>
        {logos.map((logo) => {
          const content = (
            <>
              <img
                alt={logo.alt}
                className="pointer-events-none h-6 w-6 md:h-8 md:w-8 select-none"
                height={logo.height || 24}
                loading="lazy"
                src={logo.src}
                width={logo.width || 24}
              />
              <span className="text-slate-300 font-mono text-xs md:text-sm uppercase tracking-wider whitespace-nowrap">
                {logo.name}
              </span>
            </>
          );

          return logo.url ? (
            <a
              key={`logo-${logo.alt}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-all cursor-pointer"
            >
              {content}
            </a>
          ) : (
            <div
              key={`logo-${logo.alt}`}
              className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              {content}
            </div>
          );
        })}
      </InfiniteSlider>
    </div>
  );
}