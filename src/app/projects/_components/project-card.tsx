import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-transparent bg-gray-800 opacity-70 transition hover:border-emerald-500 hover:opacity-100">
      <div className=" h-48 w-full overflow-hidden">
        <Image
          src={'https://fakeimg.pl/380x200'}
          width={380}
          height={200}
          alt="Thumbnail do projeto"
          unoptimized
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition group-hover:text-emerald-500">
          Title of project
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga id modi
          quibusdam officiis sit fugit magni est, voluptates assumenda harum nam ipsam
          dolore sunt non repellendus impedit, iusto ex.
        </p>
        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          NextJS, TailwindCSS, Typescript, Radix UI, File Uploader, Prisma,
          Authentication, Mux
        </span>
      </div>
    </div>
  )
}
