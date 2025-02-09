
import Image from 'next/image';


const Hero115 = ({
  // icon = <Pen className="size-6" />,
  heading = '"Your Daily Writing Prompt"',
  description = "Open up your mind. Visualise. Let it flow. Start typing... ",
  // button = {
  //   text: "Discover Features",
  //   icon: <Pen className="ml-2 size-4" />,
  //   url: "https://www.shadcnblocks.com",
  // },
  trustText = "Create a personal entry or share your writing with the others.",
  // imageSrc = "https://shadcnblocks.com/images/block/placeholder-1.svg",
  // imageAlt = "placeholder",
}) => {
  return (
    <section className="overflow-hidden pt-32 ">
      <div className="container mx-auto max-w-7xl px-4" >
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col items-center justify-center gap-5">
            <Image
              priority
              src="/images/quill.svg" 
              height={48}
              width={48}
              alt="quill pen drawing a line"
              />
          
            {/* <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
              {icon}
            </span> */}
            <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-medium md:text-6xl">
              {heading}
            </h2>
            <p className="mx-auto text-blue-700 max-w-screen-md text-center text-muted-foreground md:text-xl">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pb-2 pt-3">
              {/* <Button size="lg" asChild>
                <a href={button.url}>
                  {button.text} {button.icon}
                </a>
              </Button> */}
              {trustText && (
                <div className="text-sm text-muted-foreground">{trustText}</div>
              )}
            </div>
          </div>
          {/* <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto h-full max-h-[524px] w-full max-w-screen-lg rounded-2xl object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero115;



