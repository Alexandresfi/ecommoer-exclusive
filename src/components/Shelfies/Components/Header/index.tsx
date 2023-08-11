import { OfferCounter } from '../Counter';

interface TitleProps {
  title: string;
  subTitle: string;
  counter?: boolean;
}
export function Header({ title, subTitle, counter = false }: TitleProps) {
  return (
    <div className="mb-6 max-w-container m-auto">
      <div className="flex items-center flex-wrap gap-x-20">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-4">
            <span className="w-[10px] h-[20px] bg-orange-secondary rounded-lg" />
            <span className=" font-semibold leading-tight text-orange-secondary text-xs">
              {subTitle}
            </span>
          </div>

          <h1 className="font-semibold text-xl lg:text-3xl leading-tight tracking-[1.44px]">
            {title}
          </h1>
        </div>
        {counter ? <OfferCounter /> : null}
      </div>
    </div>
  );
}
