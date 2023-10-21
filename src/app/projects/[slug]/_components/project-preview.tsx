import Image from 'next/image'

const previews = [
  { title: 'Home', imageUrl: 'https://fakeimg.pl/1080x672/333333/c2c2c2' },
  { title: 'Login', imageUrl: 'https://fakeimg.pl/1080x672/333333/c2c2c2' },
]

export function ProjectPreview() {
  return (
    <section className="container my-12  px-4 md:my-32 ">
      <ul className="flex flex-col gap-8 md:gap-32">
        {previews.map((preview) => (
          <li key={preview.title} className="flex flex-col items-center gap-6 md:gap-12">
            <h3 className="text-2xl font-medium text-gray-300 md:text-3xl">
              {preview.title}
            </h3>
            <Image
              src={preview.imageUrl}
              width={1080}
              height={672}
              alt={`Preview da seção ${preview.title}`}
              className="aspect-auto w-full rounded-lg object-cover"
              unoptimized
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
