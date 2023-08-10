interface TitleProps {
  title: string;
  subTitle: string;
  counter: null | string;
}
export function Header({ title, subTitle, counter = null }: TitleProps) {
  return (
    <div className="mb-6">
      <div>
        <div className="flex items-center gap-4">
          <span className="w-[10px] h-10 bg-orange-secondary rounded-lg" />
          <span className=" font-semibold leading-tight text-orange-secondary">
            {subTitle}
          </span>
        </div>

        <h1 className="font-semibold text-3xl leading-tight tracking-[1.44px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
